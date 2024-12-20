"use client";
import React, { FormEvent, Suspense, useEffect, useState } from "react";
import { Box, Button, Error, FormContainer, Input, Label } from "./style";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();

  const errorText = searchParams.get("error");

  useEffect(() => {
    if (errorText === "CredentialsSignin") {
      setError(true);
    }
    const timer = setTimeout(() => setError(false), 5000);

    return () => clearTimeout(timer);
  }, [errorText]);

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
      <Label id="email-label" htmlFor="email">
        E-mail
      </Label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        aria-labelledby="email-label"
      />
      <Label id="pass-label" htmlFor="pass">
        Senha
      </Label>
      <Input
        id="pass"
        type="password"
        name="password"
        placeholder="Digite sua senha"
        aria-labelledby="pass-label"
      />
      <Box>
        <Button type="submit">Entrar</Button>
      </Box>
      <Suspense fallback={<div></div>}>
        {error && <Error>E-mail ou senha não confere</Error>}
      </Suspense>
    </FormContainer>
  );
};

export default LoginForm;
