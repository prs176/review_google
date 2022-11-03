import * as Style from "./styled/Logo";
import logo from "../../asset/logo.png";

interface Props {
  type: "small" | "big";
}

const Logo = ({ type }: Props): JSX.Element => {
  return (
    <Style.RootContainer>
      <Style.Image alt="" src={logo} type={type}></Style.Image>
    </Style.RootContainer>
  );
};

export default Logo;
