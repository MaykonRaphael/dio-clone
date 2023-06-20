import UserPicture from '../UserPicture';
import {
  Container,
  NameText,
  Progress
} from './styles';

export default function UserInfo({name, percentual}) {
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
