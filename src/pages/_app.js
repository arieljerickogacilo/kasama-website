import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { ChakraProvider, Container, Stack } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container
        maxW="full"
        p={0}
        minH="100dvh"
        as={Stack}
        gap={0}
      >
        <Header />
        <Component {...pageProps} />
        <Footer mt="auto" />
      </Container>
    </ChakraProvider>
  )
}
