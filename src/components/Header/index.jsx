import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import {
  Container,
  HomeLink,
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

  const navigate = useNavigate();
  
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
            <MenuRight>
              <HomeLink href='/'>Home</HomeLink>
              <Button title='Entrar' onClick={()=> navigate('/login')} />
              <Button title='Cadastrar' onClick={()=> navigate('/signUp')}/>
            </MenuRight>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
