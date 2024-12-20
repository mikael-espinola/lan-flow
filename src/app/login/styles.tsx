"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  height: 100vh;
  background-color: #cacaca;
`;
export const Box = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  height: 30rem;
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 748px) {
    width: 22rem;
    height: 24rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  margin-top: 1rem;
  margin-bottom: 4rem;
  color: #ff6f00;

  @media (max-width: 748px) {
    font-size: 1.675rem;
  }
`;
