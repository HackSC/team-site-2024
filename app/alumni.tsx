import { BodyText, Colors, Heading, Stack } from "@hacksc/sctw-ui-kit";
import Image from "next/image";

export const Alumni = () => {
  const alumni: {
    photoUrl: string;
    quote: string;
    name: string;
    role: string;
    currentJob: string;
  }[] = [];

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
          <Stack style={{ width: "800px", height: "400px" }} key={el.name}>
            <Image
              src={el.photoUrl}
              fill
              style={{ objectFit: "cover" }}
              alt={`A picture of our alumni, ${el.name}`}
            />
            <Stack
              direction="vertical"
              justifyContent="center"
              alignItems="start"
              gap="3rem"
            >
              <BodyText>
                {'"'}
                {el.quote}
                {'"'}
              </BodyText>
              <Stack
                direction="vertical"
                alignItems="start"
                style={{ backgroundColor: "white" }}
              >
                <BodyText style={{ fontWeight: 800 }}>{el.name}</BodyText>
                <BodyText style={{ color: Colors.Red.Redward }}>
                  {el.role}
                </BodyText>
                <BodyText style={{ color: Colors.Red.DonatedBlood }}>
                  {el.currentJob}
                </BodyText>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
