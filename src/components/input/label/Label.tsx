import React, { LabelHTMLAttributes } from "react";
import { LabelStyle } from "./style";

type TLabel = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  id: string;
};

const Label = ({ label, id }: TLabel) => {
  return <LabelStyle htmlFor={id}>{label}</LabelStyle>;
};

export default Label;
