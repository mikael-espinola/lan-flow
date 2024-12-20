"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #cacaca;
  min-height: 100vh;
`;

export const Aside = styled.aside`
  width: 9.5rem;
  background-color: #f0f0f0;
  position: fixed;
  height: 100vh;
`;

export const Title = styled.label`
  font-weight: 700;
  font-size: 1.875rem;
  color: #ff6f00;
  margin-left: 0.4rem;

  @media (max-width: 748px) {
    font-size: 1.675rem;
  }
`;

export const Box = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  margin: 0.2rem 0.4rem 0 10rem;
`;

export const Saudacao = styled.label`
  display: flex;
  justify-content: end;
  font-size: 12px;

  cursor: default;
  @media (max-width: 748px) {
    font-size: 1.075rem;
  }
`;

export const ClientBox = styled.div`
  display: flex;
  flex-direction: column;
`;
