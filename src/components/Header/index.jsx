import Button from '../Button';
import {
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  SearchButtonContainer,
  Wrapper
} from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt='Logo DIO' />
          <SearchButtonContainer>
            <Input placeholder='Buscar...'/>
          </SearchButtonContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href='#'>Home</MenuRight>
          <Button title='Entrar'/>
          <Button title='Cadastrar'/>
        </Row>
      </Container>
    </Wrapper>
  );
}
