import React from "react";
import { Box, Container } from "./styles";
import LoginForm from "@/components/loginForm/LoginForm";

const Login = () => {
  return (
    <Container>
      <Box>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default Login;
