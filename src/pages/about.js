import { Image, Stack, Text, Flex, Box, Textarea, SimpleGrid, FormControl, FormLabel, Input, UnorderedList, ListItem } from "@chakra-ui/react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Kasama</title>
      </Head>
      <Stack
        overflowX="hidden"
        flex="1"
        position="relative"
        justifyContent="center"
        alignItems="center"
        background={{
          base: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 0%, #FEEFDB 5%, #FEEFDB 100%)",
          lg: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 5%, #FEEFDB 10%, #FEEFDB 100%)"
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
        >Crafting digital<br /> success, <i>together</i></Text>
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
          mt={{ base: "8rem", lg: "14rem" }}
          gap={{ base: "2rem", lg: "2rem" }}
          p={4}
        >
          <Flex
            position="relative"
            direction="column"
            width={{base: "100%", lg: "1006px"}}
            p={{base: 10, lg: 16}}
            pb={{base: 12, lg: "6rem"}}
            pt="0"
            alignItems="center"
            backgroundColor="#FAE1D9"
          >
            <Image 
              position="absolute"
              top={{base: "-15%", lg: "-20%"}}
              width={{base: "197px", lg: "343px"}}
              height="auto"
              src="images/AI_JEEP.png"
            />
            <Text
              fontSize="20px"
              mt={{base: "8rem", lg: "10rem"}}
              mb={{base: "2rem", lg: 8}}
            >OUR CORE VALUES</Text>
            <Text
              fontFamily="'Libre Baskerville', sans-serif"
              fontSize={{base: "18px", lg: "24px"}}
              textAlign="center"
              width={{base: "100%", lg: "727px"}}
            >
              Shopify is a leading global commerce company, providing trusted tools to start, grow, market, and manage a retail business of any size. Shopify makes commerce better for everyone with a platform and services that are engineered for reliability, while delivering a better shopping experience for consumers everywhere.
            </Text>
          </Flex>
        </Stack>
        <Image 
          display={{base: "none", lg: "block"}}
          position="absolute"
          width="378px"
          right="-170px"
          top="620px"
          height="auto"
          src="images/leaf.png"
          transform="rotate(-155.652deg);"
        />
        <Flex
            borderTop="1px solid black"
            mt={{ base: "0", lg: "4rem" }}
            mb={{ base: "4rem", lg: "4rem" }}
            position="relative"
            direction="column"
            width={{ base: "100%", lg: "80%" }}
            gap={12}
            p={{ base: 4, lg: 0 }}
          >
            <Text mt={4} fontFamily='"Space Grotesk", sans-serif' fontSize="30px">Agency Snapshot</Text>
            <SimpleGrid columns={{base: 2, lg: 4}} gap={{base: 8, lg: 24}}>
              <Stack>
                <Text fontFamily='"Space Mono", monospace' fontSize={{base: "18px", lg: "20px"}}>CLIENTS</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "54px", lg: "74px"}} fontWeight="500">100+</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "16px", lg: "20px"}}>
                  We are proud to have launched over 100 sites & multi-product solutions
                </Text>
              </Stack>
              <Stack>
                <Text fontFamily='"Space Mono", monospace' fontSize={{base: "18px", lg: "20px"}}>TEAMS</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "54px", lg: "74px"}} fontWeight="500">80+</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "16px", lg: "20px"}}>
                  Exceptional talented professionals delivering incredible work and curating long-lasting relationships
                </Text>
              </Stack>
              <Stack>
                <Text fontFamily='"Space Mono", monospace' fontSize={{base: "18px", lg: "20px"}}>EXPERIENCE</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "54px", lg: "74px"}} fontWeight="500">20+</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "16px", lg: "20px"}}>
                  Our team has, on average, worked in the digital commerce ecosystem for 20+ years
                </Text>
              </Stack>
              <Stack>
                <Text fontFamily='"Space Mono", monospace' fontSize={{base: "18px", lg: "20px"}}>GLOBAL</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "54px", lg: "74px"}} fontWeight="500">3</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "16px", lg: "20px"}}>
                  Although distributed across three regions - US, UK and India - we operate as a single team
                </Text>
              </Stack>
            </SimpleGrid>
          </Flex>
          <Flex
            borderTop="1px solid black"
            mt={{ base: "0", lg: "4rem" }}
            mb={{ base: "4rem", lg: "4rem" }}
            position="relative"
            direction="column"
            width={{ base: "100%", lg: "80%" }}
            gap={12}
            p={{ base: 4, lg: 0 }}
          >
            <Text mt={4} fontFamily='"Space Grotesk", sans-serif' fontSize="30px">What We Do</Text>
            <SimpleGrid columns={{base: 1, lg: 2}} gap={8}>
              <Stack spacing={{base: 4, lg: 8}}>
                <Text fontFamily='"Libre Baskerville", sans-serif' fontSize={{base: "34px", lg: "70px"}}>Strategy</Text>
                <Text fontFamily='"Libre Baskerville", sans-serif' fontSize={{base: "18px", lg: "24px"}}>
                  Immersing ourselves in your business, competition, and cultural context to establish a clear, differentiated North Star that sets a vision for our work together.
                </Text>
                <Stack px={12} py={8} backgroundColor="#FAE1D9" borderRadius={4}> 
                  <UnorderedList fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "18px", lg: "20px"}} spacing={{base: 2, lg: 4}}>
                    <ListItem>Shopify Plus setup & configuration</ListItem>
                    <ListItem>Data migration & integration</ListItem>
                    <ListItem>Custom theme development</ListItem>
                    <ListItem>App integrations</ListItem>
                    <ListItem>Mobile optimization</ListItem>
                    <ListItem>User experience & design</ListItem>
                  </UnorderedList>
                </Stack>
              </Stack>
              <Stack spacing={{base: 4, lg: 8}}>
                <Text fontFamily='"Libre Baskerville", sans-serif' fontSize={{base: "34px", lg: "70px"}}>Technology</Text>
                <Text fontFamily='"Libre Baskerville", sans-serif' fontSize={{base: "18px", lg: "24px"}}>
                  Immersing ourselves in your business, competition, and cultural context to establish a clear, differentiated North Star that sets a vision for our work together.
                </Text>
                <Stack px={12} py={8} backgroundColor="#FAE1D9" borderRadius={4}> 
                  <UnorderedList fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "18px", lg: "20px"}} spacing={{base: 2, lg: 4}}>
                    <ListItem>Shopify Plus setup & configuration</ListItem>
                    <ListItem>Data migration & integration</ListItem>
                    <ListItem>Custom theme development</ListItem>
                    <ListItem>App integrations</ListItem>
                    <ListItem>Mobile optimization</ListItem>
                    <ListItem>User experience & design</ListItem>
                  </UnorderedList>
                </Stack>
              </Stack>
              <Stack spacing={{base: 4, lg: 8}}>
                <Text fontFamily='"Libre Baskerville", sans-serif' fontSize={{base: "34px", lg: "70px"}}>Operations</Text>
                <Text fontFamily='"Libre Baskerville", sans-serif' fontSize={{base: "18px", lg: "24px"}}>
                  Immersing ourselves in your business, competition, and cultural context to establish a clear, differentiated North Star that sets a vision for our work together.
                </Text>
                <Stack px={12} py={8} backgroundColor="#FAE1D9" borderRadius={4}> 
                  <UnorderedList fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "18px", lg: "20px"}} spacing={{base: 2, lg: 4}}>
                    <ListItem>Shopify Plus setup & configuration</ListItem>
                    <ListItem>Data migration & integration</ListItem>
                    <ListItem>Custom theme development</ListItem>
                    <ListItem>App integrations</ListItem>
                    <ListItem>Mobile optimization</ListItem>
                    <ListItem>User experience & design</ListItem>
                  </UnorderedList>
                </Stack>
              </Stack>
              <Stack spacing={{base: 4, lg: 8}}>
                <Text fontFamily='"Libre Baskerville", sans-serif' fontSize={{base: "34px", lg: "70px"}}>Support</Text>
                <Text fontFamily='"Libre Baskerville", sans-serif' fontSize={{base: "18px", lg: "24px"}}>
                  Immersing ourselves in your business, competition, and cultural context to establish a clear, differentiated North Star that sets a vision for our work together.
                </Text>
                <Stack px={12} py={8} backgroundColor="#FAE1D9" borderRadius={4}> 
                  <UnorderedList fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "18px", lg: "20px"}} spacing={{base: 2, lg: 4}}>
                    <ListItem>Shopify Plus setup & configuration</ListItem>
                    <ListItem>Data migration & integration</ListItem>
                    <ListItem>Custom theme development</ListItem>
                    <ListItem>App integrations</ListItem>
                    <ListItem>Mobile optimization</ListItem>
                    <ListItem>User experience & design</ListItem>
                  </UnorderedList>
                </Stack>
              </Stack>
              
            </SimpleGrid>
          </Flex>
          <Flex
            borderTop="1px solid black"
            mt={{ base: "0", lg: "4rem" }}
            mb={{ base: "4rem", lg: "4rem" }}
            position="relative"
            direction="column"
            width={{ base: "100%", lg: "80%" }}
            gap={12}
            p={{ base: 4, lg: 0 }}
          >
            <Text mt={4} fontFamily='"Space Grotesk", sans-serif' fontSize="30px">Team & Leadership</Text>
            <Text alignSelf="center" lineHeight="160%" w={{base: "100%", lg: "721px"}} textAlign="center" fontFamily='"Libre Baskerville", sans-serif' fontSize={{base: "18px", lg: "24px"}}>
              We’re 30+ individuals from across the world driven by bold ideas and diverse perspectives. Craft, service, and efficiency drive us forward and we see our agency as a place for our shared values to collide.
            </Text>
            <SimpleGrid columns={{base: 1, lg: 4}} gap={{base: 8, lg: 8}}>
              <Stack>
                <Image
                  src="/images/leaders/mark_rubin.jpg"
                  objectFit="cover"
                  borderRadius={8}
                  width="365px"
                  height="100%"
                  backgroundColor="black"
                />
                <Text mt={4} fontFamily='"Libre Baskerville", sans-serif' fontSize="24px">Mark Rubin</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize="20px">Partner & CEO</Text>
              </Stack>
              <Stack>
                <Image
                  src="/images/leaders/tuba_engindeniz.png"
                  objectFit="cover"
                  borderRadius={8}
                  width="365px"
                  height="100%"
                  backgroundColor="black"
                />
                <Text mt={4} fontFamily='"Libre Baskerville", sans-serif' fontSize="24px">Tuba Engindeniz</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize="20px">Partner</Text>
              </Stack>
              <Stack>
                <Image
                  src="/images/leaders/hj_mann.jpeg"
                  objectFit="cover"
                  borderRadius={8}
                  width="365px"
                  height="100%"
                  backgroundColor="black"
                />
                <Text mt={4} fontFamily='"Libre Baskerville", sans-serif' fontSize="24px">H.J. Mann</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize="20px">Partner</Text>
              </Stack>
               <Stack>
                <Image
                  src="/images/leaders/mark_rubin.jpg"
                  objectFit="cover"
                  borderRadius={8}
                  width="365px"
                  height="100%"
                  backgroundColor="black"
                />
                <Text mt={4} fontFamily='"Libre Baskerville", sans-serif' fontSize="24px">Mark Rubin</Text>
                <Text fontFamily='"Space Grotesk", sans-serif' fontSize="20px">Partner & CEO</Text>
              </Stack>
            </SimpleGrid>
          </Flex>
      </Stack>
    </>
  )
}