import axios from "axios";
import { FaCheck } from "react-icons/fa";
import React, { useEffect, useState }  from "react";
import Footer from "./footer";

export default function Influencers() {
   const [name, setName] = useState("");
   const [address, setAddress] = useState("");
   const [spin, setspin] = useState("");
   const [spinTime, setspinTime] = useState(0);

   useEffect(() => {
      setspin(
         <div className="spinner-grow spinner-grow-sm m-2" role="status">
            <span className="sr-only"></span>
         </div>
      );
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      setspinTime(1)
      const data = { name, address };
      axios
         .post(window.influencerApi, data)
         .then((res) => {
            if(res.data == "influencer added"){
                window.alert('Your info has been recorded')
                setspinTime(0)
            }
         })
         .catch((err) => {
            setspinTime(0);
            console.log(err);
         });
   };
   return (
      <div className="airdrop influencer">
         <div className="container">
            {/* <div className="a-close p-2 d-flex" onClick={toggleAirdrop}>
               <small> X</small>
            </div> */}
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
                                    Influencer Details
                                 </span>
                              </primary>{" "}
                              <br /> <br />
                              <small>
                                 Please Input your Twitter name and your Ethereum address
                              </small>
                           </div>
                        </div>
                     </div>
                     <div className="form-body">
                        <div className="form-group">
                           <label htmlFor="">Influencer Name</label>{" "}
                           <br />
                           <input
                              type="text"
                              className="form-control form-sm"
                              placeholder="@twitter_username"
                              onChange={(e) => setName(e.target.value)}
                              required
                              value={name}
                           />
                        </div>
                        <div className="form-group">
                           <label htmlFor=""> Influencer Address</label> <br />
                           <input
                              type="text"
                              className="form-control form-sm"
                              placeholder="0x..."
                              onChange={(e) => setAddress(e.target.value)}
                              required
                              value={address}
                           />
                        </div>
                        <div className="form-group d-flex justify-content-center pt-4 pb-4">
                           <button
                              type="submit"
                              className="btn btn-sm text-bold d-flex align-items-center justify-content-center"
                           >
                              Submit Details {spinTime == 1 ? spin : null}
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
