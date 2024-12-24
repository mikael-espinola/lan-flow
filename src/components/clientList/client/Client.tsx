import React from "react";
import {
  Box,
  Container,
  Details,
  Img,
  Name,
  Profile,
  Span,
  Status,
} from "./style";

type TClient = {
  nome: string;
  sobrenome?: string;
  dataNascimento: string;
  status: number;
  creditos: number;
};

interface IClient {
  data: TClient;
}

const Client = ({ data }: IClient) => {
  return (
    <Container>
      <Profile>
        <Box $center="center">
          <Img src="/avatar.jpg" alt="client" width={50} height={50} />
        </Box>
        <Box $center="center">
          <Name>
            {data.nome} {data.sobrenome}{" "}
          </Name>
        </Box>
      </Profile>
      <Details>
        <Box>
          <Span>
            Status:{" "}
            <Status $status={data.status}>
              {data.status === 1 ? "ONLINE" : "OFFLINE"}
            </Status>
          </Span>
        </Box>
        <Box>
          <Span>Créditos: R$ {data.creditos}</Span>
        </Box>
      </Details>
    </Container>
  );
};

export default Client;
