import { CustomHeadingResponsive } from "@/components/responsive-heading";
import {
  BodyText,
  BodyTextLarge,
  Button,
  Colors,
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
      team: "Product x Engineering",
      teamColor: Colors.Blue.Bloo,
      buttonColor: "blue",
      roles: [
        {
          title: "Product Manager",
          applyUrl:
            "https://hacksc25.notion.site/Product-Manager-25a5825a8b5d81d3838bf4ea20952c64",
        },
      ],
    },
    {
      team: "Engineering",
      teamColor: Colors.Red.Redward,
      buttonColor: "red",
      roles: [
        {
          title: "Software Engineer",
          applyUrl:
            "https://hacksc25.notion.site/Software-Engineer-25a5825a8b5d810f8b21f75298b54226",
        },
      ],
    },
    {
      team: "Hacker Experience",
      teamColor: Colors.Yellow.ArthurSweater,
      buttonColor: "yellow",
      roles: [
        {
          title: "Experience Coordinator",
          applyUrl:
            "https://hacksc25.notion.site/Experience-Coordinator-25a5825a8b5d811ba0f7e4c70b9110d0",
        },
      ],
    },
    {
      team: "Partnerships",
      teamColor: Colors.Blue.Bloo,
      buttonColor: "blue",
      roles: [
        {
          title: "Partnerships Coordinator",
          applyUrl:
            "https://hacksc25.notion.site/Partnerships-Coordinator-25a5825a8b5d81979d26e260d062d895",
        },
      ],
    },
    {
      team: "Operations",
      teamColor: Colors.Yellow.ArthurSweater,
      buttonColor: "yellow",
      roles: [
        {
          title: "Operations Coordinator",
          applyUrl:
            "https://hacksc25.notion.site/Operations-Coordinator-25a5825a8b5d8153bfa9fff500a22b11",
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
            "https://hacksc25.notion.site/Product-Designer-25a5825a8b5d814c9e17d0efea72b56a",
        },
      ],
    },
    {
      team: "Marketing",
      teamColor: Colors.Yellow.ArthurSweater,
      buttonColor: "yellow",
      roles: [
        {
          title: "Marketing Coordinator",
          applyUrl:
            "https://hacksc25.notion.site/Marketing-2615825a8b5d80938a28d011f1b65bde",
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
