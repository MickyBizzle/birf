"use client";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Flex, IconButton } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { default as NextLink } from "next/link";

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

export const Footer = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex flex={1} />
      <Link
        href="/privacy-policy"
        color="main"
        fontWeight="bold"
        justifySelf="center"
      >
        Privacy Policy
      </Link>
      <Flex flex={1} justifyContent="flex-end">
        {socialLinks.map(({ icon: Icon, url }) => (
          <IconButton
            as={NextLink}
            target="_blank"
            href={url}
            aria-label={url}
            icon={<Icon />}
            variant="ghost"
            color="main"
            key={url}
          />
        ))}
      </Flex>
    </Flex>
  );
};
