"use client";
import { FiLoader } from "react-icons/fi";
import styled, { keyframes } from "styled-components";

interface buttonProps {
  $option?: string;
  $apiStatus?: string;
}

interface errorBox {
  $status?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const RegisterField = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 30rem;
  border: 1px solid black;
  border-radius: 6px;
  padding: 0.5rem;

  @media (max-width: 768px) {
    margin: 0 0.4rem;
  }
`;

export const Button = styled.button<buttonProps>`
  border: none;
  background-color: ${(props) =>
    props.$option === "back" ? "grey" : props.disabled ? "green" : "#ff6f00"};
  padding: 0.4rem;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  color: ${(props) => props.$option === "back" && "white"};

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PasswordBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FullNameBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
`;

export const BirthBox = styled.div`
  display: flex;
  padding-right: 0.5rem;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ErrorBox = styled.div<errorBox>`
  display: flex;
  opacity: ${(props) => (props.$status ? "1" : "0")};
  pointer-events: none;
  margin-bottom: 0.2rem;
  P {
    font-size: 10px;
    color: red;
  }
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  } 
  100% {
    transform: rotate(360deg);
  }
`;
export const Loader = styled(FiLoader)`
  animation: ${rotate} 3s linear infinite;
`;
