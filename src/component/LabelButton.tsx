import { Button } from "./styled/LabelButton";

interface Props {
  children?: string;
}

const LabelButton = ({ children }: Props): JSX.Element => {
  return <Button>{children}</Button>;
};

export default LabelButton;
