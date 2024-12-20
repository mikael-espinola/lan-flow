import React from "react";
import { Box, List, ListItem } from "./style";
import Client from "./client/Client";
import { Users } from "./client/arr";
import SearchBar from "../searchBar/SearchBar";

const ClientList = () => {
  return (
    <>
      <label>Clientes</label>
      <Box>
        <SearchBar />
        <List>
          {Users.map((user, index) => (
            <ListItem key={index}>
              <Client data={user} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default ClientList;
