import React from "react";
import { FaHandHolding, FaParachuteBox } from "react-icons/fa";

export default function Intro() {
   const toggleAirdrop = () => {
      const getAidrop = document.querySelector('.airdrop');
      getAidrop.classList.toggle('active-airdrop')
   }
   const alertShit = () => {
      window.alert('Airdrop Ongoing')
      toggleAirdrop()
   }
   return (
      <div className="intro">
         <div className="wrapper">
            <div className="container">
               <div className="d-flex c justify-content-center align-items-center">
                  <div className="col-lg-8 col-12">
                     <div className="intro-te">
                        <h1>Join The Quacka DOOO!! <br /> Let march to the moon </h1>
                        <p>Daffy Coin, Community driven and fuck go</p>
                        <div className="btn-con d-flex">
                           <button className="btn btn-lg text-bold"  onClick={toggleAirdrop}>
                              JOIN AIRDROP <FaParachuteBox />
                           </button>
                           <button className="btn btn-lg text-bold"  onClick={alertShit}>
                              CLAIM <FaHandHolding />
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
