import { UserImage } from './styles';
import { IUserPicture } from './types';

export function UserPicture({image}: IUserPicture) {
  return (
    <UserImage src="https://avatars.githubusercontent.com/u/82620378?v=4" />
  );
}
