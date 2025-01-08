import styled from "styled-components";

interface ButtonProps {
  $type?: string;
}

interface ItemDataProps {
  $type?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const BoxName = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ClientName = styled.h4``;

export const Label = styled.label`
  padding-left: 0.5rem;

  &:first-child {
    padding: 0;
  }
`;

export const ActionsBox = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 6px;
  background-color: ${(props) =>
    props.$type === "delete"
      ? "red"
      : props.$type === "edit"
      ? "orange"
      : props.$type === "drop"
      ? "gray"
      : "green"};
  color: white;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    outline: 0.1rem solid black;
    outline-offset: 2px;
  }
`;
export const ItemList = styled.ul`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Item = styled.li`
  padding: 0.5rem 0.2rem;
  border-bottom: 1px solid black;
  border-radius: 6px;
`;

export const ItemLabel = styled.label``;
export const ItemData = styled.span<ItemDataProps>`
  padding-left: 0.5rem;
  color: ${(props) => (props.$type ? "red" : "black")};
`;
