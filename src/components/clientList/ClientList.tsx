"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, List, ListItem, LoaderBox } from "./style";
import Client, { TClient } from "./client/Client";
import { Users } from "./client/arr";
import SearchBar from "../searchBar/SearchBar";
import UserScreen from "../userScreen/UserScreen";
import { useRouter } from "next/navigation";

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { FiLoader } from "react-icons/fi";

const ClientList = () => {
  const router = useRouter();
  const [userList, setUserList] = useState<TClient[]>();
  const [selectedUser, setSelectedUser] = useState<TClient | null>(null);
  const [foundUser, setFoundUser] = useState<TClient[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loader, setLoader] = useState(true);

  const getClientList = async () => {
    await fetch("/api/clients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((resp) => {
        if (resp) {
          setUserList(resp);
        }
        setLoader(false);
      });
  };

  useEffect(() => {
    getClientList();
  }, []);

  const handleSelectedUser = (user: TClient) => {
    router.push(`?id=${user.id}`);
    setSelectedUser(user);
  };
  const ClearState = () => {
    router.push("/");
    setLoader(true);
    getClientList();
    setSelectedUser(null);
    setFoundUser([]);
  };

  useEffect(() => {
    if (search) {
      const filteredUsers =
        userList &&
        userList.filter(
          (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.last_name.toLowerCase().includes(search.toLowerCase()) ||
            user.nickname?.toLowerCase().includes(search.toLowerCase())
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
        {selectedUser ? (
          <div>
            <Button onClick={ClearState}>
              <MdOutlineKeyboardDoubleArrowLeft /> Voltar
            </Button>
            <UserScreen user={selectedUser} />
          </div>
        ) : (
          <>
            <SearchBar setSearch={setSearch} />

            <List>
              {loader ? (
                <LoaderBox>
                  <FiLoader />
                </LoaderBox>
              ) : foundUser?.length > 0 ? (
                foundUser.map((user) => (
                  <ListItem
                    key={user.id}
                    onClick={() => handleSelectedUser(user)}
                  >
                    <Client data={user} />
                  </ListItem>
                ))
              ) : (
                // <h1>hello</h1>
                userList &&
                userList.map((user) => (
                  <ListItem
                    onClick={() => handleSelectedUser(user)}
                    key={user.id}
                  >
                    <Client data={user} />
                  </ListItem>
                ))
              )}
            </List>
          </>
        )}
      </Box>
    </>
  );
};

export default ClientList;
