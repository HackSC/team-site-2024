import { Heading, Stack, Subheading } from "@hacksc/sctw-ui-kit";

export type TOpenRoles = Record<
  string,
  { teamColor: string; title: string; applyUrl: string }
>;

export const OpenRoles = () => {
  const openRoles: TOpenRoles = {};
  return (
    <Stack
    id="openroles"
      direction="vertical"
      alignItems="start"
      gap="4rem"
      style={{ padding: "5rem" }}
    >
      <Heading>OPEN ROLES</Heading>

      {Object.entries(openRoles).map(([teamName, v]) => (
        <Stack direction="vertical" alignItems="start" key={teamName}>
          <Subheading style={{ color: v.teamColor }}>{teamName}</Subheading>
        </Stack>
      ))}
    </Stack>
  );
};
