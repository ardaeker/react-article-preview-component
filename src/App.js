import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MainComponent from "./components/MainComponent";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDesktop, setIsOpenDesktop] = useState(false);

  const isDesktop = useMediaQuery({ query: "(min-width:576px)" });

  return (
    <AnimatePresence mode="wait">
      <MainComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isOpenDesktop={isOpenDesktop}
        setIsOpenDesktop={setIsOpenDesktop}
        isDesktop={isDesktop}
      />
    </AnimatePresence>
  );
}

export default App;
