import * as Accordion from "@radix-ui/react-accordion";
import { useId } from "react";

export const FAQAccordion = (props: {
  title: React.ReactNode;
  content: React.ReactNode;
}) => {
  const id = useId();
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value={id}>
        <Accordion.Header>
          <Accordion.Trigger>{props.title}</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{props.content}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
