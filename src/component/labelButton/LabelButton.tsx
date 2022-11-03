import * as Style from "./styled/LabelButton";

interface Props {
  children?: string;
}

const LabelButton = ({ children }: Props): JSX.Element => {
  return <Style.Button>{children}</Style.Button>;
};

export default LabelButton;
