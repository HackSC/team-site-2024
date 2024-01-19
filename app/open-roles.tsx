import { CustomHeadingResponsive } from "@/components/responsive-heading";
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
  const openRoles: TOpenRoles = [
    {
      team: "Engineering",
      teamColor: Colors.Red.Redward,
      buttonColor: "red",
      roles: [
        {
          title: "Frontend Engineer",
          applyUrl:
            "https://hacksc23.notion.site/Frontend-Engineer-f159f50ae2764f049a4de815dc312585?pvs=4",
        },
      ],
    },

    {
      team: "Product",
      teamColor: Colors.Blue.Bloo,
      buttonColor: "blue",
      roles: [
        {
          title: "Product Designer",
          applyUrl:
            "https://hacksc23.notion.site/Product-Designer-3baaa4d7c19149b0887f8be0e06191b9?pvs=4",
        },
      ],
    },
    // {
    //   team: "Hacker Experience",
    //   teamColor: Colors.Yellow.ArthurSweater,
    //   buttonColor: "yellow",
    //   roles: [],
    // },
    {
      team: "Operations",
      teamColor: Colors.Red.Redward,
      buttonColor: "red",
      roles: [
        {
          title: "Operations Coordinator",
          applyUrl:
            "https://hacksc23.notion.site/Operations-Coordinator-f9e7ecf7f7fc49cfb7bea7444aca9568?pvs=4",
        },
      ],
    },
    // {
    //   team: "Marketing",
    //   teamColor: Colors.Yellow.ArthurSweater,
    //   buttonColor: "yellow",
    //   roles: [],
    // },
    {
      team: "Partnerships",
      teamColor: Colors.Blue.Bloo,
      buttonColor: "blue",
      roles: [
        {
          title: "Partnerships Coordinator",
          applyUrl:
            "https://hacksc23.notion.site/Partnerships-Coordinator-708c1e020d5044e3a35fa5d2e3455707?pvs=4",
        },
      ],
    },
  ];

  return (
    <Stack
      id="openroles"
      direction="vertical"
      gap="4rem"
      wrap="wrap"
      style={{ padding: "5rem 1rem", paddingBottom: 0 }}
    >
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
        justifyContent="center"
        style={{ width: "100%" }}
      >
        <OpenRolesContainer
          direction="vertical"
          style={{
            flexGrow: 2,
            paddingBottom: "2rem",
          }}
        >
          <CustomHeadingResponsive style={{ alignSelf: "start" }}>
            OPEN POSITIONS
          </CustomHeadingResponsive>
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
                {team.roles.map(function (role, i) {
                  return (
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
                  );
                })}
              </Stack>
            </Stack>
          ))}
        </OpenRolesContainer>
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

const OpenRolesContainer = styled(Stack)`
  padding-left: 3rem;
  padding-right: 3rem;
  @media (max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 1200px) {
    padding-left: 10rem;
    padding-right: 0rem;
  }
`;

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

  @media (min-width: 1200px) {
    padding-right: 10rem;
  }
`;
