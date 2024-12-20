import type { Metadata } from "next";
import StyledComponentsRegistry from "../../lib/registry";
import GlobalStyle from "./globals";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "LanFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
