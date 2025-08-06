import { Image, Stack, Text, Flex, Box, SimpleGrid, Divider, UnorderedList, ListItem } from "@chakra-ui/react";
import Head from "next/head";

export default function Roots() {
  return (
    <>
      <Head>
        <title>Roots | Work | Kasama</title>
      </Head>
      <Stack
        overflowX="hidden"
        flex="1"
        position="relative"
        justifyContent="center"
        alignItems="center"
        background={{
          base: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 4%, #FEEFDB 6%, #FEEFDB 100%)",
          lg: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 3%, #FEEFDB 5%, #FEEFDB 100%)"
        }}
        spacing={0}
      >
        <Stack mt={{base: 16, lg: 24}} spacing={8}>
          <Text
            color="#213047"
            fontFamily="'Libre Baskerville', sans-serif"
            fontSize={{ base: "34px", lg: "70px" }}
            fontWeight="400"
            lineHeight="130%"
            textAlign="center"
          >Roots</Text>
          <Text
            color="#213047"
            fontFamily="'Libre Baskerville', sans-serif"
            fontSize={{ base: "18px", lg: "24px" }}
            fontWeight="400"
            lineHeight="130%"
            textAlign="center"
            w={{base: "291px", lg: "100%"}}
          >Elevates digital experiences with lighting web runtime migration</Text>
        </Stack>
        <Box p={4} w={{base: "100%", lg: "80%"}} mt={{base: 8, lg: 24}}>
          <Image borderRadius={4} src="https://wwd.com/wp-content/uploads/2023/08/ILI4375_CR.jpg" />
        </Box>

        <Stack p={4} mt={{base: 4, lg: 24}} w={{base: "100%", lg: "50%"}} spacing={{base: 0, lg: 8}} alignItems="center">
          <Stack w={{base: "100%", lg: "713px"}} spacing={8}>
            <Text
              alignSelf="flex-start"
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{base: "24px", lg: "30px"}}
            >The challenge</Text>
            <Text
              lineHeight="130%"
              fontFamily="'Libre Baskerville', sans-serif"
              fontSize={{ base: "34px", lg: "70px" }}
            >Lack of inventory visibility</Text>
            <Box
              w={{base: "100%", lg: "713px"}}
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{base: "18px", lg: "20px"}}
            >
              <Text>
                As part of its strategy to drive business growth and improve customer service, Pet Supermarket identified the need to implement several new capabilities buy online, pick up in store (BOPIS) same day delivery from store and buy online, ship from store (BOSFS). These initiatives were aimed at enhancing customer convenience and capitalizing on cost savings by utilizing store inventory for online orders and reducing shipping costs.
              </Text>
              <br />
              <Text>
                However, the implementation of these capabilities presented significant challenges. The primary issue was the lack of real⺩time inventory visibility, which made it impossible to identify and hold store inventory for shipping. 
              </Text>
              <br />
              <Text>
                Additionally, there was a need to establish intricate order routing rules to determine when to ship from a store and when to split an order. Pet Supermarket realized that even partial fulfillment of orders from a store could lead to faster delivery times and lower shipping costs. Moreover, integrating a single inventory system to expose store inventory to the eCommerce audience would unlock the potential of store inventory that was otherwise only available to customers of specific locations.
              </Text>
            </Box>
          </Stack>

          <Image mt={{base: 8, lg: 24}} mb={{base: 8, lg: 24}} borderRadius={4} src="https://wwd.com/wp-content/uploads/2023/08/ILI4375_CR.jpg" />
          <Stack w={{base: "100%", lg: "713px"}} spacing={8}>
            <Text
              alignSelf="flex-start"
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{base: "24px", lg: "30px"}}
            >Salesforce and Kasama</Text>
            <Text
            
              fontFamily="'Libre Baskerville', sans-serif"
              fontSize={{ base: "34px", lg: "70px" }}
              lineHeight="130%"
            >Winning combination</Text>
            <Box
              w={{base: "100%", lg: "713px"}}
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{base: "18px", lg: "20px"}}
            >
              <Text>
                As part of its strategy to drive business growth and improve customer service, Pet Supermarket identified the need to implement several new capabilities buy online, pick up in store (BOPIS) same day delivery from store and buy online, ship from store (BOSFS). These initiatives were aimed at enhancing customer convenience and capitalizing on cost savings by utilizing store inventory for online orders and reducing shipping costs.
              </Text>
              <br />
              <Text>
                However, the implementation of these capabilities presented significant challenges. The primary issue was the lack of real⺩time inventory visibility, which made it impossible to identify and hold store inventory for shipping. 
              </Text>
              <br />
              <Text>
                Additionally, there was a need to establish intricate order routing rules to determine when to ship from a store and when to split an order. Pet Supermarket realized that even partial fulfillment of orders from a store could lead to faster delivery times and lower shipping costs. Moreover, integrating a single inventory system to expose store inventory to the eCommerce audience would unlock the potential of store inventory that was otherwise only available to customers of specific locations.
              </Text>
            </Box>
          </Stack>

          <Image mt={{base: 8, lg: 24}} mb={{base: 8, lg: 24}} borderRadius={4} src="https://wwd.com/wp-content/uploads/2023/08/ILI4375_CR.jpg" />
          <Stack w={{base: "100%", lg: "713px"}} spacing={8}>
            <Text
              alignSelf="flex-start"
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{base: "24px", lg: "30px"}}
            >Results</Text>
            <Text
            
              fontFamily="'Libre Baskerville', sans-serif"
              fontSize={{ base: "34px", lg: "70px" }}
              lineHeight="130%"
            >Revenue growth and cost savings</Text>
            <Box
              w={{base: "100%", lg: "713px"}}
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{base: "18px", lg: "20px"}}
            >
              <Text>
                As part of its strategy to drive business growth and improve customer service, Pet Supermarket identified the need to implement several new capabilities buy online, pick up in store (BOPIS) same day delivery from store and buy online, ship from store (BOSFS). These initiatives were aimed at enhancing customer convenience and capitalizing on cost savings by utilizing store inventory for online orders and reducing shipping costs.
              </Text>
              <br />
              <Text>
                However, the implementation of these capabilities presented significant challenges. The primary issue was the lack of real⺩time inventory visibility, which made it impossible to identify and hold store inventory for shipping. 
              </Text>
              <br />
              <Text>
                Additionally, there was a need to establish intricate order routing rules to determine when to ship from a store and when to split an order. Pet Supermarket realized that even partial fulfillment of orders from a store could lead to faster delivery times and lower shipping costs. Moreover, integrating a single inventory system to expose store inventory to the eCommerce audience would unlock the potential of store inventory that was otherwise only available to customers of specific locations.
              </Text>
            </Box>
          </Stack>
        </Stack>
        <Box w={{base: "100%", lg: "80%"}} mt={{base: 8, lg: 24}} mb={{base: 8, lg: 24}} position="relative">
          <Image display={{base: "none", lg: "block"}} filter="grayscale(90%) blur(1px)" borderRadius={4} src="https://wwd.com/wp-content/uploads/2023/08/ILI4375_CR.jpg" />
          <Stack
            p={4}
            spacing={8}
            color={{base: "black", lg: "white"}}
            position={{base: "relative", lg: "absolute"}}
            top={{base: 0, lg: "50%"}}
            left={{base: 0, lg: "50%"}}
            transform={{base: "", lg: "translate(-50%, -50%)"}}
            w={{base: "100%", lg: "855px"}}
            textAlign={{base: "left", lg: "center"}}
          >
            <Text
              fontFamily="'Libre Baskerville', sans-serif"
              fontSize={{ base: "34px", lg: "48px" }}
            
            >“Kasama’s ability to manage the project within our tight schedule was critical to its success.”</Text>
            <Text
              w={{base: "312px", lg: "100%" }}
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{ base: "18px", lg: "20px" }}
            >-  Johnny McMan, Digital Manager at Roots</Text>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}