"use client";

import { Colors, Stack, Subheading2 } from "@hacksc/sctw-ui-kit";
import { CustomHeadingResponsive } from "../components/responsive-heading";
import dynamic from "next/dynamic";

export const AlumniDestinations = () => {
  return (
    <Stack
      direction="vertical"
      alignItems="center"
      gap="4rem"
      style={{
        backgroundColor: Colors.Blue.DarkBloo,
        padding: "3rem 0 10rem",
      }}
    >
      <Stack direction="vertical" style={{ padding: "0" }}>
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
      <AlumniDestinationsContainer />
    </Stack>
  );
};

const AlumniDestinationsContainer = dynamic(
  () => import("../components/destination-marquees"),
  {},
);
