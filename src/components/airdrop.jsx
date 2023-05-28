import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function Airdrop() {
   const [twitter_username, setTwitter_username] = useState("");
   const [retweet_link, setRetweet_link] = useState("");
   const [post_link, setPost_link] = useState("");
   const [address, setAddress] = useState("");
   const [errMsg, setErrMsg] = useState("");
   const [spin, setspin] = useState("");
   const [spinTime, setspinTime] = useState(0);
   const toggleAirdrop = () => {
      const getAidrop = document.querySelector(".airdrop");
      getAidrop.classList.toggle("active-airdrop");
   };

   useEffect(() => {
      const checkCompleted = window.localStorage.getItem("completed");
      if (checkCompleted == "true") {
         const getCompleted = document.querySelector(".airdrop .a-completed");
         getCompleted.classList.add("comp-active");
      }
      setspin(
         <div className="spinner-grow spinner-grow-sm m-2" role="status">
            <span className="sr-only"></span>
         </div>
      );
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrMsg("");
      setspinTime(1);
      const data = { twitter_username, retweet_link, post_link, address };
      axios
         .post(window.api, data)
         .then((res) => {
            setspinTime(0);
            if (res.data == "inserted") {
               const getCompleted = document.querySelector(
                  ".airdrop .a-completed"
               );
               getCompleted.classList.add("comp-active");
               window.localStorage.setItem("completed", "true");
            }
         })
         .catch((err) => {
            setspinTime(0)
            setErrMsg(
               <div className="alert alert-danger">
                  This twitter account with the username{" "}
                  <span className="text-bold">{twitter_username}</span> has
                  performed airdrop task already
               </div>
            );
            console.log(err);
         });
   };
   return (
      <div className="airdrop">
         <div className="container">
            <div className="a-close p-2 d-flex" onClick={toggleAirdrop}>
               <small> X</small>
            </div>
            <div className="row justify-content-center c align-items-center">
               <div className="col-12 col-lg-5">
                  <form className="form" onSubmit={handleSubmit}>
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
                     {errMsg}
                     <div className="form-body">
                        <div className="form-group">
                           <label htmlFor="">
                              Follow Daffy Duck on twitter
                           </label>{" "}
                           <br />
                           <small>Submit Twitter username</small>
                           <input
                              type="text"
                              className="form-control form-sm"
                              placeholder="@twitter_username"
                              onChange={(e) =>
                                 setTwitter_username(e.target.value)
                              }
                              required
                              value={twitter_username}
                           />
                        </div>
                        <div className="form-group">
                           <label htmlFor="">
                              Retweet and Quote Retweet Pinned Post
                           </label>{" "}
                           <br />
                           <small>Submit quote tweet Link</small>
                           <input
                              type="text"
                              className="form-control form-sm"
                              placeholder="@twitter_username"
                              onChange={(e) => setRetweet_link(e.target.value)}
                              required
                              value={retweet_link}
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
                              onChange={(e) => setPost_link(e.target.value)}
                              required
                              value={post_link}
                           />
                        </div>
                        <div className="form-group">
                           <label htmlFor=""> your ETH Address</label> <br />
                           <input
                              type="text"
                              className="form-control form-sm"
                              placeholder="0x..."
                              onChange={(e) => setAddress(e.target.value)}
                              required
                              value={address}
                           />
                        </div>
                        <div className="form-group">
                           <input type="checkbox" required /> I have Completed
                           all task
                        </div>
                        <div className="form-group d-flex justify-content-center pt-4 pb-4">
                           {/* <input
                              type="submit"
                              className="btn btn-sm text-bold"
                              value={`Completed ${spin}`}
                           /> */}
                           <button type="submit" className="btn btn-sm text-bold d-flex align-items-center justify-content-center">Submit Task {spinTime == 1 ? spin : null}</button>
                        </div>

                        <div className="a-completed">
                           <div className="wrap">
                              <h1>Airdrop completed successfully</h1>
                              <span>
                                 Winner will be announce on our offcial twitter
                                 page. Stay tuned for info
                              </span>{" "}
                              <br />
                              <div className="a-icon-wrap d-flex justify-content-center">
                                 <i>
                                    <FaCheck />
                                 </i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
