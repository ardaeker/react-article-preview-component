import React from "react";
import { motion } from "framer-motion";
import MobileUserFooter from "./MobileUserFooter";
import MobileShareFooter from "./MobileShareFooter";
import DesktopFooterComponent from "./DesktopFooterComponent";

const MainComponent = ({ isOpen, setIsOpen, isOpenDesktop, setIsOpenDesktop, isDesktop }) => {
  return (
    <>
      <main>
        <figure className="card-header-img"></figure>
        <section className="card-content">
          <h2 className="card-content-header">
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </h2>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve
            got some simple tips to help you make any room feel complete.
          </p>
          {isDesktop ? (
            <DesktopFooterComponent isOpenDesktop={isOpenDesktop} setIsOpenDesktop={setIsOpenDesktop} />
          ) : null}
        </section>
        {isDesktop ? null : (
          <motion.footer
            layout
            key={isOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={isOpen ? "card-footer-share" : "card-footer"}
          >
            {isOpen ? <MobileShareFooter setIsOpen={setIsOpen} /> : <MobileUserFooter setIsOpen={setIsOpen} />}
          </motion.footer>
        )}
      </main>
      <footer className="footer">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.frontendmentor.io/profile/ardaekerFD">Arda Eker</a>.
        </p>
      </footer>
    </>
  );
};

export default MainComponent;
