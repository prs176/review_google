import { useNavigate } from "react-router-dom";
import * as Style from "./styled/Header";

interface Props {
  email?: string;
}

const Profile = ({ email }: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Style.RootContainer>
      <Style.ToolContainer>
        {email ? (
          <>
            <p>{email}</p>
            <Style.LoggedInProfile
              onClick={() => {
                navigate("/my");
              }}
            />
          </>
        ) : (
          <>
            <Style.LogoutButton
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </Style.LogoutButton>
            <Style.LoggedOutProfile
              onClick={() => {
                navigate("/login");
              }}
            />
          </>
        )}
      </Style.ToolContainer>
    </Style.RootContainer>
  );
};

export default Profile;
