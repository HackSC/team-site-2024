"use client";

import { BodyText, Colors, Heading, Stack } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { CustomHeadingResponsive } from "../components/responsive-heading";

export const Alumni = () => {
  const alumni: {
    photoUrl: string;
    quote: string;
    name: string;
    role: string;
    currentJob: string;
  }[] = [
    {
      photoUrl: "/alumni/katie.png",
      quote:
        "My favorite memory of HackSC was working with my amazing team to put together a covid safe hackathon against all odds! I am super proud of the team for their hard work and loved learning and becoming closer with HackSC my senior year.",
      name: "Katherine Wong",
      role: "President, HackSC '21",
      currentJob: "SWE @ Pavillion",
    },
    {
      photoUrl: "/alumni/kelly.png",
      name: "Kelly Dickson",
      role: "Logistics Lead '22",
      currentJob: "SWE @ Microsoft",
      quote:
        "My favorite things about HackSC were spending time with some of my best friends and getting to see all of our hard work pay off. My favorite memory was getting to know everyone at the retreat!",
    },
    {
      photoUrl: "/alumni/max.png",
      name: "Max Leiter",
      role: "Engineering Lead'22",
      currentJob: "SWE @ Vercel",
      quote:
        "My favorite thing about HackSC is students putting on an event that most professional organizations would struggle to do.",
    },
    {
      photoUrl: "/alumni/claire.png",
      name: "Claire Moody",
      role: "Sponsorship Lead '22",
      currentJob: "SWE @ JP Morgan",
      quote:
        "My favorite memory was the night of the final interview where we welcomed all of the new members to HackSC! It was so rewarding to watch the organization grow so much and meet the amazing new organizers.",
    },
    {
      photoUrl: "/alumni/chloe.png",
      name: "Chloe Tanlimco",
      role: "Engineering Member '22",
      currentJob: "SWE @ Microsoft",
      quote:
        "I had a lot of fun staying up late to work on last-minute features and finishing touches to our hacker platform, Odyssey, and it was fulfilling to see our website at the core of both hacker and organizer experiences that year.",
    },
  ];

  return (
    <Stack
      direction="vertical"
      alignItems="center"
      gap="4rem"
      style={{ backgroundColor: Colors.Blue.DarkBloo, padding: "7rem 0 3rem" }}
    >
      <CustomHeadingResponsive style={{ color: "white", textAlign: "center" }}>
        ALUMNI TESTIMONIALS
      </CustomHeadingResponsive>
      <Marquee>
        <Stack gap="2rem" alignItems="stretch">
          {alumni.map((el) => (
            <Card key={el.name}>
              <Image
                src={el.photoUrl}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "100%", objectFit: "cover" }}
                alt={`A picture of our alumni, ${el.name}`}
              />
              <CardBody>
                <BodyText
                  style={{
                    borderLeft: `3px solid ${Colors.Red.Redward}`,
                    paddingLeft: "1rem",
                    marginLeft: "-1rem",
                  }}
                >
                  {'"'}
                  {el.quote}
                  {'"'}
                </BodyText>
                <Stack direction="vertical" alignItems="start" gap="0">
                  <BodyText style={{ fontWeight: 800 }}>{el.name}</BodyText>
                  <BodyText style={{ color: Colors.Red.Redward }}>
                    {el.role}
                  </BodyText>
                  <BodyText style={{ color: Colors.Red.DonatedBlood }}>
                    {el.currentJob}
                  </BodyText>
                </Stack>
              </CardBody>
            </Card>
          ))}

          <div style={{ width: "0.2rem" }} />
        </Stack>
      </Marquee>
    </Stack>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  gap: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 400px;
    height: auto;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 3rem;
  background-color: white;
  padding: 3rem;

  @media (max-width: 900px) {
    height: 100%;
    justify-content: start;
  }
`;
