import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from '../../lib/api';
import { MdEmail, MdLock } from 'react-icons/md';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  Container,
  Title,
  Column,
  CreateText,
  ForgotText,
  Row,
  SubTitleLogin,
  TitleLogin,
  Wrapper
} from "./styles";

const schema = yup.object({
    email: yup.string().email('Digite um email valido').required('Campo Obrigatório'),
    password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Campo Obrigatório'),
  })
  .required()

export function Login() {

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&password=${formData.password}`);
      data.length === 1 ? navigate('/feed') : alert('Email ou senha inválidos');
    } catch (error) {
      alert("Error: ", error.message);
    }
  };

  return (
    <div>
      <Header/>
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors.email?.message}
                control={control}
                placeholder="E-mail"
                icon={<MdEmail/>}
              />
              <Input
                name="password"
                errorMessage={errors.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                icon={<MdLock/>}
              />
              <Button title="Entrar" variant="secondary"  />
            </form>
            <Row>
              <ForgotText>Esqueci minha senha</ForgotText>
              <CreateText>Criar conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
}
