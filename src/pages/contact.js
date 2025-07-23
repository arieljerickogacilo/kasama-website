import { Image, Stack, Text, Flex, Box, Textarea, SimpleGrid, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Kasama</title>
      </Head>
      <Stack
        overflowX="hidden"
        flex="1"
        position="relative"
        justifyContent="center"
        alignItems="center"
        background={{
          base: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 6%, #FEEFDB 17%, #FEEFDB 100%)",
          lg: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 8%, #FEEFDB 25%, #FEEFDB 100%)"
        }}
      >
        <Text
          mt={24}
          color="#213047"
          fontFamily="'Libre Baskerville', sans-serif"
          fontSize={{ base: "34px", lg: "70px" }}
          fontWeight="400"
          lineHeight="130%"
          textAlign="center"
        >Interested in<br /> working with us?</Text>
        <Image
          display={{ base: "none", lg: "block" }}
          position="absolute"
          width="378px"
          left="-154px"
          top="70px"
          height="auto"
          src="images/leaf.png"
        />
        <Stack
          mt={{ base: "4rem", lg: "4rem" }}
          gap={{ base: "2rem", lg: "2rem" }}
        >
          <Text textAlign="center" fontSize={{ base: "18px", lg: "24px" }}>We’re you referred by anyone?</Text>
          <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={8}
          >
            <Box
              borderRadius="4px"
              textAlign="center"
              padding="1rem 0"
              cursor="pointer"
              width="160px"
              border="1px solid #213047;"
              _hover={{
                backgroundColor: "#213047",
                color: "#fff"
              }}
            >Yes</Box>
            <Box
              borderRadius="4px"
              textAlign="center"
              padding="1rem 0"
              cursor="pointer"
              width="160px"
              border="1px solid #213047;"
              _hover={{
                backgroundColor: "#213047",
                color: "#fff"
              }}
            >No</Box>
          </Flex>
        </Stack>
        <Stack
          width={{ base: "100%", lg: "1006px" }}
          p={{ base: 4, lg: 0 }}
          mt={{ base: "4rem", lg: "6rem" }}
          gap={{ base: "2rem", lg: "2rem" }}
        >
          <Text
            alignSelf="center"
            width="80%"
            textAlign="center"
            fontSize={{ base: "18px", lg: "24px" }}
          >Tell us about your business and scope of the project.</Text>
          <Textarea
            border="1px solid #213047;"
            placeholder='Type here'
            height="188px"
            _placeholder={{
              color: "#213047"
            }}
          />
        </Stack>
        <Stack
          width={{ base: "100%", lg: "1006px" }}
          mt={{ base: "4rem", lg: "6rem" }}
          gap={{ base: "2rem", lg: "2rem" }}
          p={{ base: 4, lg: 0 }}
        >
          <Text textAlign="center" fontSize={{ base: "18px", lg: "24px" }}>Who can we contact to follow up?</Text>
          <SimpleGrid mt="2rem" columns={{ base: 1, lg: 2 }} gap="2rem">
            <FormControl>
              <FormLabel fontSize="18px">First Name</FormLabel>
              <Input borderBottom="1px solid #213047" variant="flushed" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="18px">Last Name</FormLabel>
              <Input borderBottom="1px solid #213047" variant="flushed" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="18px">Email</FormLabel>
              <Input borderBottom="1px solid #213047" variant="flushed" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="18px">Company</FormLabel>
              <Input borderBottom="1px solid #213047" variant="flushed" />
            </FormControl>
          </SimpleGrid>
          <Box
            mt={{ base: "1rem", lg: "2rem" }}
            alignSelf="center"
            borderRadius="4px"
            textAlign="center"
            padding="1rem 0"
            cursor="pointer"
            width={{ base: "100%", lg: "160px" }}
            backgroundColor="#213047"
            _hover={{
              backgroundColor: "#121f32ff",
              color: "#fff"
            }}
            color="#fff"
          >Submit</Box>
        </Stack>

        <Image
          display={{ base: "none", lg: "block" }}
          position="absolute"
          width="378px"
          right="-170px"
          top="620px"
          height="auto"
          src="images/leaf.png"
          transform="rotate(-155.652deg);"
        />
        <Stack
          p={{ base: 4, lg: "0 8rem" }}
          width="100%"
          mt={{ base: "8rem", lg: "16rem" }}
          mb={{ base: "4rem", lg: "8rem" }}
          gap={{ base: "2rem", lg: "2rem" }}
        >
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: "8rem", lg: "2rem" }}>
            <Flex
              position="relative"
              direction="column"
              alignItems="center"
              backgroundColor="#FAE1D9"
            >
              <Image
                position="absolute"
                top="-50%"
                width={{ base: "197px", lg: "233px" }}
                height="auto"
                src="images/city.png"
              />
              <Text
                mt="9rem"
                mb="2rem"
                fontSize="30px"
                fontFamily="'Libre Baskerville', sans-serif"
              >Boston</Text>
            </Flex>
            <Flex
              position="relative"
              direction="column"
              alignItems="center"
              backgroundColor="#FAE1D9"
            >
              <Image
                position="absolute"
                top="-50%"
                width={{ base: "197px", lg: "233px" }}
                height="auto"
                src="images/city.png"
              />
              <Text
                mt="8rem"
                mb="2rem"
                fontSize="30px"
                fontFamily="'Libre Baskerville', sans-serif"
              >Dallas</Text>
            </Flex>
            <Flex
              position="relative"
              direction="column"
              alignItems="center"
              backgroundColor="#FAE1D9"
            >
              <Image
                position="absolute"
                top="-50%"
                width={{ base: "197px", lg: "233px" }}
                height="auto"
                src="images/city.png"
              />
              <Text
                mt="8rem"
                mb="2rem"
                fontSize="30px"
                fontFamily="'Libre Baskerville', sans-serif"
              >Manila</Text>
            </Flex>
          </SimpleGrid>
        </Stack>
      </Stack>
    </>
  )
}