import { SIZES } from "@/constants/SIZES";
import { contentRender } from "@/lib/contentRender";
import { imgUrl } from "@/lib/helpers";
import { Center, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { Test } from "./Test";

const getData = async (slug: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${slug}?populate=*`
  );
  const data = await result.json();
  return data;
};

const PageSlug = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);

  const { title, image, content } = data.data.attributes;

  return (
    <Flex flexDir="column">
      <Center w="100vw" h={96} position="relative">
        <Image
          src={imgUrl(image.data.attributes.url)}
          alt={image.data.attributes.alternativeText}
          layout="fill"
          objectFit="cover"
        />
        <Flex
          bg="blackAlpha.500"
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          zIndex={1}
        />
        <Heading as="h1" size="3xl" color="white" zIndex={100}>
          {title}
        </Heading>
      </Center>
      <Test stuff={content} />
      <Flex flexDir="column" mx="auto" my="4" maxW="3xl" px="4" gap="2">
        {contentRender(content)}
      </Flex>
    </Flex>
  );
};

export default PageSlug;
