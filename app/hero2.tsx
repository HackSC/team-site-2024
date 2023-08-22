import { BodyTextLarge, Colors, Stack, Subheading } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import styled from "styled-components";

export const Hero2 = () => {
  return (
    <Container>
      <Stack
        alignItems="center"
        justifyContent="center"
        style={{
          backgroundImage: "url(/squiggles.svg)",
          backgroundSize: "contain",
          width: "100%",
          height: "100%",
          padding: "30rem 0",
        }}
      >
        <Stack
          direction="vertical"
          alignItems="center"
          style={{
            width: "673px",
            position: "relative",
            zIndex: 1,
            margin: "auto",
          }}
        >
          <Subheading style={{ textAlign: "center" }}>
            JOIN THE TEAM BEHIND USC{"'"}S LARGEST INNOVATION EVENTS!
          </Subheading>
          <BodyTextLarge style={{ textAlign: "center" }}>
            At HackSC, you will get a chance to collaborate in a team of driven
            individuals, network with industry professionals, and work on
            projects that make a difference, all while organizing SoCal{"'"}s
            most student-loved events. If you are passionate and eager to learn,
            we want you on our team!
          </BodyTextLarge>
        </Stack>
      </Stack>
    </Container>
  );
};

const Container = styled(Stack)({
  position: "relative",
  backgroundImage: "url(/background-wavy.svg)",
  backgroundSize: "cover",
  padding: "5rem 0",
  marginTop: "-8rem",
});
