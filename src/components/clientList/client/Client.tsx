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

export type TClient = {
  id: string;
  name: string;
  last_name: string;
  birthday?: string;
  status: string;
  creditos: string;
  email: string;
  updatedAt?: string;
  createdAt?: string;
  nickname?: string;
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
            {data.name} {data.last_name}
          </Name>
        </Box>
      </Profile>
      <Details>
        <Box>
          <Span>
            Status: <Status $status={data.status}>{data.status}</Status>
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
