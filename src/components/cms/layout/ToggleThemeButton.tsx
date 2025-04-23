import React from "react";
import { Button } from "antd";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

interface ToggleThemeButtonProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}

export default function ToggleThemeButton({
  darkTheme,
  toggleTheme,
}: ToggleThemeButtonProps) {
  return (
    <div className="absolute bottom-[16px] left-[16px] flex items-center justify-center text-[20px]">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
}
