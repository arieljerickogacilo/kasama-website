import { SimpleGrid, Image, Stack, Text, Flex, Button, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
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

export default function Work() {
  return (
    <>
      <Head>
        <title>Work | Kasama</title>
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
        >Our Work</Text>
        <Text
          mt={8}
          mb={12}
          textAlign="center"
          lineHeight="160%"
          fontSize={{base: "18px", lg: "24px"}}
          fontFamily="'Libre Baskerville', sans-serif"
          width={{base: "291px", lg: "692px"}}
          alignSelf="center"
        >
          Our commitment to excellence leads us to collaborate with top industry professionals, ensuring your business achieves sustained growth and operational excellence.
        </Text>
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
          <Text mt={4} fontFamily='"Space Grotesk", sans-serif' fontSize={{base: "24px", lg: "30px"}}>Select Projects</Text>
          <SimpleGrid templateColumns={{ base: '1fr', lg: '60% 40%' }} gap={{ base: 8, lg: 8 }}>
            <Stack>
              <Image borderRadius={4} src="https://wwd.com/wp-content/uploads/2023/08/ILI4375_CR.jpg" />
              <Text mt={4} fontFamily="'Libre Baskerville', sans-serif" fontSize="30px">Roots</Text>
              <Text fontFamily="'Space Grotesk', sans-serif" fontSize="20px">
                Roots Canada is a premium outdoor lifestyle brand known for its high-quality apparel, leather goods, and accessories inspired by Canadian heritage and nature. Founded in 1973, Roots combines craftsmanship with comfort, offering products that reflect a relaxed, active, and authentic lifestyle.
              </Text>
            </Stack>
            <Stack>
              <Image borderRadius={4} src="https://onetrackmind.bike/wp-content/uploads/2022/03/Bobcat_Image_Bike_GG.jpg" />
              <Text mt={4} fontFamily="'Libre Baskerville', sans-serif" fontSize="30px">Smith Optics</Text>
              <Text fontFamily="'Space Grotesk', sans-serif" fontSize="20px">
                Smith Optics is a renowned American brand specializing in high-performance eyewear, goggles, and helmets designed for outdoor and action sports. Founded in 1965 by Dr. Bob Smith, the company pioneered numerous innovations—including TurboFan ventilation, interchangeable lens systems, and ChromaPop™ optics—while continuing to produce products at its U.S.-based Smith MFG facility in Utah
              </Text>
            </Stack>
          </SimpleGrid>
          <SimpleGrid templateColumns={{ base: '1fr', lg: '40% 60%' }} gap={{ base: 8, lg: 8 }}>
            <Stack>
              <Image borderRadius={4} src="https://wwd.com/wp-content/uploads/2023/08/ILI4375_CR.jpg" />
              <Text mt={4} fontFamily="'Libre Baskerville', sans-serif" fontSize="30px">Roots</Text>
              <Text fontFamily="'Space Grotesk', sans-serif" fontSize="20px">
                Roots Canada is a premium outdoor lifestyle brand known for its high-quality apparel, leather goods, and accessories inspired by Canadian heritage and nature. Founded in 1973, Roots combines craftsmanship with comfort, offering products that reflect a relaxed, active, and authentic lifestyle.
              </Text>
            </Stack>
            <Stack>
              <Image borderRadius={4} src="https://onetrackmind.bike/wp-content/uploads/2022/03/Bobcat_Image_Bike_GG.jpg" />
              <Text mt={4} fontFamily="'Libre Baskerville', sans-serif" fontSize="30px">Smith Optics</Text>
              <Text fontFamily="'Space Grotesk', sans-serif" fontSize="20px">
                Smith Optics is a renowned American brand specializing in high-performance eyewear, goggles, and helmets designed for outdoor and action sports. Founded in 1965 by Dr. Bob Smith, the company pioneered numerous innovations—including TurboFan ventilation, interchangeable lens systems, and ChromaPop™ optics—while continuing to produce products at its U.S.-based Smith MFG facility in Utah
              </Text>
            </Stack>
          </SimpleGrid>
          <SimpleGrid templateColumns={{ base: '1fr', lg: '60% 40%' }} gap={{ base: 8, lg: 8 }}>
            <Stack>
              <Image borderRadius={4} src="https://wwd.com/wp-content/uploads/2023/08/ILI4375_CR.jpg" />
              <Text mt={4} fontFamily="'Libre Baskerville', sans-serif" fontSize="30px">Roots</Text>
              <Text fontFamily="'Space Grotesk', sans-serif" fontSize="20px">
                Roots Canada is a premium outdoor lifestyle brand known for its high-quality apparel, leather goods, and accessories inspired by Canadian heritage and nature. Founded in 1973, Roots combines craftsmanship with comfort, offering products that reflect a relaxed, active, and authentic lifestyle.
              </Text>
            </Stack>
            <Stack>
              <Image borderRadius={4} src="https://onetrackmind.bike/wp-content/uploads/2022/03/Bobcat_Image_Bike_GG.jpg" />
              <Text mt={4} fontFamily="'Libre Baskerville', sans-serif" fontSize="30px">Smith Optics</Text>
              <Text fontFamily="'Space Grotesk', sans-serif" fontSize="20px">
                Smith Optics is a renowned American brand specializing in high-performance eyewear, goggles, and helmets designed for outdoor and action sports. Founded in 1965 by Dr. Bob Smith, the company pioneered numerous innovations—including TurboFan ventilation, interchangeable lens systems, and ChromaPop™ optics—while continuing to produce products at its U.S.-based Smith MFG facility in Utah
              </Text>
            </Stack>
          </SimpleGrid>
        </Flex>
      </Stack>
    </>
  )
}

