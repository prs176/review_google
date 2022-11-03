import Logo from "../logo/Logo";
import * as Style from "./styled/Header";

interface Props {
  type: "common" | "logout";
}

const Header = ({ type }: Props): JSX.Element => {
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
          <Style.Profile />
        </Style.ToolContainer>
      </Style.RootContainer>
      <Style.Divider></Style.Divider>
    </div>
  );
};

export default Header;
