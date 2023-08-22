import type { Metadata } from "next";
import { Styles } from "./styles";
import StyledComponentsRegistry from "./registry";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Join the team | HackSC",
  description:
    "Join HackSC's team of event organizers, innovators, hackers, as people revolutionizing the hackathon experience",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://team.hacksc.com",
    title: "Join the team | HackSC",
    description:
      "Join HackSC's team of event organizers, innovators, hackers, as people revolutionizing the hackathon experience",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "HackSC logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0 }}>
        <Styles />
        <Analytics />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
