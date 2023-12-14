import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    borderRadius: "0",
    color: "main", // change the input text color
    fontWeight: "bold",
    border: "none",
    ":focus-visible": {
      boxShadow: "none !important",
      borderColor: "main !important",
    },
  },
});

export const Input = defineMultiStyleConfig({ baseStyle });
