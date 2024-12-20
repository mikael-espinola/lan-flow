"use client";
import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid orange;
  border-radius: 6px;
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  min-height: 8rem;
  border-radius: 6px;

  @media (max-width: 1268px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ListItem = styled.li`
  list-style: none;
`;
