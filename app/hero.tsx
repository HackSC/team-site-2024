import {
  ASSET_URLS,
  Button,
  Colors,
  Heading,
  Input,
  Stack,
  Subheading2,
} from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { saveContactToList } from "./services/sendgrid";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const submitEmail: FormEventHandler = (e) => {
    e.preventDefault();
    saveContactToList(email)
      .then(() => {
        setSubscribed(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Stack
      wrap="wrap"
      justifyContent="center"
      alignItems="start"
      style={{ padding: "2rem 3rem 0" }}
    >
      <Stack
        direction="vertical"
        alignItems="start"
        style={{ paddingTop: "5rem" }}
      >
        <Heading>JOIN THE TEAM!</Heading>
        <Link target="_self" href="#openroles">
          <Button color="blue" variant="outline">
            VIEW OPEN ROLES
          </Button>
        </Link>
        <br style={{ height: "1rem" }} />

        {!subscribed && (
          <>
            <Subheading2 style={{ color: Colors.Blue.Bloo }}>
              Be the first to know of open roles
            </Subheading2>
            <form style={{ width: "100%" }} onSubmit={submitEmail}>
              <Stack fill>
                <Input
                  placeholder="Your email e.g email@usc.edu"
                  style={{ width: "100%", flex: 1 }}
                  type={"email"}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Button variant="solid" color="blue" type="submit" fitWidth>
                  JOIN US!
                </Button>
              </Stack>
            </form>
          </>
        )}
        {subscribed && (
          <Subheading2 style={{ color: Colors.Red.Redward }}>
            Thank you! 🥳
          </Subheading2>
        )}
      </Stack>
      <Image
        src={ASSET_URLS.BEACH_HOUSE}
        width={0}
        height={0}
        alt="Graphics of a beach house"
        priority
        style={{
          maxHeight: "600px",
          maxWidth: "700px",
          height: "100%",
          width: "100%",
        }}
      />
    </Stack>
  );
};
