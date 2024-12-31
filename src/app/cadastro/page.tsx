import React, { FormEvent } from "react";
import { Container, Title } from "./style";
import CadastroForm from "@/components/cadastroForm/CadastroForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LanFLow - Cadastro",
  description: "Página para cadastro de usuários",
};

const Cadastro = () => {
  return (
    <Container>
      <Title aria-label="Cadastro de usuário">Cadastro de Usuário</Title>
      <CadastroForm />
    </Container>
  );
};

export default Cadastro;
