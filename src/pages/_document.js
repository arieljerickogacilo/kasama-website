import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Container, Stack } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="kasama-logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
