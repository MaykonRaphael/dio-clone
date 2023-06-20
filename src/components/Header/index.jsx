import Button from '../Button';
import {
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  SearchButtonContainer,
  UserPicture,
  Wrapper
} from './styles';
import logo from '../../assets/logo.png';

export default function Header({authenticated}) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt='Logo DIO' />
          {authenticated ? (
            <>
              <SearchButtonContainer>
                <Input placeholder='Buscar...'/>
              </SearchButtonContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {authenticated ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/82620378?v=4"/>
          ) : (
            <>
              <MenuRight href='#'>Home</MenuRight>
              <Button title='Entrar'/>
              <Button title='Cadastrar'/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
