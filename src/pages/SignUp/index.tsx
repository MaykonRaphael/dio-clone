import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { MdEmail, MdLock, MdAccountCircle } from 'react-icons/md';

import { api } from "../../lib/api";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";

import {
  Column,
  Container,
  LoginText,
  RightAccept,
  SubTitleSignUp,
  Title,
  TitleSignUp,
  Wrapper
} from './styles';
import { IFormData } from "./types";

const schema = yup.object({
  name: yup.string().required('Campo Obrigatório'),
  email: yup.string().email('Digite um email valido').required('Campo Obrigatório'),
  password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Campo Obrigatório'),
})
.required()

export function SignUp() {

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.post('/users', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      if(data.name !== '') {
        navigate('/feed')
      }
    } catch {
      alert("Error: Erro ao criar conta!");
    }
  };

  return (
    <div>
      <Header/>
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts,
            dominar as principais tecnologias e entrar mais
            rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleSignUp>Comece agora grátis</TitleSignUp>
            <SubTitleSignUp>Crie sua conta e make the change._</SubTitleSignUp>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="name"
                errorMessage={errors.name?.message}
                placeholder="Nome Completo"
                icon={<MdAccountCircle/>}
              />
              <Input
                control={control}
                name="email"
                errorMessage={errors.email?.message}
                placeholder="E-mail"
                icon={<MdEmail/>}
              />
              <Input
                control={control}
                name="password"
                errorMessage={errors.password?.message}
                placeholder="Password"
                type="password"
                icon={<MdLock/>}
              />
              <Button title="Criar minha conta" variant="secondary" />
            </form>
            <RightAccept>
              Ao clicar em "criar minha conta grátis",
              declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </RightAccept>
            <LoginText>Já tenho conta. <a href="/login">Fazer login</a></LoginText>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
}
