import { BodyText, Colors, Heading, Stack } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import styled from "styled-components";

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
  ];

  return (
    <Stack
      direction="vertical"
      alignItems="center"
      gap="4rem"
      style={{ backgroundColor: Colors.Blue.DarkBloo, padding: "7rem 0" }}
    >
      <Heading style={{ color: "white", padding: "0 2rem" }}>
        ALUMNI TESTIMONIALS
      </Heading>
      <Stack>
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
            <Stack
              direction="vertical"
              justifyContent="center"
              alignItems="start"
              gap="3rem"
              style={{
                backgroundColor: "white",
                height: "100%",
                padding: "3rem",
              }}
            >
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
            </Stack>
          </Card>
        ))}
      </Stack>
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
