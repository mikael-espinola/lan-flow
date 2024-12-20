import { redirect } from "next/navigation";
import { auth } from "../../auth";
import { Aside, Box, ClientBox, Container, Saudacao, Title } from "./style";
import Submenu from "@/components/submenu/Submenu";
import ClientList from "@/components/clientList/ClientList";

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <Container>
      <Aside>
        <Title>LanFlow</Title>
        <Submenu />
      </Aside>
      <Box>
        <Saudacao>Olá, {session.user?.name}</Saudacao>
        <ClientBox>
          <ClientList />
        </ClientBox>
      </Box>
    </Container>
  );
}
