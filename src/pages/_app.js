import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { ChakraProvider, Container, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const hideLayout = router.pathname === "/admin/blog-generator";

  return (
    <ChakraProvider>
      <Container
        maxW="full"
        p={0}
        minH="100dvh"
        as={Stack}
        gap={0}
      >
        {!hideLayout && <Header />}
        <Component {...pageProps} />
        {!hideLayout && <Footer mt="auto" />}
      </Container>
    </ChakraProvider>
  )
}
