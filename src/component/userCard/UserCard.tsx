import { User } from "../../model/user";
import * as Style from "./styled/UserCard";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props): JSX.Element => {
  return (
    <>
      <Style.UserInfoContainer>
        <Style.Name>{user.name}</Style.Name>
        <Style.Birth>{user.birth}</Style.Birth>
      </Style.UserInfoContainer>
      {user.email}
    </>
  );
};

export default UserCard;
