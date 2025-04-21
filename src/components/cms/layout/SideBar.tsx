import React from "react";
import Logo from "../ui/Logo";
import Menu from "./Menu";

export default function SideBar() {
  return (
    <div className="bg-white rounded-[16px]  w-[250px] min-h-screen">
      <Logo />

      {/* <nav>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 mb-2"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav> */}
      <Menu />
    </div>
  );
}
