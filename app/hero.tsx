import {
  ASSET_URLS,
  Button,
  Colors,
  Heading,
  Stack,
} from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <Stack wrap="wrap" justifyContent="center" style={{ padding: "5rem 5rem 0" }}>
      <Stack direction="vertical" alignItems="start">
        <Heading>JOIN THE TEAM!</Heading>
        <Link target="_self" href="#openroles">
        <Button color="blue" variant="outline">
          VIEW OPEN ROLES
        </Button>
        </Link>
      </Stack>
      <Image
        src={ASSET_URLS.BEACH_HOUSE}
        width={700}
        height={600}
        alt="Beach house"
      />
    </Stack>
  );
};
