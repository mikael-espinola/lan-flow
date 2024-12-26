import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Options = styled.ul`
  border: 1px solid black;
  border-radius: 6px;
  padding: 0.25rem;
  margin: 0.2rem;
`;

export const Option = styled.li`
  font-size: 20px;
  display: flex;
`;

export const Data = styled.span`
  margin-left: 0.5rem;
  font-style: italic;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    font-size: 15px;
    margin-left: 0.625rem;
  }
`;
export const Input = styled.input`
  margin-left: 0.625rem;
  padding: 0.325rem;
`;

export const Select = styled.select``;
export const SelectOption = styled.option``;
