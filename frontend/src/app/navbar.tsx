"use client";

import { SIZES } from "@/constants/SIZES";
import { Link } from "@chakra-ui/next-js";
import { Flex, HStack, IconButton } from "@chakra-ui/react";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebook,
    url: "https://www.facebook.com/profile.php?id=61553953962807",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/britishislesrabbitfancy",
  },
  {
    icon: FaYoutube,
    url: "https://www.youtube.com/@BritishIslesRabbitFancy",
  },
];

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
      <HStack spacing="2">
        <Link href="/privacy-policy" color="main" fontWeight="bold">
          Privacy Policy
        </Link>
        {socialLinks.map(({ icon: Icon, url }) => (
          <IconButton
            as={Link}
            href={url}
            aria-label={url}
            icon={<Icon />}
            variant="ghost"
            color="main"
            key={url}
          />
        ))}
      </HStack>
    </Flex>
  );
};
