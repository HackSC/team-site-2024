"use client";

import { Heading } from "@hacksc/sctw-ui-kit";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

export const CustomHeadingResponsive = ({
  children,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  const { width } = useWindowSize();
  if (width !== null && width < 600)
    return (
      <Heading {...props} style={{ fontSize: "2.3rem", ...props.style }}>
        {children}
      </Heading>
    );
  return <Heading {...props}>{children}</Heading>;
};
