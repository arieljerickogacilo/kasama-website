import { Box, Flex, HStack, Image, SimpleGrid, Stack, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

const FooterLink = ({children, link}) => {
  return(
    <Link href={link} passHref>
      <Box 
        cursor="pointer"
        w="100"
        _hover={{
          textDecoration: "underline",
        }}
      >
        {children}
      </Box>
    </Link>
    
  )
}

export default function Footer(props) {
  return (
    <Stack
      p={{ base: 4, lg: "3rem 8rem" }}
      backgroundColor="#FAE1D9"
      {...props}
    >
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, lg: 2 }}
      >
        <Stack
          width={{base: "100%", lg: "70%"}}
          gap={8}
          order={{ base: 0, lg: 1 }}
          mt={{base: "4rem", lg: 0}}
        >
          <Text fontSize={{base: "28px", lg: "40px"}}>
            We collaborate with ambitious brands and people.
          </Text>
          <Button
            w={{base: "100%", lg: "50%"}}
            rightIcon={<RxArrowRight />}
            fontSize="18px"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="400"
            height="60px"
            backgroundColor="#FDEADA"
            _hover={{
              backgroundColor:"rgba(31, 31, 31, 1)",
              color: "#fff"
            }}
          >
            Let's work together
          </Button>
        </Stack>

        <Flex
          direction={{base: "column", lg: "row"}}
          gap={{base: 0, lg: "8rem"}}
          mt={{base: "4rem", lg: 0}}
          alignItems={{base: "center", lg: "flex-start"}}
          order={{ base: 1, lg: 0 }}
        >
          <Image
            src="kasama-logo.png"
            width="130px"
          />
          <Stack 
            w={{base: "100%", lg: "100%"}}
            fontSize="20px"
          >
            <FooterLink link="/work">Work</FooterLink>
            <FooterLink link="/about">About</FooterLink>
            <FooterLink link="/partners">Partners</FooterLink>
            <FooterLink link="/news">News</FooterLink>
            <FooterLink link="/careers">Careers</FooterLink>
            <FooterLink link="/contact">Contact</FooterLink>
          </Stack>
        </Flex>
      </SimpleGrid>
      <HStack
        mt="8rem"
        gap={4}
        fontFamily="'Libre Baskerville', sans-serif"
      >
        <Text>Boston</Text>
        <Text>•</Text>
        <Text>Dallas</Text>
        <Text>•</Text>
        <Text>Manila</Text>
      </HStack>
    </Stack>
  )
}