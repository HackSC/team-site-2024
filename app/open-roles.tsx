import {
  BodyText,
  Button,
  Colors,
  Heading,
  Stack,
  Subheading,
} from "@hacksc/sctw-ui-kit";
import Image from "next/image";

export type TOpenRoles = {
  team: string;
  teamColor: string;
  buttonColor: "blue" | "red" | "yellow" | "black";
  roles: { title: string; applyUrl: string }[];
}[];

export const OpenRoles = () => {
  const openRoles: TOpenRoles = [
    {
      team: "Engineering",
      teamColor: Colors.Red.Redward,
      buttonColor: "red",
      roles: [
        {
          title: "Software Developer | Frontend",
          applyUrl: "/",
        },
        {
          title: "Software Developer | Backend",
          applyUrl: "/",
        },
        {
          title: "Software Developer | Infrastructure",
          applyUrl: "/",
        },
        {
          title: "Product Manager",
          applyUrl: "/",
        },
      ],
    },
    {
      team: "Marketing",
      teamColor: Colors.Yellow.ArthurSweater,
      buttonColor: "yellow",
      roles: [
        {
          title: "Marketing Team | PR & Brand",
          applyUrl: "/",
        },
        {
          title: "Marketing Team | Content",
          applyUrl: "/",
        },
      ],
    },
    {
      team: "Partnerships",
      teamColor: Colors.Blue.Bloo,
      buttonColor: "blue",
      roles: [
        {
          title: "Partnerships Team | Strategy & Outreach",
          applyUrl: "/",
        },
      ],
    },
    {
      team: "Product",
      teamColor: Colors.Neutral.Gray.SCHEMDIUM,
      buttonColor: "black",
      roles: [
        {
          title: "Product Team | UX Design",
          applyUrl: "/",
        },
      ],
    },
  ];

  return (
    <Stack
      id="openroles"
      direction="vertical"
      alignItems="start"
      gap="4rem"
      style={{ padding: "5rem", paddingBottom: 0 }}
    >
      <Heading>OPEN POSITIONS</Heading>

      <Stack
        direction="horizontal"
        wrap="wrap"
        alignItems="end"
        style={{ width: "100%" }}
      >
        <Stack
          direction="vertical"
          style={{
            minWidth: "500px",
            flexGrow: 2,
            paddingBottom: "5rem",
          }}
        >
          {openRoles.map((team) => (
            <Stack
              direction="vertical"
              alignItems="start"
              key={team.team}
              style={{ width: "100%" }}
            >
              <Subheading style={{ color: team.teamColor }}>
                {team.team.toUpperCase()}
              </Subheading>
              <Stack
                direction="vertical"
                alignItems="start"
                justifyContent="center"
                gap="0"
                style={{ width: "100%" }}
              >
                {team.roles.map((role, i) => (
                  <Stack
                    direction="horizontal"
                    justifyContent="space-between"
                    key={role.title}
                    style={{
                      borderTop: `${i === 0 ? "0" : "1px"} solid ${
                        team.teamColor
                      }`,
                      padding: "0.75rem 0",
                      width: "100%",
                    }}
                  >
                    <BodyText>{role.title}</BodyText>
                    <Button color={team.buttonColor} fitWidth>
                      APPLY
                    </Button>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Image
          src="/graphics/palm-trees.svg"
          width={400}
          height={800}
          alt="Decorative palm trees"
          style={{ margin: "-50px 0", zIndex: -1, marginLeft: "auto" }}
        />
      </Stack>
    </Stack>
  );
};
