import { Input } from "./Input";
import { Button } from "./Button";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    main: "#C8963E",
    bg: "#00582Dde",
  },
  components: {
    Button,
    Input,
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },
});
