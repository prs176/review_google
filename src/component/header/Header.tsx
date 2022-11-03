import Logo from "../logo/Logo";
import * as Style from "./styled/Header";

interface Props {
  isLoggedIn: boolean;
  type: "common" | "logout";
}

const Header = ({ isLoggedIn, type }: Props): JSX.Element => {
  return (
    <div>
      <Style.RootContainer>
        <Logo type="small"></Logo>
        <Style.ToolContainer>
          {type === "common" ? (
            <Style.SearchInput></Style.SearchInput>
          ) : (
            <Style.LogoutButton>로그아웃</Style.LogoutButton>
          )}
          {isLoggedIn ? <Style.LoggedInProfile /> : <Style.LoggedOutProfile />}
        </Style.ToolContainer>
      </Style.RootContainer>
      <Style.Divider></Style.Divider>
    </div>
  );
};

export default Header;
