import { ReactNode } from "react";
import * as Style from "./styled/AuthContainer";

interface Props {
  children: ReactNode;
}

const AuthContainer = ({ children }: Props): JSX.Element => {
  return <Style.RootContainer>{children}</Style.RootContainer>;
};

export default AuthContainer;
