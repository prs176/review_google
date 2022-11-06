import * as Style from "./styled/LabelButton";

interface Props {
  children?: string;
  onClick: () => void;
}

const LabelButton = ({ children, onClick }: Props): JSX.Element => {
  return <Style.Button onClick={onClick}>{children}</Style.Button>;
};

export default LabelButton;
