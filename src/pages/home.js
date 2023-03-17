import React from "react";
import { Navbar, Slider } from "../components";
import { config } from "../utils/data";
export default function Home() {
  return (
    <>
      <Navbar />
      <Slider config={config} />
      {/* <Socials /> */}
    </>
  );
}
