import { Stack } from "@hacksc/sctw-ui-kit";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

export const DestinationsMarquees = () => {
  const [imageNames, setImageNames] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/companies")
      .then((res) => res.json() as unknown as string[])
      .then((json) => {
        setImageNames(json);
      });
  }, []);

  return (
    <>
      <Marquee autoFill>
        <Stack>
          {Array.from({ length: imageNames.length }, (_, i) => i)
            .filter((_, i) => i % 2 === 0)
            .map((i) => (
              <Image
                key={i}
                src={`/companies/${imageNames[i]}`}
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
          {Array.from({ length: imageNames.length }, (_, i) => i)
            .filter((_, i) => i % 2 !== 0)
            .map((i) => (
              <Image
                key={i}
                src={`/companies/${imageNames[i]}`}
                alt={`Company's logo with filename ${imageNames[i]}`}
                width={136}
                height={136}
              />
            ))}
          <div style={{ width: "0.2rem" }} />
        </Stack>
      </Marquee>
    </>
  );
};
export default DestinationsMarquees;
