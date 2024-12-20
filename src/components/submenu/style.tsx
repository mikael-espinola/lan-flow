import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;
export const ListItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }

  &:last-child {
    color: red;
    &:hover {
      background-color: #ff00007a;
      color: black;
    }
  }
`;
