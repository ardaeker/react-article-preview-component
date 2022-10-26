import React from "react";
import Avatar from "../assets/avatar-michelle.jpg";
import Share from "../assets/icon-share.svg";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import { motion } from "framer-motion";

const DesktopFooterComponent = ({ isOpenDesktop, setIsOpenDesktop }) => {
  return (
    <footer className="card-footer-desktop">
      <figure className="avatar">
        <img className="user-image" src={Avatar} alt="Michelle Appleton" />
      </figure>
      <div className="card-footer-detail">
        <h2>Michelle Appleton</h2>
        <p>28 Jun 2020</p>
      </div>

      {isOpenDesktop ? (
        <motion.div
          layout
          key={isOpenDesktop}
          className="share-box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
        >
          <p>SHARE</p>
          <a href="https://www.facebook.com/">
            <img className="facebook" src={Facebook} alt="facebook" />
          </a>
          <a href="https://www.twitter.com/">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.pinterest.com/">
            <img src={Pinterest} alt="Pinterest" />
          </a>
        </motion.div>
      ) : null}

      <motion.div
        className={isOpenDesktop ? "share share-open" : "share"}
        whileTap={{ scale: 0.8 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpenDesktop(!isOpenDesktop)}
      >
        <img className={isOpenDesktop ? null : "share-img-open"} src={Share} alt="Share" />
      </motion.div>
    </footer>
  );
};

export default DesktopFooterComponent;
