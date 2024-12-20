"use client";
import styled, { css } from "styled-components";

const outline = css`
  outline: 1px solid black;
  outline-offset: 4px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid black;
  margin-bottom: 1rem;
  outline: none;

  &:focus-visible {
    ${outline}
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  margin: 1rem 0;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  width: 80%;
  background-color: #ff6f00;
  border-radius: 6px;
  color: black;
  &:focus-visible {
    ${outline}
  }
`;

export const Error = styled.span`
  width: 100%;
  background-color: #ff000096;
  color: white;
  padding: 0.4rem;
  text-align: center;
  border-radius: 6px;
`;
