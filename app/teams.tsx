"use client";

import {
  BodyText,
  Colors,
  Subheading,
  Stack,
  Subheading2,
  Button,
} from "@hacksc/sctw-ui-kit";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

interface Member {
  name: string;
  photoUrl: string;
}

type Role = string;

export const teams: {
  teamName: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  tabChosenColor: string;
  img: string;
  imgFit?: string;
  lead?: Member;
  members?: Record<Role, Member[]>;
}[] = [
  {
    teamName: "Engineering",
    description: `
    The Engineering Team builds what our organization dreams up! This team is a group of innovative tech nomads passionate about using technology to create something awesome,  after all, we’re organizing a hackathon. Our team is an essential piece in creating scalable web platforms that help create a one-of-a-kind digital experience for hackers!
    `,
    backgroundColor: Colors.Red.DonatedBlood,
    borderColor: Colors.Red.Redward,
    tabChosenColor: Colors.Red.Rash,
    img: "/teams/engineering.png",
    imgFit: "40%",
  },
  {
    teamName: "Product",
    description: `
      The Product Team lies at the heart of what makes HackSC pop. This team designs and deliver the tools that other teams need to flourish. Our designers combine brand standards, color theory, graphic elements, and typography to make a measurable impact on our global audience. From leveraging UX/UI design to illustration, the Product Team gives hackers the opportunity to innovate and look good doing it!
    `,
    backgroundColor: Colors.Blue.DarkBloo,
    borderColor: Colors.Blue.Bloo,
    tabChosenColor: Colors.Blue.Periwinkle,
    img: "/teams/product.png",
    imgFit: "55%",
  },
  {
    teamName: "Hacker Experience",
    description: `
      The HackerXP Team provides our hackers with a fun and unforgettable experience. Members of this team select the speakers, prizes, and plan fun events like the hacker-favorite puppy pen, and more. Our team gets to try a little bit of everything as they collaborate with various divisions of the org!
    `,
    backgroundColor: Colors.Yellow.ArthurSweater,
    borderColor: Colors.Yellow.BabyFood,
    tabChosenColor: Colors.Neutral.Bagel,
    img: "/teams/experience.png",
  },
  {
    teamName: "Operations",
    description: `
      The Operations Team is responsible for the day-of logistics of the event. We coordinate venues, budget, and other operations. If you’re interested in learning more about operations management or the business side of events - then our team is for you. Join us and become a part of why HackSC runs without a hitch!
    `,
    backgroundColor: Colors.Red.DonatedBlood,
    borderColor: Colors.Red.Redward,
    tabChosenColor: Colors.Red.Rash,
    img: "/teams/operations.png",
    imgFit: "60%",
  },
  {
    teamName: "Marketing",
    description: `
      The Marketing Team is at the core of HackSC, working with other teams on social media creation & management, digital marketing, aesthetics, writing, photography, and even executing creative campaigns for an amazing hackathon! If you have a diverse outreach skill set, this is the place for you!
Marketing wants to share with the world what HackSC is all about!
    `,
    backgroundColor: Colors.Yellow.ArthurSweater,
    borderColor: Colors.Yellow.BabyFood,
    tabChosenColor: Colors.Neutral.Bagel,
    img: "/teams/marketing.png",
    imgFit: "75%",
  },
  {
    teamName: "Partnerships",
    description: `
The Partnerships Team provides funding for our hackathon, reaching out to potential sponsors, networking with professionals in the tech space, and put together the best experience for our sponsors. If you’re interested in exploring the tech sector more and enjoy talking to people, this is a great fit for you!
    `,
    backgroundColor: Colors.Blue.DarkBloo,
    borderColor: Colors.Blue.Bloo,
    tabChosenColor: Colors.Blue.Periwinkle,
    img: "/teams/partnerships.png",
  },
];

export const Teams = () => {
  const defaultVal = teams[0].teamName;
  const [tabval, setTabval] = useState(defaultVal);

  return (
    <Stack
      direction="vertical"
      justifyContent="center"
      gap="4rem"
      style={{ padding: "5rem 2rem" }}
    >
      <Subheading>THE SIX CORE TEAMS</Subheading>
      <Stack justifyContent="center" wrap="wrap" style={{ gap: "22px" }}>
        {teams.map((el) => (
          <Stack direction="vertical" key={el.teamName}>
            <TeamImage key={el.teamName}>
              <ImageContainer
                style={{
                  border: el.borderColor,
                }}
              >
                <Image
                  src={el.img}
                  alt={el.description}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    borderRadius: "31.831px",
                    border: `5px solid ${el.borderColor}`,
                    background: `lightgray -246.357px -101.052px / 417.407% 126.773% no-repeat}`,
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: el.imgFit,
                    maxWidth: "400px",
                  }}
                />
              </ImageContainer>
            </TeamImage>
            <Button variant="outline" color="black" type="button">
              JOIN US!
            </Button>
          </Stack>
        ))}
      </Stack>
      <Tabs.Root
        defaultValue={defaultVal}
        value={tabval}
        onValueChange={(val) => setTabval(val)}
      >
        <Stack
          wrap="wrap"
          gap="2rem"
          alignItems="center"
          justifyContent="center"
        >
          <Tabs.List>
            <Subheading2 style={{ paddingBottom: "36px" }}>TEAMS</Subheading2>
            <StackTriggers style={{ gap: "22.5px" }}>
              {teams.map((el) => (
                <Tabs.Trigger
                  value={el.teamName}
                  key={el.teamName}
                  style={{
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "10px",
                    backgroundColor:
                      tabval === el.teamName
                        ? el.tabChosenColor
                        : "transparent",
                    color: el.backgroundColor,
                    textTransform: "uppercase",
                    // paddingBottom: "45px",
                  }}
                >
                  <Subheading2
                    style={{ lineHeight: 0.5, width: "max-content" }}
                  >
                    {el.teamName}
                  </Subheading2>
                </Tabs.Trigger>
              ))}
            </StackTriggers>
          </Tabs.List>
          {teams.map((el) => (
            <Tabs.Content value={el.teamName} key={el.teamName}>
              <Stack
                style={{
                  padding: "4rem 2rem",
                  maxWidth: "30rem",
                }}
                justifyContent="center"
                alignItems="center"
              >
                <Stack direction="vertical" alignItems="start">
                  <Subheading>{el.teamName.toUpperCase()} TEAM</Subheading>
                  <BodyText>{el.description}</BodyText>
                  <Stack direction="horizontal" wrap="wrap">
                    <Image
                      src={el.img}
                      alt={`${el.teamName} image`}
                      width={215}
                      height={143}
                    />
                    <Image
                      src={el.img}
                      alt={`${el.teamName} image`}
                      width={215}
                      height={143}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Tabs.Content>
          ))}
        </Stack>
      </Tabs.Root>
    </Stack>
  );
};

const StackTriggers = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    flex-direction: row;
  }
`;

const TeamImage = styled.div`
  width: 200px;
  height: 426px;
  flex-shrink: 0;
  border-radius: 31.831px;
  background: linear-gradient(0deg, #000 10.51%, rgba(0, 0, 0, 0) 31.53%);
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 426px;
  border-radius: 31.831px;
  border: 5px solid;
  background: linear-gradient(0deg, #000 10.51%, rgba(0, 0, 0, 0) 31.53%);
  position: relative;
`;
