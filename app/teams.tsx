import {
  BodyText,
  Colors,
  Heading,
  Stack,
  Subheading2,
} from "@hacksc/sctw-ui-kit";
import * as Tabs from "@radix-ui/react-tabs";

interface Member {
  name: string;
  photoUrl: string;
}

type Role = string;

export const teams: {
  teamName: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  lead?: Member;
  members?: Record<Role, Member[]>;
}[] = [
  {
    teamName: "Engineering",
    description: `
    The Engineering Team builds what our organization dreams up! This team is a group of innovative tech nomads passionate about using technology to create something awesome,  after all, we’re organizing a hackathon. Our team is an essential piece in creating scalable web platforms that help create a one-of-a-kind digital experience for hackers!
    `,
    backgroundColor: Colors.Red.DonatedBlood,
    borderColor: Colors.Red.Redward,
  },
  {
    teamName: "Product",
    description: `
      The Product Team lies at the heart of what makes HackSC pop. This team designs and deliver the tools that other teams need to flourish. Our designers combine brand standards, color theory, graphic elements, and typography to make a measurable impact on our global audience. From leveraging UX/UI design to illustration, the Product Team gives hackers the opportunity to innovate and look good doing it!
    `,
    backgroundColor: Colors.Blue.DarkBloo,
    borderColor: Colors.Blue.Bloo,
  },
  {
    teamName: "Hacker Experience",
    description: `
      The HackerXP Team provides our hackers with a fun and unforgettable experience. Members of this team select the speakers, prizes, and plan fun events like the hacker-favorite puppy pen, and more. Our team gets to try a little bit of everything as they collaborate with various divisions of the org!
    `,
    backgroundColor: Colors.Yellow.ArthurSweater,
    borderColor: Colors.Yellow.BabyFood,
  },
  {
    teamName: "Operations",
    description: `
      The Operations Team is responsible for the day-of logistics of the event. We coordinate venues, budget, and other operations. If you’re interested in learning more about operations management or the business side of events - then our team is for you. Join us and become a part of why HackSC runs without a hitch!
    `,
    backgroundColor: Colors.Red.DonatedBlood,
    borderColor: Colors.Red.Redward,
  },
  {
    teamName: "Marketing",
    description: `
      The Marketing Team is at the core of HackSC, working with other teams on social media creation & management, digital marketing, aesthetics, writing, photography, and even executing creative campaigns for an amazing hackathon! If you have a diverse outreach skill set, this is the place for you!
Marketing wants to share with the world what HackSC is all about!
    `,
    backgroundColor: Colors.Yellow.ArthurSweater,
    borderColor: Colors.Yellow.BabyFood,
  },
  {
    teamName: "Partnerships",
    description: `
The Partnerships Team provides funding for our hackathon, reaching out to potential sponsors, networking with professionals in the tech space, and put together the best experience for our sponsors. If you’re interested in exploring the tech sector more and enjoy talking to people, this is a great fit for you!
    `,
    backgroundColor: Colors.Blue.DarkBloo,
    borderColor: Colors.Blue.Bloo,
  },
];

export const Teams = () => {
  return (
    <Stack
      direction="vertical"
      alignItems="start"
      gap="4rem"
      style={{ padding: "5rem" }}
    >
      <Heading>TEAMS</Heading>
      <Tabs.Root defaultValue="Engineering">
        <Stack wrap="wrap">
          <Tabs.List style={{ flex: 1 }}>
            <Stack direction="vertical" alignItems="start" wrap="wrap">
              {teams.map((el) => (
                <Tabs.Trigger value={el.teamName} key={el.teamName}>
                  {el.teamName}
                </Tabs.Trigger>
              ))}
            </Stack>
          </Tabs.List>
          {teams.map((el) => (
            <Tabs.Content
              value={el.teamName}
              key={el.teamName}
              style={{ flex: 1 }}
            >
              <Stack
                style={{
                  padding: "4rem",
                  border: `6px solid ${el.borderColor}`,
                  borderRadius: "10px",
                  minWidth: "600px",
                  backgroundColor: el.backgroundColor,
                }}
                justifyContent="center"
                alignItems="center"
              >
                <Stack
                  direction="vertical"
                  alignItems="start"
                  style={{ color: "white" }}
                >
                  <Subheading2>{el.teamName.toUpperCase()} TEAM</Subheading2>
                  <BodyText>{el.description}</BodyText>
                </Stack>
              </Stack>
            </Tabs.Content>
          ))}
        </Stack>
      </Tabs.Root>
    </Stack>
  );
};
