"use client";
import React, { useState } from "react";
import { TClient } from "../clientList/client/Client";
import {
  ActionsBox,
  BoxName,
  Button,
  ClientName,
  Container,
  Item,
  ItemList,
  ItemLabel,
  Label,
  ItemData,
} from "./style";

interface IUserScreen {
  user: TClient;
}

const UserScreen = ({ user }: IUserScreen) => {
  const [id, setId] = useState<string>(user?.id);

  return (
    <>
      {user && (
        <Container>
          <BoxName>
            <ClientName>
              <Label>
                Cliente: {user.name} {user.last_name}
              </Label>
              <Label>/</Label>
              <Label>
                Nickname: {user.nickname ? user.nickname : "Não cadastrado"}
              </Label>
            </ClientName>
            <ActionsBox>
              <Button
                disabled={user.status === "OFFLINE" ? true : false}
                $type="drop"
              >
                Encerrar Sessão
              </Button>
              <Button>Recarregar</Button>
              <Button $type={"edit"}>Editar</Button>
              <Button $type={"delete"}>Excluir</Button>
            </ActionsBox>
          </BoxName>

          <ItemList>
            <Item>
              <ItemLabel>
                Créditos: R$
                <ItemData $type={user.creditos === "0" && true}>
                  {user.creditos}
                </ItemData>
              </ItemLabel>
            </Item>
            <Item>
              <ItemLabel>
                Status:
                <ItemData $type={user.status === "OFFLINE" && true}>
                  {user.status}
                </ItemData>
              </ItemLabel>
            </Item>
            <Item>
              <ItemLabel>
                E-mail:<ItemData>{user.email}</ItemData>
              </ItemLabel>
            </Item>

            <Item>
              <ItemLabel>
                Birthday:<ItemData>{user.birthday}</ItemData>
              </ItemLabel>
            </Item>

            <Item>
              <ItemLabel>
                Data de registro:<ItemData>{user.createdAt}</ItemData>
              </ItemLabel>
            </Item>
            <Item>
              <ItemLabel>
                Última atualização:<ItemData>{user.updatedAt}</ItemData>{" "}
              </ItemLabel>
            </Item>
          </ItemList>
        </Container>
      )}
    </>
  );
};

export default UserScreen;
