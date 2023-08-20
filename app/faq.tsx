import {
  BodyText,
  BodyTextLarge,
  Colors,
  Heading,
  Stack,
  Subheading2,
} from "@hacksc/sctw-ui-kit";
import { FAQAccordion } from "../components/accordion";
import styled from "styled-components";

const contents: { title: string; content: string }[] = [
  {
    title: "I’m a beginner– should I apply?",
    content:
      "100%. HackSC is open to everyone of all experience levels and backgrounds",
  },
  {
    title: "What if I don’t know how to code?",
    content:
      "Don’t worry! Many of the most vital teams in the HackSC organization don’t require coding experience, including Hacker Experience, Operations, and Partnerships.",
  },
  {
    title: "404: Question not found",
    content:
      "Please email team@hacksc.com if you have any questions! We’d love to hear from you.",
  },
  {
    title: "What is a hackathon?",
    content:
      "A hackathon is a 36 hour competition in which teams of students collaborate to ideate and innovate solutions to real world problems! No knowledge of coding or hacking necessary.",
  },
];

export const FAQ = () => {
  return (
    <Stack
      direction="vertical"
      alignItems="start"
      gap="2rem"
      style={{ backgroundColor: Colors.Blue.DarkBloo, padding: "7rem 0" }}
    >
      <Heading>FREQUENTLY ASKED QUESTIONS</Heading>
      <QnAContainer>
        {contents.map((el, i) => (
          <FAQAccordion
            key={i}
            title={<Subheading2>{el.title}</Subheading2>}
            content={<BodyText>{el.content}</BodyText>}
          />
        ))}
      </QnAContainer>
    </Stack>
  );
};

const QnAContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
justify-content: center;
align-items: center;
`;
