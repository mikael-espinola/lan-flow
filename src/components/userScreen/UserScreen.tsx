"use client";
import React, { useEffect, useState } from "react";
import { TClient } from "../clientList/client/Client";
import {
  Button,
  Container,
  Data,
  Input,
  Option,
  Options,
  Select,
  SelectOption,
} from "./style";

import { FaPen } from "react-icons/fa";
import { TiPlusOutline } from "react-icons/ti";

import { FaCheckDouble } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

interface IUserScreen {
  user: TClient | null;
}

const UserScreen = ({ user }: IUserScreen) => {
  const params = useSearchParams();
  const [id, setId] = useState<string | null>(null);

  const [editName, setEditName] = useState(false);
  const [editSurname, setEditSurname] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [editCredits, setEditCredits] = useState(false);
  const [editBirthday, setEditBirthday] = useState(false);

  const handleToggleEditName = () => {
    setEditName(!editName);
  };
  const handleToggleEditSurname = () => {
    setEditSurname(!editSurname);
  };
  const handleToggleEditStatus = () => {
    setEditStatus(!editStatus);
  };

  const handleStatusChange = (newStatus: string) => {};

  const handleToggleEditCredits = () => {
    setEditCredits(!editCredits);
  };
  const handleToggleEditBirthday = () => {
    setEditBirthday(!editBirthday);
  };

  const getId = () => {
    const id = params.get("id");
    setId(id);
  };
  useEffect(() => {
    console.log(id);
  }, [id]);
  useEffect(() => {
    getId();
  });

  return (
    <>
      {user && (
        <Container>
          <Options>
            <Option>
              Nome:
              {editName ? (
                <>
                  <Input placeholder={user.nome} />
                  <Button onClick={handleToggleEditName}>
                    <FaCheckDouble />
                  </Button>
                </>
              ) : (
                <>
                  <Data>{user.nome}</Data>
                  <Button onClick={handleToggleEditName}>
                    <FaPen />
                  </Button>
                </>
              )}
            </Option>
            <Option>
              Sobrenome:
              {editSurname ? (
                <>
                  <Input placeholder={user.sobrenome} />
                  <Button onClick={handleToggleEditSurname}>
                    <FaCheckDouble />
                  </Button>
                </>
              ) : (
                <>
                  <Data>{user.sobrenome}</Data>
                  <Button onClick={handleToggleEditSurname}>
                    <FaPen />
                  </Button>
                </>
              )}
            </Option>
            <Option>
              Status:{" "}
              {editStatus ? (
                <>
                  <Select
                    defaultValue={`${
                      user.status === "1" ? "ONLINE" : "OFFLINE"
                    }`}
                    onChange={(event) => handleStatusChange(event.target.value)}
                  >
                    <SelectOption value={1}>ONLINE</SelectOption>
                    <SelectOption value={0}>OFFLINE</SelectOption>
                  </Select>
                  <Button onClick={handleToggleEditStatus}>
                    <FaCheckDouble />
                  </Button>
                </>
              ) : (
                <>
                  <Data>{user.status === "1" ? "ONLINE" : "OFFLINE"}</Data>
                  <Button onClick={handleToggleEditStatus}>
                    <FaPen />
                  </Button>
                </>
              )}
            </Option>
            <Option>
              Créditos:{" "}
              {editCredits ? (
                <>
                  <Input placeholder={`${user.creditos}`} />
                  <Button onClick={handleToggleEditCredits}>
                    <FaCheckDouble />
                  </Button>
                </>
              ) : (
                <>
                  <Data>{user.creditos}</Data>
                  <Button onClick={handleToggleEditCredits}>
                    <TiPlusOutline />
                  </Button>
                </>
              )}
            </Option>
            <Option>
              Data de Nascimento:{" "}
              {editBirthday ? (
                <>
                  <Input placeholder={user.dataNascimento} />
                  <Button onClick={handleToggleEditBirthday}>
                    <FaCheckDouble />
                  </Button>
                </>
              ) : (
                <>
                  <Data>{user.dataNascimento}</Data>
                  <Button onClick={handleToggleEditBirthday}>
                    <FaPen />
                  </Button>
                </>
              )}
            </Option>
          </Options>
        </Container>
      )}
    </>
  );
};

export default UserScreen;
