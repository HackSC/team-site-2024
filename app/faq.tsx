import {
  ASSET_URLS,
  BodyText,
  Heading,
  Stack,
  Subheading2,
} from "@hacksc/sctw-ui-kit";
import { FAQAccordion } from "../components/accordion";
import styled from "styled-components";
import Image from "next/image";
import { CustomHeadingResponsive } from "../components/responsive-heading";

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
      style={{ backgroundColor: "white", padding: "7rem 3rem 0" }}
    >
      <CustomHeadingResponsive>
        FREQUENTLY ASKED QUESTIONS
      </CustomHeadingResponsive>
      <QnAContainer>
        {contents.map(function (el, i) {
          const arrowColor = i % 2 == 0 ? "blue" : "red";
          return (
            <FAQAccordion
              key={i}
              arrowColor={arrowColor}
              title={
                <Subheading2 style={{ textAlign: "start" }}>
                  {el.title}
                </Subheading2>
              }
              content={<BodyText>{el.content}</BodyText>}
            />
          );
        })}
      </QnAContainer>

      <MountainContainer>
        <Image
          src={ASSET_URLS.MOUNTAINS}
          fill
          objectFit="contain"
          alt="Graphic of mountains"
        />
      </MountainContainer>
    </Stack>
  );
};

const QnAContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MountainContainer = styled.div`
  position: relative;
  width: 1049px;
  height: 515px;
  @media (max-width: 1200px) {
    width: 850px;
    height: 400px;
  }
  @media (max-width: 900px) {
    width: 320px;
    height: 150px;
  }
  @media (max-width: 400px) {
    width: 250px;
    height: 100px;
  }
`;
