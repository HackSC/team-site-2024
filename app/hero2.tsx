import { BodyTextLarge, Colors, Stack, Subheading } from "@hacksc/sctw-ui-kit";

export const Hero2 = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      style={{ padding: "6rem", backgroundColor: Colors.Neutral.PaleBagel }}
    >
      <Stack
        direction="vertical"
        alignItems="center"
        style={{ width: "673px" }}
      >
        <Subheading style={{ textAlign: "center" }}>
          JOIN THE TEAM BEHIND USC’S LARGEST INNOVATION EVENTS!
        </Subheading>
        <BodyTextLarge style={{ textAlign: "center" }}>
          At HackSC, you will get a chance to collaborate in a team of driven
          individuals, network with industry professionals, and work on projects
          that make a difference, all while organizing SoCal{"'"}s most
          student-loved events. If you are passionate and eager to learn, we
          want you on our team!
        </BodyTextLarge>
      </Stack>
    </Stack>
  );
};
