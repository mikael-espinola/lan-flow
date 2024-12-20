"use client";
import React, { FormEvent } from "react";
import { Box, Button, Container, RegisterField } from "./style";
import Input from "@/components/input/Input";
import { useRouter } from "next/navigation";

const Cadastro = () => {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Salvo");
  };
  return (
    <Container>
      <RegisterField onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          placeholder="Digite seu nome"
          type="text"
        />
        <Input
          id="email"
          type="email"
          label="E-mail"
          placeholder="Digite seu e-mail  "
        />
        <Input
          id="emailValidation"
          type="email"
          label="Confirme o e-mail"
          placeholder="Digite seu e-mail  "
        />
        <Box>
          <Input id="data-nascimento" type="date" label="Data de Nascimento" />
          <Input
            id="pass"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
          />
        </Box>
        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={() => router.push("/")}>
          Voltar
        </Button>
      </RegisterField>
    </Container>
  );
};

export default Cadastro;
