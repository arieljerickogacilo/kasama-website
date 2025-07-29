import { Image, Stack, Text, Flex, Box, SimpleGrid, Divider, UnorderedList, ListItem } from "@chakra-ui/react";
import Head from "next/head";

export default function Shopify() {
  return (
    <>
      <Head>
        <title>Shopify | Partners | Kasama</title>
      </Head>
      <Stack
        overflowX="hidden"
        flex="1"
        position="relative"
        justifyContent="center"
        alignItems="center"
        background={{
          base: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 4%, #FEEFDB 6%, #FEEFDB 100%)",
          lg: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 3%, #FEEFDB 8%, #FEEFDB 100%)"
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
        >Making commerce<br /> better for everyone</Text>
        <Image
          display={{ base: "none", lg: "block" }}
          position="absolute"
          width="378px"
          left="-154px"
          top="70px"
          height="auto"
          src="../images/leaf.png"
        />

        <Stack
          mt={{ base: "8rem", lg: "16rem" }}
          p={{ base: 4, lg: 0 }}
        >
          <Flex
            position="relative"
            direction="column"
            width={{ base: "100%", lg: "1006px" }}
            p={{ base: 10, lg: 16 }}
            pb={{ base: 12, lg: "6rem" }}
            pt="0"
            alignItems="center"
            backgroundColor="#FAE1D9"
          >
            <Image
              position="absolute"
              top={{ base: "-15%", lg: "-25%" }}
              width={{ base: "197px", lg: "343px" }}
              height="auto"
              src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png"
            />
            <Text
              fontFamily="'Libre Baskerville', sans-serif"
              fontSize="48px"
              mt={{ base: "8rem", lg: "12rem" }}
              mb={{ base: "2rem", lg: 8 }}
            >Shopify</Text>
            <Text
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{ base: "18px", lg: "24px" }}
              textAlign="center"
              width={{ base: "100%", lg: "727px" }}
            >
              Shopify is a leading global commerce company, providing trusted tools to start, grow, market, and manage a retail business of any size. Shopify makes commerce better for everyone with a platform and services that are engineered for reliability, while delivering a better shopping experience for consumers everywhere.
            </Text>
          </Flex>
        </Stack>

        <Image
          display={{ base: "none", lg: "block" }}
          position="absolute"
          width="378px"
          right="-170px"
          top="620px"
          height="auto"
          src="../images/leaf.png"
          transform="rotate(-155.652deg);"
        />

        <Stack
          width={{ base: "100%", lg: "80%" }}
          p={{ base: 4, lg: "0 8rem" }}
          mt={{ base: 0, lg: "4rem" }}
          gap={{ base: "2rem", lg: "2rem" }}
        >
          <Divider borderColor="#213047" />
          <Text fontFamily="'Space Grotesk', sans-serif" fontSize={{ base: "24px", lg: "30px" }}>Key Capabilities</Text>
          <SimpleGrid
            alignSelf="center"
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: "4rem", lg: "2rem" }}
            mt="2rem" mb="4rem"
          >
            <Stack>
              <Text fontFamily="'Libre Baskerville', sans-serif" fontSize={{ base: "34px", lg: "70px" }}>Checkout</Text>
              <Text mt={4} mb={4} fontFamily="'Space Grotest', sans-serif" fontSize={{ base: "18px", lg: "20px" }}>
                Shopify is a leading global commerce company, providing trusted tools to start, grow, market, and manage a retail business of any size. Shopify makes commerce better for everyone with a platform and services that are engineered.
              </Text>
              <Text fontFamily="'Libre Baskerville', sans-serif" fontSize={{ base: "34px", lg: "70px" }}>B2B</Text>
              <Text fontFamily="'Libre Baskerville', sans-serif" fontSize={{ base: "34px", lg: "70px" }}>B2C</Text>
              <Text fontFamily="'Libre Baskerville', sans-serif" fontSize={{ base: "34px", lg: "70px" }}>POS</Text>
            </Stack>
            <Image src="https://cdn.shopify.com/b/shopify-brochure2-assets/b962a823c487438a5072b2281e71071e.png" />
          </SimpleGrid>
        </Stack>
        <Box
          width={{ base: "100%", lg: "80%" }}
          mt={8}
          mb={16}
          display={{base: "none", lg: "block"}}
        >
          <Image borderRadius={4} src="https://cdn.shopify.com/b/shopify-brochure2-assets/2f453878745c0b0eda5463111c3af909.png?originalWidth=4075&originalHeight=1920&width=2000" w="100%" />
        </Box>
        <Text
          mt={{base: 0, lg: 24}}
          mb={{base: 4, lg: 24}}
          color="#213047"
          fontFamily="'Libre Baskerville', sans-serif"
          fontSize={{ base: "34px", lg: "70px" }}
          fontWeight="400"
          lineHeight="130%"
          textAlign="center"
        >Tailored Shopify<br /> implementations.</Text>
         <Box
          width={{ base: "100%", lg: "80%" }}
          p={4}
          mt={8}
          mb={{base: 0, lg: 16}}
          display={{base: "block", lg: "none"}}
        >
          <Image 
            width="350px"
            height="350px"
            objectFit="cover"
            borderRadius={4} 
            src="https://cdn.shopify.com/b/shopify-brochure2-assets/2f453878745c0b0eda5463111c3af909.png" />
        </Box>
        <Box
          width={{ base: "100%", lg: "80%" }}
          p={4}
        >
          <SimpleGrid
            alignSelf="center"
            columns={{ base: 1, lg: 2 }}
            mt="2rem" mb="4rem"
          >
            <Image
              display={{base: "none", lg: "block"}}
              borderRadius={4}
              src="https://cdn.shopify.com/b/shopify-brochure2-assets/890dbeb471a10637528a72179b12bfa9.jpg"
            />
            <Stack>
              <Text mt={{base: 0, lg: 6}} mb={{base: 0, lg: 6}} fontFamily="'Libre Baskerville', sans-serif" fontSize={{ base: "18px", lg: "24px" }}>
                Our team partners with you to understand your unique goals, challenges, and market positioning. From here, we build a Shopify experience that aligns with your brand’s identity while integrating the tools you need to drive growth.
              </Text>
              <Text mt={8} mb={8} fontFamily="'Space Mono', sans-serif" fontSize="20px">KEY IMPLEMENTATION CAPABILITIES</Text>
              <UnorderedList spacing={4} fontFamily="'Space Grotesk', sans-serif" fontSize={{ base: "18px", lg: "20px" }}>
                <ListItem>Shopify Plus setup & configuration</ListItem>
                <ListItem>Data migration & integration</ListItem>
                <ListItem>Custom theme development</ListItem>
                <ListItem>App integrations</ListItem>
                <ListItem>Mobile optimization</ListItem>
                <ListItem>User experience & design</ListItem>
              </UnorderedList>

            </Stack>
          </SimpleGrid>
        </Box>
        <Text
          mt={{base: 0, lg: 24}}
          mb={{base: 4, lg: 24}}
          color="#213047"
          fontFamily="'Libre Baskerville', sans-serif"
          fontSize={{ base: "34px", lg: "70px" }}
          fontWeight="400"
          lineHeight="130%"
          textAlign="center"
        >Ongoing support<br /> for sustainable growth.</Text>
        <Box
          width={{ base: "100%", lg: "80%" }}
          p={4}
        >
          <SimpleGrid
            alignSelf="center"
            columns={{ base: 1, lg: 2 }}
            mt="2rem" mb="4rem"
          >
            <Image
              borderRadius={4}
              src="https://cdn.shopify.com/b/shopify-brochure2-assets/ce0048c94b712ae773a1f6371ced6303.jpg"
            />
            <Stack>
              <Text mt={6} mb={{base: 0, lg: 6}} fontFamily="'Libre Baskerville', sans-serif" fontSize={{ base: "18px", lg: "24px" }}>
                Beyond implementation, our team provides a full suite of support services to ensure your Shopify store adapts and scales with evolving market demands. From performance monitoring and feature upgrades to troubleshooting and technical guidance, we’re here to support your business every step of the way.
              </Text>
              <Text mt={8} mb={8} fontFamily="'Space Mono', sans-serif" fontSize="20px">KEY SUPPORT CAPABILITIES</Text>
              <UnorderedList spacing={4} fontFamily="'Space Grotesk', sans-serif" fontSize={{ base: "18px", lg: "20px" }}>
                <ListItem>Continuous optimization</ListItem>
                <ListItem>Technical troubleshooting</ListItem>
                <ListItem>Performance monitoring & analytics</ListItem>
                <ListItem>Custom feature development</ListItem>
              </UnorderedList>
            </Stack>
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  )
}