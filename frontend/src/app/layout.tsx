import type { Metadata } from "next";
import { Providers } from "./Providers";
import { fonts } from "./fonts";
import { Navbar } from "./navbar";
import { Flex } from "@chakra-ui/react";
import { SIZES } from "@/constants/SIZES";
import { Footer } from "./footer";

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
      <head>
        {process.env.NODE_ENV === "production" ? (
          <script
            async
            src="https://analytics.birf.co.uk/script.js"
            data-website-id="a76063c8-c44b-4493-ad4b-7f8ad2c906e7"
          ></script>
        ) : null}
      </head>
      <body>
        <Providers>
          <Navbar />
          <Flex pt={SIZES.NAVBAR_HEIGHT}>{children}</Flex>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
