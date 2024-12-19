import React, { Suspense } from "react";
import { Box, Container } from "./styles";
import LoginForm from "@/components/loginForm/LoginForm";

const Login = () => {
  return (
    <Suspense>
      <Container>
        <Box>
          <LoginForm />
        </Box>
      </Container>
    </Suspense>
  );
};

export default Login;
