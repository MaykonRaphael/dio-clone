import { useNavigate } from 'react-router-dom';
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


export function Login() {

  const navigate = useNavigate();

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
            <form>
              <Input placeholder="E-mail" icon={<MdEmail/>} />
              <Input placeholder="Senha" type="password" icon={<MdLock/>} />
              <Button title="Entrar" variant="secondary" onClick={()=> navigate('/feed')} />
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
