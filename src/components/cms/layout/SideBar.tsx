"use client";
import React, { useState } from "react";
import Logo from "../ui/Logo";
import Menu from "./Menu";
import { useSidebarStore } from "@/stores/layout";
import { AnimatePresence, motion } from "framer-motion";

export default function SideBar() {
  const { isSidebarVisible } = useSidebarStore();
  const [isHidden, setIsHidden] = useState(!isSidebarVisible);
  return (
    <AnimatePresence>
      {isSidebarVisible && (
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -250, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onAnimationComplete={(definition: { x: number }) => {
            if (definition.x === -250) {
              setIsHidden(true);
            } else {
              setIsHidden(false);
            }
          }}
          className={`${isHidden ? "hidden" : "block"}`}
        >
          <div className="bg-white rounded-[16px] w-[250px] min-h-screen  ">
            <Logo />
            <Menu />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
