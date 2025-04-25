"use client";
import TaskDetail from "@/components/cms/tasks/TaskDetail";
import useAuthStore from "@/stores/auth";
import { App, Button, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const { clearAuth } = useAuthStore();

  const router = useRouter();
  return (
    <>
      <Space wrap>
        <Button type="primary" onClick={showModal}>
          Open modal
        </Button>
      </Space>
      {/* {isLoggedIn ? (
        <button
          onClick={() => {
            clearAuth();
            router.push("/login");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      ) : (
      )} */}
      <>
        <Link href="/login" className="mr-4 text-blue-500">
          Login
        </Link>
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </>
    </>
  );
}
