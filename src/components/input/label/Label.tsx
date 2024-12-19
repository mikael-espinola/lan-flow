import React, { LabelHTMLAttributes } from "react";

type TLabel = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  id: string;
};

const Label = ({ label, id }: TLabel) => {
  return <label htmlFor={id}>{label}</label>;
};

export default Label;
