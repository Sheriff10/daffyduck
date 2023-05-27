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
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quos ex reiciendis?"
      ),
      cardFunc(
         "$Psypop Reward",
         "c2.png",
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quos ex reiciendis?"
      ),
      cardFunc(
         "Stay Active",
         "c3.png",
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quos ex reiciendis?"
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Inventore tempore eius labore consequatur! Ipsa
                        nam officiis placeat tempore ratione sit nemo
                        perspiciatis quod, nisi similique porro sint in ad
                        beatae. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Atque qui placeat laboriosam omnis
                        voluptate impedit incidunt nam non, aliquid beatae
                        maiores dolor quas, dolores unde eveniet aliquam
                        excepturi. Quis, amet? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum repudiandae consequuntur non fuga, assumenda sunt
                        porro corporis vero odit quae a quia laborum veritatis?
                        Similique neque molestiae atque voluptatum dolor <br />
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
