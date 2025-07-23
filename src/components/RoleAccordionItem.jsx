import { AccordionButton, Text, Flex, Box, AccordionIcon, AccordionItem, AccordionPanel, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";

export default function RoleAccordionItem({ data }) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Flex flex="1" direction="row" alignItems="center" justifyContent="space-between" p={2} mr="auto">
            <Text fontSize={{ base: "18px", lg: "26px" }}>{data.title}</Text>
            <Box
              backgroundColor="#FAE1D9"
              borderRadius="full"
              fontSize={{base: "12px", lg: "15px"}}
              p={{base: "0.35rem 1rem", lg: "0.5rem 1.5rem"}}
            >REMOTE</Box>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel p={4}>
        <Stack spacing={4}>
          <Text noOfLines={4}>{data.description}</Text>
          <Button 
            as={Link} 
            target="_blank" 
            href={data.link} 
            size="lg" 
            w={{ base: "100%", lg: "25%" }}
            backgroundColor="#213047"
            color="#fff"
          >Apply For This Job</Button>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  )
}