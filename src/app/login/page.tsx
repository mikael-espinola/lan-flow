import React, { Suspense } from "react";
import { Box, Container, Title } from "./styles";
import LoginForm from "@/components/loginForm/LoginForm";

const Login = () => {
  return (
    <Suspense>
      <Container>
        <Box>
          <Title>LanFlow Management</Title>
          <LoginForm />
        </Box>
      </Container>
    </Suspense>
  );
};

export default Login;
