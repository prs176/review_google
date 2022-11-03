import * as Style from "./styled/Header";

interface Props {
  userId: string;
  isLoggedIn: boolean;
}

const Profile = ({ userId, isLoggedIn }: Props): JSX.Element => {
  return (
    <Style.RootContainer>
      <Style.ToolContainer>
        {isLoggedIn ? (
          <>
            <p>{userId}</p>
            <Style.LoggedInProfile />
          </>
        ) : (
          <>
            <Style.LogoutButton>로그인</Style.LogoutButton>
            <Style.LoggedOutProfile />
          </>
        )}
      </Style.ToolContainer>
    </Style.RootContainer>
  );
};

export default Profile;
