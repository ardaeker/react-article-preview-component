import React from "react";
import Share from "../assets/icon-share.svg";
import Twitter from "../assets/icon-twitter.svg";
import Facebook from "../assets/icon-facebook.svg";
import Pinterest from "../assets/icon-pinterest.svg";

const MobileShareFooter = ({ setIsOpen }) => {
  return (
    <>
      <p>SHARE</p>
      <img src={Facebook} alt="facebook" />
      <img src={Twitter} alt="Twitter" />
      <img src={Pinterest} alt="Pinterest" />
      <div className="share  share-open" onClick={() => setIsOpen(false)}>
        <img src={Share} alt="Share" />
      </div>
    </>
  );
};

export default MobileShareFooter;
