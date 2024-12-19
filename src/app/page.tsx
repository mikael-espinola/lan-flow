import { redirect } from "next/navigation";
import { auth } from "../../auth";
import LogoutButton from "@/components/logoutButton/LogoutButton";

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <h1>hello, {session.user?.name}</h1>
      <LogoutButton />
    </>
  );
}
