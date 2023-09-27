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
          title: "Software Developer | Fronted",
          applyUrl:
            "https://hacksc23.notion.site/Product-Engineer-c44db7f46789439c83c703eaea5198f1?pvs=4",
        },
        {
          title: "Software Developer | Backend",
          applyUrl:
            "https://hacksc23.notion.site/Product-Engineer-c44db7f46789439c83c703eaea5198f1?pvs=4",
        },
        {
          title: "Software Developer | Infrastructure",
          applyUrl:
            "https://hacksc23.notion.site/Product-Engineer-c44db7f46789439c83c703eaea5198f1?pvs=4",
        },
        {
          title: "Product Manager",
          applyUrl:
            "https://hacksc23.notion.site/Product-Engineer-c44db7f46789439c83c703eaea5198f1?pvs=4",
        },
      ],
    },

    {
      team: "Product",
      teamColor: Colors.Blue.Bloo,
      buttonColor: "blue",
      roles: [
        {
          title: "UI/UX Designer",
          applyUrl:
            "https://hacksc23.notion.site/UI-UX-Designer-6f3ddc4fdea54f4780c0683469f37c5e?pvs=4",
        },
        {
          title: "Graphics Designer",
          applyUrl:
            "https://hacksc23.notion.site/Graphic-Designer-0c6c2c54aace437db76874bdd64ba08d",
        },
      ],
    },
    // {
    //   team: "Hacker Experience",
    //   teamColor: Colors.Yellow.ArthurSweater,
    //   buttonColor: "yellow",
    //   roles: [
    //     {
    //       title: "Experience Coordinator",
    //       applyUrl:
    //         "https://hacksc23.notion.site/Experience-Coordinator-fddbe7b0b365488586b9636d0921b404?pvs=4",
    //     },
    //   ],
    // },
    {
      team: "Operations",
      teamColor: Colors.Red.Redward,
      buttonColor: "red",
      roles: [
        {
          title: "Operations Coordinator",
          applyUrl:
            "https://hacksc23.notion.site/Operations-Coordinator-44706cf630d94bcb82bb5dd44ab87540?pvs=4",
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
          applyUrl:
            "https://hacksc23.notion.site/Marketing-Coordinator-45bacd29d63b4cb19398de98441daebf?pvs=4",
        },
        {
          title: "Marketing Team | Content",
          applyUrl:
            "https://hacksc23.notion.site/Marketing-Coordinator-45bacd29d63b4cb19398de98441daebf?pvs=4",
        },
      ],
    },
    // {
    //   team: "Partnerships",
    //   teamColor: Colors.Blue.Bloo,
    //   buttonColor: "blue",
    //   roles: [
    //     {
    //       title: "Partnerships Team | Strategy Outreach",
    //       applyUrl:
    //         "https://hacksc23.notion.site/Partnerships-Coordinator-c4244b7af50844d58b6216121cd09a5d?pvs=4",
    //     },
    //   ],
    // },
  ];

  return (
    <Stack
      id="openroles"
      direction="vertical"
      gap="4rem"
      style={{ padding: "5rem 1rem", paddingBottom: 0 }}
    >
      <Heading
        style={{
          alignSelf: "start",
          paddingLeft: "10rem",
          paddingRight: "3rem",
        }}
      >
        OPEN POSITIONS
      </Heading>

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
                  // Divider on every row except for the last
                  const divider =
                    i != team.roles.length - 1 ? (
                      <hr
                        style={{
                          width: "100%",
                          height: "1px",
                          backgroundColor: team.teamColor,
                          border: "none",
                        }}
                      />
                    ) : null;
                  return (
                    <>
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
                      {divider}
                    </>
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
