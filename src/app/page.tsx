"use client";
import TaskDetail from "@/components/cms/tasks/TaskDetail";
import { App, Button, Space } from "antd";
import { useRef } from "react";

export default function Home() {
  const { modal } = App.useApp();
  const modalRef = useRef<{ destroy: () => void } | null>(null);

  const showModal = () => {
    modalRef.current = modal.info({
      content: <TaskDetail onClose={() => modalRef.current?.destroy()} />,
      width: 678,
      transitionName: "app-zoom",
      // className: "custom-modal-height",
      footer: null,
      icon: null,
      centered: false,
      style: {
        top: 24,
        right: 16,
        position: "fixed",
        margin: 0,
      },
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
