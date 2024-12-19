"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const RegisterField = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 40rem;
`;

export const Button = styled.button`
  border: none;
  background-color: aqua;
  padding: 0.4rem;
  border-radius: 6px;
  margin-bottom: 0.3rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 0.5rem;
`;
