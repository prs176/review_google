import { Input, Label } from "./styled/TextField";

interface Props {
  label: string;
  placeholder: string;
  children?: string;
}

const TextField = ({ label, placeholder, children }: Props): JSX.Element => {
  return (
    <>
      <Label>{label}</Label>
      <Input placeholder={placeholder}>{children}</Input>
    </>
  );
};

export default TextField;
