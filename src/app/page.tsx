"use client";
import { App, Button, Drawer, Modal, Space } from "antd";
import { useState } from "react";

export default function Home() {
  const { modal } = App.useApp();

  const showModal = () => {
    modal.info({
      title: "This is a warning message",
      content: "some messages...some messages...",
      transitionName: "app-slide-left",
    });
  };

  return (
    <>
      <Space wrap>
        <Button type="primary" onClick={showModal}>
          Open modal
        </Button>
      </Space>
    </>
  );
}
