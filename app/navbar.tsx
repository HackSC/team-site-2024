import { ASSET_URLS, Button, NavigationText, Stack } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Navbar = () => {
  const homepageLink = "https://hacksc.com";
  const teampageLink = "https://team.hacksc.com";

  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 5rem;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
