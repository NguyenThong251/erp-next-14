import React from "react";
import Logo from "../ui/Logo";
import Menu from "./Menu";

export default function SideBar() {
  return (
    <div className="bg-white rounded-[16px]  w-[250px] min-h-screen">
      <Logo />
      <Menu />
    </div>
  );
}
