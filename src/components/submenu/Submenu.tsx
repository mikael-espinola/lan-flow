"use client";
import React from "react";
import { List, ListItem } from "./style";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

const Submenu = () => {
  return (
    <List>
      <ListItem onClick={() => redirect("/")}>Início</ListItem>
      <ListItem onClick={() => redirect("/cadastro")}>Cadastrar</ListItem>
      <ListItem onClick={() => redirect("/profile")}>Perfil</ListItem>
      <ListItem onClick={() => signOut()}>Sair</ListItem>
    </List>
  );
};

export default Submenu;
