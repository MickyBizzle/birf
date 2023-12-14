"use client";

import { SIZES } from "@/constants/SIZES";
import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export const Navbar = () => {
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
      <Link href="/privacy-policy" color="main" fontWeight="bold">
        Privacy Policy
      </Link>
    </Flex>
  );
};
