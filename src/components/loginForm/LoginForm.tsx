"use client";
import React, { FormEvent } from "react";
import { Box, Button, Error, FormContainer, Input, Label } from "./style";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/",
    });
  };

  return (
    <FormContainer onSubmit={handleLogin}>
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" type="email" name="email" />
      <Label htmlFor="pass">Senha</Label>
      <Input id="pass" type="password" name="password" />
      <Box>
        <Button type="submit">Entrar</Button>
        <Button type="button" onClick={() => router.push("/cadastro")}>
          Cadastre-se
        </Button>
      </Box>
    </FormContainer>
  );
};

export default LoginForm;
