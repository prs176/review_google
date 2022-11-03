import * as Style from "./styled/TextField";

interface Props {
  label: string;
  placeholder: string;
  children?: string;
}

const TextField = ({ label, placeholder, children }: Props): JSX.Element => {
  return (
    <>
      <Style.Label>{label}</Style.Label>
      <Style.Input placeholder={placeholder}>{children}</Style.Input>
    </>
  );
};

export default TextField;
