import { IComingSoon } from "@/Models/ComingSoon";
import { SIZES } from "@/constants/SIZES";
import { imgUrl } from "@/lib/helpers/imgUrl";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import { Form } from "./form";

const getData = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/coming-soon?populate=image`
  );
  const data = await result.json();
  return data as IComingSoon;
};

export default async function ComingSoon() {
  const data = await getData();
  const { title, description, image } = data.data.attributes;
  return (
    <Flex flexDir="column">
      <Flex
        w="100vw"
        h={{
          // base: `calc(100vh - ${SIZES.NAVBAR_HEIGHT.base} - 40px)`,
          base: "sm",
          sm: "xl",
          md: "2xl",
          lg: `calc(100vh - ${SIZES.NAVBAR_HEIGHT.md} - 40px)`,
        }}
        position="relative"
      >
        <Image
          src={imgUrl(image.data.attributes.url)}
          alt={image.data.attributes.alternativeText}
          layout="fill"
          objectFit="cover"
        />
        <Flex
          display={{ base: "none", lg: "flex" }}
          zIndex={1}
          flexDir="column"
          bg="bg"
          maxW={{ base: "", md: "xl" }}
          ml={{ lg: 20 }}
          my={{ lg: "auto" }}
          h="max-content"
          p="8"
          gap="4"
        >
          <Heading as="h1" size="3xl" color="main">
            {title}
          </Heading>
          <Heading as="h3" size="sm" color="main" fontWeight="semibold">
            {description}
          </Heading>
          <Form />
        </Flex>
      </Flex>
      <Flex
        display={{ base: "flex", lg: "none" }}
        zIndex={1}
        flexDir="column"
        bg="bg"
        p="8"
        px={{ base: 4 }}
        gap="4"
      >
        <Heading as="h1" size="3xl" color="main">
          {title}
        </Heading>
        <Heading as="h3" size="sm" color="main" fontWeight="semibold">
          {description}
        </Heading>
        <Form />
      </Flex>
    </Flex>
  );
}
