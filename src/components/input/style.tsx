"use client";

import styled from "styled-components";

interface inputProps {
  $error?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputUnity = styled.input<inputProps>`
  width: 100%;
  margin: 0.1rem 0;
  padding: 0.325rem;
  font-size: 12px;
  border-radius: 6px;
  border: 0.1rem solid ${(props) => (props.$error ? "red" : "black")};
  outline: none;
  &:focus-visible {
    outline: 1px solid black;
    outline-offset: 2px;
  }
`;
