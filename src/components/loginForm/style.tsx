"use client";
import styled from "styled-components";

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
  width: 50%;
  background-color: black;
  border-radius: 6px;
  color: white;
`;

export const Error = styled.div`
  width: 100%;
  background-color: red;
  color: white;
`;
