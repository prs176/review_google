import { ReactNode } from "react";
import { RootContainer } from "./styled/AuthContainer";

interface Props {
  children: ReactNode;
}

const AuthContainer = ({ children }: Props): JSX.Element => {
  return <RootContainer>{children}</RootContainer>;
};

export default AuthContainer;
