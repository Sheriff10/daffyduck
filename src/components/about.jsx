import React from "react";
import { FaBird } from "react-icons/fa";
import ParticlesComp from "./particles/particles";

export default function About() {
   const cardFunc = (title, img, text) => {
      return { title, img, text };
   };
   const cardArr = [
      cardFunc(
         "Community Driven",
         "c1.png",
         "$DUCK is a community-driven cryptocurrency project designed to foster active participation, engagement, and rewards for its community members. We believe that decisions should be made collectively, taking into account the perspectives and interests of all community members. Through voting mechanisms and community proposals, users can actively participate in shaping the project's future. All major decisions, such as protocol upgrades, partnerships, or treasury management, will be subject to community voting."
      ),
      cardFunc(
         "$Psypop Reward",
         "c2.png",
         "$DUCK introduces a unique reflection reward mechanism as an incentive for community participation and token holding. With every transaction made on the network, a portion of the transaction fee is redistributed to existing token holders. This redistribution provides passive income to the community and encourages users to hold onto their tokens, fostering a sense of loyalty and commitment."
      ),
      cardFunc(
         "Stay Active",
         "c2.png",
         "Join the $DUCK community and participte in greatest community of all time. We all love $DUCK."
      ),
   ];
   return (
      <div className="about">
        {/* <ParticlesComp /> */}
         <div className="container">
            <div className="abt-head d-flex justify-content-center">
               <h1>DAFFY THE DUCK</h1>
            </div>
            <div className="abt-body">
               <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                     <div className="abt-img">
                        <img src="dd.png" alt="Daffy" className="img-fluid"/>
                     </div>
                  </div>
                  <div className="col-12 col-lg-6">
                     <p>
                        Daffy Duck is a popular cartoon character created by Warner Bros. He is an anthropomorphic black duck known for his zany personality and comical antics.
                     </p>
                  </div>
               </div>
               <div className="abt-card">
                  <div className="row justify-content-center">
                     {cardArr.map((i, index) => (
                        <div className="col-lg-3 col-md-6 col-12" key={index}>
                           <div className="card-con">
                              <div className="card-head ">
                                 <div className="card-image">
                                    <img
                                       src={i.img}
                                       alt="Daffy"
                                       className="img-fluid"
                                    />
                                 </div>
                              </div>
                              <div className="card-body">
                                 <p className="text-bold m-0">{i.title}</p>
                                 <span>
                                    L{i.text}
                                 </span>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
