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
  const [foundUser, setFoundUser] = useState<TClient[]>([]);
  const [search, setSearch] = useState<string>("");

  const handleSelectedUser = (user: TClient) => {
    router.push(`?id=${user.id}`);
    setUser(user);
  };
  const ClearState = () => {
    router.push("/");
    setUser(null);
    setFoundUser([]);
  };

  useEffect(() => {
    if (search) {
      const filteredUsers = Users.filter(
        (user) =>
          user.nome.toLowerCase().includes(search.toLowerCase()) ||
          user.sobrenome.toLowerCase().includes(search.toLowerCase()) ||
          user.nickname.toLowerCase().includes(search.toLowerCase())
      );
      if (filteredUsers) {
        setFoundUser(filteredUsers);
      }
    } else {
      setFoundUser([]);
    }
  }, [search, Users]);

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
            <SearchBar setSearch={setSearch} />

            <List>
              {foundUser?.length > 0
                ? foundUser.map((user) => (
                    <ListItem
                      key={user.id}
                      onClick={() => handleSelectedUser(user)}
                    >
                      <Client data={user} />
                    </ListItem>
                  ))
                : Users.map((user) => (
                    <ListItem
                      onClick={() => handleSelectedUser(user)}
                      key={user.id}
                    >
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
