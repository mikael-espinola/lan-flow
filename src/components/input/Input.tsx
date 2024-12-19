import React, { InputHTMLAttributes } from "react";
import { Container, InputUnity } from "./style";
import Label from "./label/Label";

type TInput = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  placeholder?: string;
  label?: string;
  id: string;
};

const Input = ({ type, placeholder, label, id }: TInput) => {
  return (
    <Container>
      {label && <Label id={id} label={label} />}
      <InputUnity id={id} type={type} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
