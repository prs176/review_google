import React from "react";
import * as Style from "./styled/TextField";

interface Props {
  type?: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ type, label, placeholder, value, onChange }: Props): JSX.Element => {
  return (
    <>
      <Style.Label>{label}</Style.Label>
      <Style.Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};

export default TextField;
