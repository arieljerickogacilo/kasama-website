import { Stack, Image, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

export default function PartnersItem({data}){
  return(
    <Stack spacing="1.5rem">
      <Image p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={data.company_logo} />
      <Text fontSize="30px" fontFamily="'Libre Baskerville', sans-serif">{data.company_name}</Text>
      <Text
        fontFamily="'Space Grotesk', sans-serif"
        fontSize={{ base: "16px", lg: "20px" }}
        w={{ base: "100%", lg: "80%" }}
      >
        {data.company_description}
      </Text>
      <Box
        mt="auto"
        transition="0.2s"
        as={Link}
        href="/partners/shopify"
        fontSize="18px"
        border="1px solid #213047"
        backgroundColor="transparent"
        color="#213047"
        borderRadius="4px"
        w={{ base: "100%", lg: "159px" }}
        textAlign="center"
        p="0.75rem 0"
        _hover={{
          backgroundColor:"rgba(31, 31, 31, 1)",
          color: "#fff"
        }}
      >
        Learn More
      </Box>
    </Stack>
  )
}