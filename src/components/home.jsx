import React from "react";

import Intro from "./intro";
import About from "./about";
import Roadmap from "./roadmap";
import Airdrop from "./airdrop";

export default function Home() {
   return (
      <div className="home">
         <Intro />
         <About />
         <Roadmap />
         <Airdrop />
      </div>
   );
}
