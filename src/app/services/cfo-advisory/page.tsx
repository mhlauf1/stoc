import React from "react";
import Intro from "@/components/services/cfo/Intro";
import CoreServices from "@/components/services/cfo/CoreServices";
import Hero from "@/components/services/cfo/Hero";

const CFOPage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <CoreServices />
    </main>
  );
};

export default CFOPage;
