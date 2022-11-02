import { RootContainer, Image } from "./styled/Logo";
import logo from "../asset/logo.png";

interface Props {
  type: "small" | "big";
}

const Logo = ({ type }: Props): JSX.Element => {
  return (
    <RootContainer>
      <Image alt="" src={logo} type={type}></Image>
    </RootContainer>
  );
};

export default Logo;
