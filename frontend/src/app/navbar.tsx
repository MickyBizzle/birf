"use client";

import { SIZES } from "@/constants/SIZES";
import { Link } from "@chakra-ui/next-js";
import { Flex, Tag, useBreakpoint } from "@chakra-ui/react";
import Image from "next/image";

export const Navbar = () => {
  const bp = useBreakpoint();

  return (
    <Flex
      h={SIZES.NAVBAR_HEIGHT}
      w="100vw"
      position="fixed"
      zIndex={1000}
      bg="white"
      px="4"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex position="relative" h={SIZES.NAVBAR_HEIGHT} w={SIZES.NAVBAR_HEIGHT}>
        <Link href="/">
          <Image src="/images/logos/light.svg" alt="BIRF logo" layout="fill" />
        </Link>
      </Flex>

      {process.env.NODE_ENV === "development" && (
        <Tag position="fixed" bottom={4} right={4} zIndex={10000}>
          {bp}
        </Tag>
      )}
    </Flex>
  );
};
