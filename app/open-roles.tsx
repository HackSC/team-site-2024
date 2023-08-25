import {
  BodyText,
  BodyTextLarge,
  Button,
  Colors,
  Heading,
  Stack,
  Subheading,
} from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export type TOpenRoles = {
  team: string;
  teamColor: string;
  buttonColor: "blue" | "red" | "yellow" | "black";
  roles: { title: string; applyUrl: string }[];
}[];

export const OpenRoles = () => {
  const applicationLink = "https://hack.sc/apply";
  const openRoles: TOpenRoles = [
    {
      team: "Engineering",
      teamColor: Colors.Red.Redward,
      buttonColor: "red",
      roles: [{ title: "Product Engineer", applyUrl: applicationLink }],
    },

    {
      team: "Product",
      teamColor: Colors.Blue.Bloo,
      buttonColor: "blue",
      roles: [
        { title: "UI/UX Designer", applyUrl: applicationLink },
        { title: "Graphics Designer", applyUrl: applicationLink },
      ],
    },
    {
      team: "Operations",
      teamColor: Colors.Yellow.Yuhlow,
      buttonColor: "yellow",
      roles: [{ title: "Operations Coordinator", applyUrl: applicationLink }],
    },
    {
      team: "Hacker Experience",
      teamColor: Colors.Red.Redward,
      buttonColor: "red",
      roles: [{ title: "Experience Coordinator", applyUrl: applicationLink }],
    },
    {
      team: "Partnerships",
      teamColor: Colors.Blue.Bloo,
      buttonColor: "blue",
      roles: [{ title: "Partnerships Coordinator", applyUrl: applicationLink }],
    },
  ];

  return (
    <Stack
      id="openroles"
      direction="vertical"
      gap="4rem"
      style={{ padding: "5rem 1rem", paddingBottom: 0 }}
    >
      <Heading>OPEN POSITIONS</Heading>

      <OpenRolesDetails openRoles={openRoles} />
    </Stack>
  );
};

const OpenRolesDetails = (props: { openRoles: TOpenRoles }) => {
  if (props.openRoles.length === 0) {
    return (
      <Stack
        direction="vertical"
        style={{
          paddingBottom: "5rem",
          textAlign: "left",
        }}
      >
        <BodyTextLarge>
          We have no open positions at the moment. Please check back soon!
        </BodyTextLarge>
      </Stack>
    );
  } else {
    return (
      <Stack
        direction="horizontal"
        wrap="wrap"
        alignItems="start"
        style={{ width: "100%" }}
      >
        <Stack
          direction="vertical"
          style={{
            flexGrow: 2,
            paddingBottom: "2rem",
          }}
        >
          {props.openRoles.map((team) => (
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
                      padding: "0.75rem 0",
                      width: "100%",
                    }}
                  >
                    <BodyText>{role.title}</BodyText>
                    <Link href={role.applyUrl} target="_blank">
                      <Button color={team.buttonColor} fitWidth>
                        APPLY
                      </Button>
                    </Link>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
        <PalmtreesContainer>
          <Image
            src="/graphics/palm-trees.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="Decorative palm trees"
          />
        </PalmtreesContainer>
      </Stack>
    );
  }
};

const PalmtreesContainer = styled.div`
  position: relative;
  width: 400px;
  height: 800px;
  margin: -50px 0;
  z-index: -1;
  margin-left: auto;
  margin-top: auto;

  @media (max-width: 400px) {
    height: 600px;
  }
`;
