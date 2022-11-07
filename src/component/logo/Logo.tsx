import * as Style from "./styled/Logo";
import logo from "../../asset/logo.png";

interface Props {
  type: "small" | "big";
  onClick?: () => void;
}

const Logo = ({ type, onClick }: Props): JSX.Element => {
  return (
    <Style.RootContainer type={type} onClick={onClick}>
      <Style.Image alt="" src={logo} type={type}></Style.Image>
    </Style.RootContainer>
  );
};

export default Logo;
