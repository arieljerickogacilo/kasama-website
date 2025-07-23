import BuildPartnerItem from "@/components/BuildPartnerItem";
import PartnersItem from "@/components/PartnersItem";
import { Image, Stack, Text, Flex, Box, SimpleGrid, Divider } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

const PARTNER_COMPANIES = [
  {
    company_name: "Salesforce",
    company_description: "Salesforce is a collection of cloud-based solutions which enterprise customers use to craft best-in-class experiences across all brand touch points.",
    company_logo: "images/salesforce.png",
    company_link: "https://www.salesforce.com/ap/products/what-is-salesforce/"
  },
  {
    company_name: "Shopify",
    company_description: "Shopify is a leading global commerce company, providing trusted tools to start, grow, market, and manage a retail business of any size.",
    company_logo: "images/shopify.png",
    company_link: "https://www.salesforce.com/ap/products/what-is-salesforce/"
  },
  {
    company_name: "OroCommerce",
    company_description: "OroCommerce is a leading B2B platform designed specifically for manufacturers, distributors, and wholesalers.",
    company_logo: "images/orocommerce.png",
    company_link: "https://oroinc.com/b2b-ecommerce/"
  },
  {
    company_name: "Scayle",
    company_description: "SCAYLE is the enterprise commerce platform of choice for B2C brands and retailers that want to create meaningful experiences.",
    company_logo: "images/scayle.webp",
    company_link: "https://www.scayle.com/"
  },
]

const BUILD_PARTNERS = [
  {
    name: "Salsify",
    image: "images/build-partners/salsify.png"
  },
  {
    name: "Klaviyo",
    image: "images/build-partners/klaviyo.png"
  },
  {
    name: "Pipe 17",
    image: "images/build-partners/pipe 17.png"
  },
  {
    name: "Avalara",
    image: "images/build-partners/avalara.png"
  },
  {
    name: "Yotpo",
    image: "images/build-partners/yotpo.png"
  },
  {
    name: "MuleSoft",
    image: "images/build-partners/mulesoft.png"
  },
  {
    name: "OrderGroove",
    image: "images/build-partners/ordergroove.png"
  },
  {
    name: "Bloomreach",
    image: "images/build-partners/bloomreach.png"
  },
  {
    name: "Algolia",
    image: "images/build-partners/algolia.webp"
  },
  {
    name: "Rewind",
    image: "images/build-partners/rewind.png"
  },
  {
    name: "Reactiv",
    image: "images/build-partners/reactiv.png"
  },
]

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners | Kasama</title>
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
        >Partnering with industry<br /> leaders for proficiency</Text>
        <Text
          w={{ base: "100%", lg: "40%" }}
          p={{ base: "0 1rem", lg: 0 }}
          mt="4rem"
          color="#213047"
          fontFamily="'Libre Baskerville', sans-serif"
          fontSize={{ base: "18px", lg: "24px" }}
          fontWeight="400"
          lineHeight="130%"
          textAlign="center"
        >Our commitment to excellence leads us to collaborate with top industry professionals, ensuring your business achieves sustained growth and operational excellence.</Text>
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
          width={{ base: "100%", lg: "80%" }}
          p={{ base: 4, lg: "0 8rem" }}
          mt={{ base: "4rem", lg: "4rem" }}
          gap={{ base: "2rem", lg: "2rem" }}
        >
          <Divider borderColor="#213047" />
          <Text fontSize={{ base: "24px", lg: "36px" }}>Top Commerce Partners</Text>
          <SimpleGrid
            alignSelf="center"
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: "4rem", lg: "2rem" }}
            mt="2rem" mb="4rem"
          >
            {PARTNER_COMPANIES.map((item, key) => (
              <PartnersItem data={item} key={key} />
            ))}
          </SimpleGrid>
        </Stack>
        <Stack
          width={{ base: "100%", lg: "80%" }}
          p={{ base: 4, lg: "0 8rem" }}
          mt={{ base: 0, lg: "4rem" }}
          gap={{ base: "2rem", lg: "2rem" }}
        >
          <Divider borderColor="#213047" />
          <Text fontSize={{ base: "24px", lg: "36px" }}>Build Partners</Text>
          <SimpleGrid columns={{ base: 2, lg: 4 }} gap={4} mt="2rem" mb={{ base: 0, lg: "4rem" }} >
            {BUILD_PARTNERS.map((item, key) => (
              <BuildPartnerItem data={item} key={key} />
            ))}
          </SimpleGrid>
        </Stack>
        <Flex
          mt={{ base: "0", lg: "4rem" }}
          mb={{ base: "4rem", lg: "8rem" }}
          position="relative"
          direction="column"
          width={{ base: "100%", lg: "1006px" }}
          alignItems="center"
          gap={12}
          p={{ base: 4, lg: 0 }}
        >
          <Text
            color="#213047"
            fontFamily="'Libre Baskerville', sans-serif"
            fontSize={{ base: "34px", lg: "70px" }}
            fontWeight="400"
            lineHeight="130%"
            textAlign="center"
          >Interested in<br />becoming a partner?</Text>
          <Box
            as={Link}
            fontFamily="'Space Grotesk', sans-serif"
            href="/contact"
            borderRadius="4px"
            border="1px black solid"
            padding="0.75rem 2.5rem"
            textAlign="center"
            width={{ base: "100%", lg: "20%" }}
            _hover={{
              backgroundColor: "rgba(31, 31, 31, 1)",
              color: "#fff"
            }}
          >Contact Us</Box>
        </Flex>
      </Stack>
    </>
  )
}