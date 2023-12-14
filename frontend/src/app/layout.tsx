import type { Metadata } from "next";
import { Providers } from "./Providers";
import { fonts } from "./fonts";
import { Navbar } from "./navbar";
import { Flex } from "@chakra-ui/react";
import { SIZES } from "@/constants/SIZES";

export const metadata: Metadata = {
  title: "BIRF - British Isles Rabbit Fancy",
  description:
    "The British Isles Rabbit Fancy is a rabbit club for rabbit breeders and exhibitors in the UK and Ireland.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.lato.variable}>
      <body>
        <Providers>
          <Navbar />
          <Flex pt={SIZES.NAVBAR_HEIGHT}>{children}</Flex>
        </Providers>
      </body>
    </html>
  );
}
