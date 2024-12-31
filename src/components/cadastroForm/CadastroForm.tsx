"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  BirthBox,
  Button,
  ButtonBox,
  Container,
  ErrorBox,
  FullNameBox,
  Loader,
  PasswordBox,
  RegisterField,
} from "./style";
import Input from "@/components/input/Input";
import { useRouter } from "next/navigation";

import { FcApproval } from "react-icons/fc";
import { FiLoader } from "react-icons/fi";

type TData = {
  name: string;
  email: string;
  last_name: string;
  permission: string;
  password: string;
};

type TFormData = {
  name: string;
  lastName: string;
  email: string;
  validatedEmail: string;
  password: string;
  validatedPassword: string;
  birthDate: string;
};

type FormErrors = {
  [k in keyof TFormData]?: boolean;
};

const CadastroForm = () => {
  const [apiStatus, setApiStatus] = useState<number>();
  const [errors, setErrors] = useState<FormErrors>({});
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const sentDataUser = async (data: TData) => {
    setLoader(true);
    const response = await fetch("/api/auth/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        last_name: data.last_name,
        permission: data.permission,
        password: data.password,
      }),
    });
    setApiStatus(response.status);

    if (response.status === 201) {
      setLoader(false);
      setTimeout(() => {
        router.push("/");
      }, 2500);
    }
  };

  const validateFields = (data: TFormData) => {
    const newErrors: FormErrors = {};

    if (
      data.password !== data.validatedPassword ||
      !data.password ||
      !data.validatedPassword
    ) {
      newErrors.password = true;
      newErrors.validatedPassword = true;
    }

    if (!data.name) {
      newErrors.name = true;
    }
    if (!data.birthDate) {
      newErrors.birthDate = true;
    }

    if (
      !data.email ||
      !data.validatedEmail ||
      data.email !== data.validatedEmail
    ) {
      newErrors.email = true;
      newErrors.validatedEmail = true;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      validatedEmail: formData.get("validatedEmail")?.toString() || "",
      password: formData.get("pass")?.toString() || "",
      validatedPassword: formData.get("validatedPass")?.toString() || "",
      birthDate: formData.get("birthDate")?.toString() || "",
    };

    let statusFormValidation = validateFields(data);

    if (statusFormValidation) {
      let permissionDefault = "user";

      const finalData = {
        email: data.email,
        name: data.name,
        last_name: data.lastName,
        permission: permissionDefault,
        password: data.password,
      };
      sentDataUser(finalData);
    }
  };

  return (
    <Container>
      <RegisterField onSubmit={handleSubmit}>
        <FullNameBox>
          <Input
            error={errors.name}
            name="name"
            label="Nome"
            id="name"
            placeholder="Digite seu nome"
            type="text"
          />
          <Input
            name="lastName"
            label="Sobrenome"
            id="lastName"
            placeholder="Digite seu sobrenome"
            type="text"
          />
        </FullNameBox>
        <ErrorBox $status={errors.name}>
          <p>Campo obrigatório</p>
        </ErrorBox>
        <Input
          error={errors.email}
          name="email"
          id="email"
          type="email"
          label="E-mail"
          placeholder="Digite seu e-mail  "
        />
        <Input
          error={errors.validatedEmail}
          name="validatedEmail"
          id="validatedEmail"
          type="email"
          label="Confirme o e-mail"
          placeholder="Digite seu e-mail  "
        />
        <ErrorBox $status={errors.email || errors.validatedEmail}>
          <p>E-mails não conferem</p>
        </ErrorBox>
        <PasswordBox>
          <Input
            error={errors.password}
            name="pass"
            id="pass"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
          />
          <Input
            error={errors.validatedPassword}
            name="validatedPass"
            id="validatedPass"
            type="password"
            label="Confirme a senha"
            placeholder="Digite sua senha"
          />
        </PasswordBox>
        <ErrorBox $status={errors.password || errors.validatedPassword}>
          <p>Senhas não conferem</p>
        </ErrorBox>
        <BirthBox>
          <Input
            error={errors.birthDate}
            name="birthDate"
            id="birthDate"
            type="date"
            label="Data de Nascimento"
          />
        </BirthBox>
        <ErrorBox $status={errors.birthDate}>
          <p>Campo obrigatório</p>
        </ErrorBox>
        <ButtonBox>
          <Button $option="back" type="button" onClick={() => router.push("/")}>
            Voltar
          </Button>
          <Button
            $apiStatus={apiStatus?.toString()}
            disabled={apiStatus === 201 ? true : false}
            type="submit"
          >
            {loader ? (
              <Loader />
            ) : apiStatus === 201 ? (
              <FcApproval />
            ) : (
              "Salvar"
            )}
          </Button>
        </ButtonBox>
      </RegisterField>
    </Container>
  );
};

export default CadastroForm;
