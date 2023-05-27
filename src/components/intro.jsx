import React from "react";
import { FaParachuteBox } from "react-icons/fa";

export default function Intro() {
   return (
      <div className="intro">
         <div className="wrapper">
            <div className="container">
               <div className="d-flex c justify-content-center align-items-center">
                  <div className="col-lg-8 col-12">
                     <div className="intro-te">
                        <h1>Join The Quacka DOOO!! <br /> Let march to the moon </h1>
                        <p>Daffy Coin, Community driven and fuck go</p>
                        <div className="btn-con">
                           <button className="btn btn-lg text-bold">
                              JOIN AIRDROP <FaParachuteBox />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
