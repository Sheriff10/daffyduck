import React from "react";

export default function Airdrop() {
   return (
      <div className="airdrop">
        
         <div className="container">
         <div className="a-close p-2 d-flex">
            <small> X</small>
         </div>
            <div className="row justify-content-center c align-items-center">
               <div className="col-12 col-lg-4">
                  <div className="form">
                     <div className=" a-head">
                        <img
                           src="daffy.jpeg"
                           alt="Daffy Airdrop"
                           className="img-fluid"
                        />
                        <div className="a-head-text d-flex align-items-center">
                           <div className="wrap p-1">
                              <primary>
                                 {" "}
                                 <span className="text-bold h2">
                                    $Daffy Airdrop
                                 </span>
                              </primary>{" "}
                              <br /> <br />
                              <small>
                                 Complete task and earn Over 50,000 $DAFFY{" "}
                                 <br />
                                 Limited Participant! Get started
                              </small>
                           </div>
                        </div>
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Follow Daffy Duck on twitter</label>{" "}
                        <br />
                        <small>Submit link</small>
                        <input
                           type="text"
                           className="form-control form-sm"
                           placeholder="@twitter_username"
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Retweet Pinned Post</label> <br />
                        <small>Submit post link</small>
                        <input
                           type="text"
                           className="form-control form-sm"
                           placeholder="@twitter_username"
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Make a tweet about $DAFFY</label>{" "}
                        <br />
                        <small>Submit tweet link</small>
                        <input
                           type="text"
                           className="form-control form-sm"
                           placeholder="@twitter_username"
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor=""> ETH Address</label>{" "}
                        <br />
                        <input
                           type="text"
                           className="form-control form-sm"
                           placeholder="0x..."
                        />
                     </div>
                     <div className="form-group">
                        <input type="checkbox" /> I have Completed all task
                     </div>
                     <div className="form-group d-flex justify-content-center pt-4 pb-4">
                        <button className="btn btn-sm text-bold">Submit</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
