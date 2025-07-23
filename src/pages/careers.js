import RoleAccordionItem from "@/components/RoleAccordionItem";
import { Image, Stack, Text, Flex, Button, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

const OPEN_ROLES = [
  {
    title: "Business Analyst",
    description: "Kasama is growing rapidly and is seeking for a skilled Business Analyst with a strong background in Salesforce and Shopify to join our team. The ideal candidates should be adept in analyzing business needs, designing solutions, defining workflows, providing solutions and implementing enhancements to improve our Salesforce environment.",
    link: "https://apply.workable.com/kasama/j/78ABB89EF1/"
  },
  {
    title: "Shopify Developer",
    description: "Kasama is seeking a skilled and experienced Shopify Developer to join our innovative team. As a market leader in eCommerce development, we are committed to delivering exceptional solutions and services to our clients. If you have a passion for Shopify development and a desire to create impactful solutions, then this role is for you.",
    link: "https://apply.workable.com/kasama/j/D8438DD25D/"
  },
  {
    title: "Shopify Architect",
    description: "At Kasama, we are looking for a talented Shopify Architect to join our team. As a leading eCommerce development company, we strive to provide top-notch solutions to our clients. If you are passionate about Shopify development and want to make a difference by creating impactful solutions, this is the perfect opportunity for you.",
    link: "https://apply.workable.com/kasama/j/20804502BE/"
  },
]

export default function Careers(){
  return(
    <>
      <Head>
        <title>Careers | Kasama</title>
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
          fontSize={{base: "34px", lg: "70px"}}
          fontWeight="400"
          lineHeight="130%"
          textAlign="center"
        >Make cool stuff.<br /> And get paid.</Text>
        <Image 
          display={{base: "none", lg: "block"}}
          position="absolute"
          width="378px"
          left="-154px"
          top="70px"
          height="auto"
          src="images/leaf.png"
        />
        <Stack
          mt={{base: "8rem", lg: "12rem"}}
          p={{base: 4, lg: 0}}
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
            >CULTURE</Text>
            <Text
              fontFamily="'Libre Baskerville', sans-serif"
              fontSize={{base: "18px", lg: "24px"}}
              textAlign="center"
              width={{base: "100%", lg: "727px"}}
            >
              We’re always looking to connect with individuals who want to make the best work of their lives with the world’s greatest brands. If you’re interested in working with us or leaning more, drop us a note, portfolio link or resume.
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
          mt={{base: "4rem", lg: "8rem"}}
          position="relative"
          direction="column"
          width={{base: "100%", lg: "1006px"}}
          alignItems="center"
          p={{base: 4, lg: 0}}
        >
          <Text
            fontSize="20px"
          >OPEN ROLES</Text>
          <Accordion allowToggle w="100%" mt={8}>
            {OPEN_ROLES.map((item, key) => (
              <RoleAccordionItem data={item} key={key} />
            ))}
          </Accordion>
        </Flex>
        <Flex
          mt={{base: "4rem", lg: "8rem"}}
          mb={{base: "4rem", lg: "8rem"}}
          position="relative"
          direction="column"
          width={{base: "100%", lg: "1006px"}}
          alignItems="center"
          gap={12}
          p={{base: 4, lg: 0}}
        >
        <Text
            color="#213047"
            fontFamily="'Libre Baskerville', sans-serif"
            fontSize={{base: "34px", lg: "70px"}}
            fontWeight="400"
            lineHeight="130%"
            textAlign="center"
          >Interested in<br />joining our team?</Text>
            <Box
              as={Link}
              fontFamily="'Space Grotesk', sans-serif"
              href="/contact"
              borderRadius="4px"
              border="1px black solid"
              padding="0.75rem 2.5rem"
              textAlign="center"
              width={{base: "100%", lg: "20%"}}
              _hover={{
                backgroundColor:"rgba(31, 31, 31, 1)",
                color: "#fff"
              }}
            >Apply Today</Box>
        </Flex>
      </Stack>
    </>
  )
}

