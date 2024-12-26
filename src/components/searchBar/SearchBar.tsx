import React from "react";
import { Container, Input } from "./style";

interface SearchBarProps {
  setSearch: (search: string) => void;
}

const SearchBar = ({ setSearch }: SearchBarProps) => {
  return (
    <Container>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Pesquisar..."
      />
    </Container>
  );
};

export default SearchBar;
