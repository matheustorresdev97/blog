import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: 'The blog - Este é um blog com Next.js',
    template: '%s | The Blog',
  },
  description: "Essa seria a descrição dessa página.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
