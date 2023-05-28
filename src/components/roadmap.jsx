import React from "react";
import { FaCircle } from "react-icons/fa";

export default function Roadmap() {
   return (
      <div className="roadmap" id="roadmap">
         <div className="container">
            <div className="roadmap-heading">
               <h1>Roadmap</h1>
            </div>
            <div className="row align-items-center">
               <div className="col-lg-6 col-12">
                  <div className="dashes">
                     <div className="col">
                        <div className="r-head">
                           <h3>
                              {" "}
                              <i className="circle">
                                 <FaCircle />
                              </i>{" "}
                              PHASE 1
                           </h3>
                        </div>
                        <div className="r-body">
                           <ul>
                              <li>COMPLETE WEBSITE</li>
                              <li>Creation of socia platforms.</li>
                              <li>Official launch of #Duck.</li>
                              <li>Getting listed on coin gecko and coin market cap.</li>
                              <li>Trending on dextool</li>
                              <li>START INFLUENCER OUTREACH</li>
                              <li>DISTRIBUTION OF AIRDROP.</li>
                           </ul>
                        </div>
                     </div>
                     <div className="col">
                        <div className="r-head d-flex align-items-center">
                           <h3>
                              {" "}
                              <i className="circle">
                                 <FaCircle />
                              </i>{" "}
                              PHASE 2
                           </h3>
                        </div>
                        <div className="r-body">
                           <ul>
                              <li>1000 HOLDERS</li>
                              <li>1st cex listing</li>
                              <li>FULL TOKEN AUDIT</li>
                              <li>LOCKED LIQUIDITY forever.</li>
                              <li>Meme competition and shilling competition </li>
                              <li>Duck Nfts</li>
                           </ul>
                        </div>
                     </div>
                     <div className="col">
                        <div className="r-head d-flex align-items-center">
                           <h3>
                              {" "}
                              <i className="circle">
                                 <FaCircle />
                              </i>{" "}
                              PHASE 3
                           </h3>
                        </div>
                        <div className="r-body">
                           <ul>
                              <li>Twitter trending</li>
                              <li>2000 holders </li>
                              <li>2nd CEX listing</li>
                              <li>AMBASSADORS PROGRAM.</li>
                              <li>STAKING/LP REWARDS ACTIVATION </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col">
                        <div className="r-head d-flex align-items-center">
                           <h3>
                              {" "}
                              <i className="circle">
                                 <FaCircle />
                              </i>{" "}
                              PHASE 4
                           </h3>
                        </div>
                        <div className="r-body">
                           <ul>
                              <li>Partnership with top Defi projects.</li>
                              <li>Creative billboard campaign to generate awareness.</li>
                              <li>More Cex listing.</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-12 mb-img">
                  <div className="col-5 col-lg-12">
                     <img src="c1.png" alt="Dappy Roadmap" className="rounded mx-auto d-block img-fluid "/>
                  </div>
                  <div className="col-5 col-lg-12">
                     <img src="daffy.png" alt="Dappy Roadmap" className="rounded mx-auto d-block img-fluid "/>
                  </div>
                  <div className="col-5 col-lg-12">
                     <img src="c3.png" alt="Dappy Roadmap" className="rounded mx-auto d-block img-fluid "/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
