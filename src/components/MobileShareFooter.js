import React from "react";
import Share from "../assets/icon-share.svg";
import Twitter from "../assets/icon-twitter.svg";
import Facebook from "../assets/icon-facebook.svg";
import Pinterest from "../assets/icon-pinterest.svg";

const MobileShareFooter = ({ setIsOpen }) => {
  return (
    <>
      <p>SHARE</p>
      <a href="https://www.facebook.com/">
        <img src={Facebook} alt="facebook" />
      </a>
      <a href="https://www.twitter.com/">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="https://www.pinterest.com/">
        <img src={Pinterest} alt="Pinterest" />
      </a>
      <div className="share  share-open" onClick={() => setIsOpen(false)}>
        <img src={Share} alt="Share" />
      </div>
    </>
  );
};

export default MobileShareFooter;
