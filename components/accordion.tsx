import { ASSET_URLS, Colors, Stack } from "@hacksc/sctw-ui-kit";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { useId } from "react";
import styled from "styled-components";

export const FAQAccordion = (props: {
  title: React.ReactNode;
  content: React.ReactNode;
}) => {
  const id = useId();
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value={id}>
        <Accordion.Header>
          <Trigger>
            <Stack>
              <Image
                src={ASSET_URLS.ARROW_BLUE}
                alt={"Blue arrow"}
                width={30}
                height={30}
              />
              {props.title}
            </Stack>
          </Trigger>
        </Accordion.Header>
        <Accordion.Content>{props.content}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const Trigger = styled(Accordion.Trigger)`
  background-color: transparent;
  border: unset;
  height: fit-content;
  cursor: pointer;
  :hover {
    background-color: ${Colors.Neutral.Gray.LIGHT};
  }
`;
