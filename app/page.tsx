"use client";

import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Hero2 } from "./hero2";
import { Teams } from "./teams";
import { OpenRoles } from "./open-roles";
import { Alumni } from "./alumni";
import { AlumniDestinations } from "./alumni-destinations";
import { FAQ } from "./faq";
import { Footer } from "./footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Hero2 />
      <Teams />
      <Alumni />
      <AlumniDestinations />
      <FAQ />
      <Footer />
    </main>
  );
}
