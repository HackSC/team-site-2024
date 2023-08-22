import {
  ASSET_URLS,
  Button,
  NavigationText,
  Stack,
  Subheading,
  Subheading2,
} from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const homepageLink = "https://hacksc.com";
  const teampageLink = "https://team.hacksc.com";

  return (
    <Stack
      justifyContent="space-between"
      wrap="wrap"
      style={{ padding: "2rem 5rem" }}
    >
      <Stack direction="horizontal" alignItems="center" gap="0.5rem">
        <Image
          src={ASSET_URLS.HIBISCUS_LOGO_2024}
          width={52}
          height={43}
          alt="Hibiscus Logo"
          priority
        />
        <NavigationText>HackSC</NavigationText>
      </Stack>
      <Stack>
        <Link href={homepageLink} style={{ all: "unset" }}>
          <Button variant="link" color="black">
            <NavigationText>Overview</NavigationText>
          </Button>
        </Link>
        <Link href={teampageLink}>
          <Button variant="link" color="red">
            <NavigationText>Team</NavigationText>
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};
