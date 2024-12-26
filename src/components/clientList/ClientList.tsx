"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, List, ListItem } from "./style";
import Client, { TClient } from "./client/Client";
import { Users } from "./client/arr";
import SearchBar from "../searchBar/SearchBar";
import UserScreen from "../userScreen/UserScreen";
import { useRouter } from "next/navigation";

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const ClientList = () => {
  const router = useRouter();
  const [user, setUser] = useState<TClient | null>(null);

  const handleSelectedUser = (user: TClient) => {
    router.push(`?id=${user.id}`);
    setUser(user);
  };
  const ClearState = () => {
    router.push("/");
    setUser(null);
  };

  return (
    <>
      <label>Clientes</label>
      <Box>
        {user ? (
          <div>
            <Button onClick={ClearState}>
              <MdOutlineKeyboardDoubleArrowLeft /> Voltar
            </Button>
            <UserScreen user={user} />
          </div>
        ) : (
          <>
            <SearchBar />

            <List>
              {Users.map((user, index) => (
                <ListItem onClick={() => handleSelectedUser(user)} key={index}>
                  <Client data={user} />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Box>
    </>
  );
};

export default ClientList;
