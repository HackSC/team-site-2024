"use client";
import { ASSET_URLS, Colors, Stack } from "@hacksc/sctw-ui-kit";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { useId } from "react";
import styled from "styled-components";

export const FAQAccordion = (props: {
  title: React.ReactNode;
  content: React.ReactNode;
  arrowColor: "red" | "blue";
}) => {
  const id = useId();
  const arrow =
    props.arrowColor == "red" ? ASSET_URLS.ARROW_RED : ASSET_URLS.ARROW_BLUE;
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value={id}>
        <Accordion.Header>
          <Trigger className="AccordionTrigger">
            <Stack>
              <Arrow className="accordionArrow">
                <Image src={arrow} alt={"Blue arrow"} width={30} height={30} />
              </Arrow>
              {props.title}
            </Stack>
          </Trigger>
        </Accordion.Header>
        <Accordion.Content>{props.content}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
const Arrow = styled.div`
  transform: rotate(270deg);
  transition: transform 300ms;
`;
const Trigger = styled(Accordion.Trigger)`
  background-color: transparent;
  border: unset;
  height: fit-content;
  cursor: pointer;
  transition: transform 300ms;
  :hover {
    background-color: ${Colors.Neutral.Gray.LIGHT};
  }
  &[data-state="open"] ${Arrow} {
    transform: rotate(360deg);
  }
`;
