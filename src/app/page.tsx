"use client";
import { Button, Drawer } from "antd";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <p className="text-hello"> hello</p>

        <Button type="primary" onClick={showDrawer}>
          Button
        </Button>
        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </>
  );
}
