import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../Button';
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
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';

export function Header() {

  const navigate = useNavigate();
  const { user, handleSignOut } = useContext(AuthContext)
  
  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to='/'>
            <img src={logo} alt='Logo DIO' />
          </Link>
          {user.id ? (
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
          {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/82620378?v=4"/>
              <Link
                to="/"
                onClick={handleSignOut}
                style={{marginLeft: 14, color: '#F00'}}
              >Sair</Link>
            </>
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
