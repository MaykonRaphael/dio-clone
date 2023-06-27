import { UserPicture } from '../UserPicture';
import {
  Container,
  NameText,
  Progress
} from './styles';
import { IUserInfo } from './types';

export function UserInfo({name, percentual}: IUserInfo) {
  return (
    <Container>
      <UserPicture/>
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percentual}/>
      </div>
    </Container>
  );
}
