import React from "react";
import Share from "../assets/icon-share.svg";
import Avatar from "../assets/avatar-michelle.jpg";

const MobileUserFooter = ({ setIsOpen }) => {
  return (
    <>
      <figure className="avatar">
        <img className="user-image" src={Avatar} alt="Michelle Appleton" />
      </figure>
      <div className="card-footer-detail">
        <h2>Michelle Appleton</h2>
        <p>28 Jun 2020</p>
      </div>
      <div className="share" onClick={() => setIsOpen(true)}>
        <img className="share-img-open" src={Share} alt="Share" />
      </div>
    </>
  );
};

export default MobileUserFooter;
