import { Colors, Stack, Subheading2 } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { CustomHeadingResponsive } from "../components/responsive-heading";

export const AlumniDestinations = () => {
  const companiesLength = 9;

  return (
    <Stack
      direction="vertical"
      alignItems="center"
      gap="4rem"
      style={{
        backgroundColor: Colors.Blue.DarkBloo,
        padding: "3rem 0 15rem",
      }}
    >
      <Stack direction="vertical" style={{ padding: "0 0rem" }}>
        <CustomHeadingResponsive
          style={{ color: "white", textAlign: "center" }}
        >
          ALUMNI DESTINATIONS
        </CustomHeadingResponsive>
        <Subheading2
          style={{ color: Colors.Blue.Periwinkle, textAlign: "center" }}
        >
          Where our alumni have continued their journeys...
        </Subheading2>
      </Stack>
      <Marquee autoFill>
        <Stack>
          {Array.from({ length: companiesLength }, (_, i) => i + 1)
            .filter((_, i) => i % 2 === 0)
            .map((i) => (
              <Image
                key={i}
                src={`/companies/${i}.svg`}
                alt="Company's logo"
                width={136}
                height={136}
              />
            ))}
          <div style={{ width: "0.2rem" }} />
        </Stack>
      </Marquee>
      <Marquee direction="right" autoFill>
        <Stack>
          {Array.from({ length: companiesLength }, (_, i) => i + 1)
            .filter((_, i) => i % 2 !== 0)
            .map((i) => (
              <Image
                key={i}
                src={`/companies/${i}.svg`}
                alt="Company's logo"
                width={136}
                height={136}
              />
            ))}
          <div style={{ width: "0.2rem" }} />
        </Stack>
      </Marquee>
    </Stack>
  );
};
