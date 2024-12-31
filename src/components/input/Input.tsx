import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import { Container, InputUnity } from "./style";
import Label from "./label/Label";

type TInput = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  placeholder?: string;
  label?: string;
  id: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
};

const Input = ({
  error,
  onChange,
  name,
  type,
  placeholder,
  label,
  id,
}: TInput) => {
  return (
    <Container>
      {label && <Label id={id} label={label} />}
      <InputUnity
        $error={error}
        onChange={onChange}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
