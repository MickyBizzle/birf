import { Box, Heading, Text } from "@chakra-ui/react";

export interface Content {
  type: string;
  level?: number | null;
  children?: ChildrenEntity[] | null;
  format?: string | null;
}
export interface ChildrenEntity {
  text?: string | null;
  type: string;
  children?: ChildrenEntity1[] | null;
}
export interface ChildrenEntity1 {
  text: string;
  type: string;
}

export const contentRender = (content: Content[]) => {
  const headingSizes: { [key: number]: string } = {
    1: "xl",
    2: "lg",
    3: "md",
    4: "sm",
  };
  // recursively render content
  return content.map((item, i) => {
    if (!item.children) return null;
    if (item.type === "heading") {
      return (
        <Heading
          key={i}
          as={`h${item.level || 1}` as any}
          size={headingSizes[item?.level || 2]}
        >
          {item.children[0].text}
        </Heading>
      );
    }
    if (item.type === "paragraph") {
      return <Text key={i}>{item.children[0].text}</Text>;
    }
    if (item.type === "list") {
      return (
        <Box as="ul" key={i}>
          {item.children &&
            item.children.map((item, i) => {
              if (!item.children) return null;
              return (
                <Box as="li" key={i} ml="8">
                  {item.children[0].text}
                </Box>
              );
            })}
        </Box>
      );
    }
  });
};
