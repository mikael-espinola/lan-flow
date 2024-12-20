import React from "react";
import { Container, Input } from "./style";

const SearchBar = () => {
  return (
    <Container>
      <Input type="text" placeholder="Pesquisar..." />
    </Container>
  );
};

export default SearchBar;
