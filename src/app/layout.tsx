import type { Metadata } from "next";
import StyledComponentsRegistry from "../../lib/registry";
import GlobalStyle from "./globals";

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
      <body>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
