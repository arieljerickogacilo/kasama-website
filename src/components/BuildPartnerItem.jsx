import { Stack, Image, Text} from "@chakra-ui/react";

export default function BuildPartnerItem({data}){
  return(
     <Stack spacing="1rem" mb="4rem">
      <Image 
        width="auto"
        height={{base: "150px", lg: "300px"}}
        objectFit="contain"
        p={8} 
        backgroundColor="#FAE1D9" 
        borderRadius="4px"
        src={data.image === "" ? "images/build-partners/" + data.name + ".png" : data.image} 
      />
      <Text fontSize="24px">{data.name}</Text>
    </Stack>
  )
}