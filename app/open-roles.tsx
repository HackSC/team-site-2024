import {
  BodyText,
  BodyTextLarge,
  Button,
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
  const openRoles: TOpenRoles = [];

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
            minWidth: "500px",
            flexGrow: 2,
            paddingBottom: "5rem",
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
          style={{
            margin: "-50px 0",
            zIndex: -1,
            marginLeft: "auto",
            marginTop: "auto",
          }}
        />
      </Stack>
    );
  }
};
