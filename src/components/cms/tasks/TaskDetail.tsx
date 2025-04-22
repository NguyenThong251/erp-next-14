"use client";
import React, { useState, useEffect } from "react";
import { useTaskStore } from "@/stores/task";
import dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TaskDetail() {
  const { isDrawerOpen, closeDrawer, selectedTask, selectedTaskId } =
    useTaskStore();
  const [formData, setFormData] = useState<any>({});
  const [isSaving, setIsSaving] = useState(false);

  // Initialize form data when component mounts or selectedTask changes
  useEffect(() => {
    if (selectedTask) {
      const formInitialValues = {
        ...selectedTask,
        startDate: selectedTask.startDate
          ? dayjs(selectedTask.startDate)
          : null,
        dueDate: selectedTask.dueDate ? dayjs(selectedTask.dueDate) : null,
      };
      setFormData(formInitialValues);
    }
  }, [selectedTask]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name: string, date: any) => {
    setFormData((prev: any) => ({ ...prev, [name]: date }));
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Saving task:", formData);
      setIsSaving(false);
      closeDrawer();
    }, 1000);
  };

  if (!selectedTask) return null;

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#00000033] "
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute right-[16px] top-[16px] bottom-[16px] w-[678px] shadow-custom-soft bg-white rounded-[16px]  overflow-hidden p-5"
          >
            <div className="flex flex-col gap-5">
              <div className="header-task-detail flex items-center justify-between">
                <div className="flex items-end gap-[15px]">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13.6162 0.822266C14.019 0.419502 14.6577 0.394355 15.0898 0.74707L15.1729 0.822266C15.5754 1.22484 15.6002 1.86284 15.248 2.29492L15.1729 2.37891L9.91016 7.64648L9.55664 8L9.91016 8.35352L15.1777 13.6162C15.5805 14.019 15.6056 14.6577 15.2529 15.0898L15.1777 15.1729C14.7752 15.5754 14.1372 15.6002 13.7051 15.248L13.6211 15.1729L8.35352 9.91016L8 9.55664L7.64648 9.91016L2.38379 15.1777C1.98103 15.5805 1.34227 15.6056 0.910156 15.2529L0.827148 15.1777C0.42463 14.7752 0.399776 14.1372 0.751953 13.7051L0.827148 13.6211L6.08984 8.35352L6.44336 8L6.08984 7.64648L0.822266 2.38379C0.419503 1.98103 0.394356 1.34227 0.74707 0.910156L0.822266 0.827148C1.22484 0.424629 1.86284 0.399775 2.29492 0.751953L2.37891 0.827148L7.64648 6.08984L8 6.44336L8.35352 6.08984L13.6162 0.822266Z"
                        fill="#A0AEC0"
                        stroke="#A0AEC0"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2251_7688)">
                        <path
                          d="M10.75 0H15.25C15.6656 0 16 0.334375 16 0.75V5.25C16 5.55312 15.8188 5.82812 15.5375 5.94375C15.2563 6.05937 14.9344 5.99687 14.7188 5.78125L13.5 4.5625L10.7812 7.28125C10.4875 7.575 10.0125 7.575 9.72188 7.28125L8.72188 6.28125C8.42813 5.9875 8.42813 5.5125 8.72188 5.22188L11.4406 2.50312L10.2188 1.28125C10.0031 1.06562 9.94062 0.74375 10.0562 0.4625C10.1719 0.18125 10.4469 0 10.75 0ZM5.25 16H0.75C0.334375 16 0 15.6656 0 15.25V10.75C0 10.4469 0.18125 10.1719 0.4625 10.0562C0.74375 9.94062 1.06562 10.0031 1.28125 10.2188L2.5 11.4375L5.21875 8.71875C5.5125 8.425 5.9875 8.425 6.27812 8.71875L7.27812 9.71875C7.57187 10.0125 7.57187 10.4875 7.27812 10.7781L4.55937 13.4969L5.77812 14.7156C5.99375 14.9312 6.05625 15.2531 5.94063 15.5344C5.825 15.8156 5.55 15.9969 5.24687 15.9969L5.25 16Z"
                          fill="#A0AEC0"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2251_7688">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-[10px] px-[15px] py-[5px] rounded-[8px] border-[1px] border-[#E2E8F0">
                  <span className="text-textColor text-[14px] font-[400] text-base/[14px]">
                    Hoàn thành
                  </span>
                  <span>|</span>
                  <div className="flex items-center gap-[5px]">
                    <span>50%</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                    >
                      <path
                        d="M4.88213 6.80685C5.22393 7.14864 5.779 7.14864 6.1208 6.80685L10.4958 2.43185C10.8376 2.09005 10.8376 1.53497 10.4958 1.19318C10.154 0.851379 9.59893 0.851379 9.25713 1.19318L5.5001 4.95021L1.74307 1.19591C1.40127 0.854114 0.846191 0.854114 0.504395 1.19591C0.162598 1.53771 0.162598 2.09279 0.504395 2.43458L4.87939 6.80958L4.88213 6.80685Z"
                        fill="#A0AEC0"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2251_7697)">
                      <path
                        d="M15.4969 5.20625C15.5969 5.47813 15.5126 5.78125 15.2969 5.975L13.9438 7.20625C13.9782 7.46563 13.9969 7.73125 13.9969 8C13.9969 8.26875 13.9782 8.53438 13.9438 8.79375L15.2969 10.025C15.5126 10.2188 15.5969 10.5219 15.4969 10.7937C15.3594 11.1656 15.1938 11.5219 15.0032 11.8656L14.8563 12.1187C14.6501 12.4625 14.4188 12.7875 14.1657 13.0938C13.9813 13.3188 13.6751 13.3937 13.4001 13.3062L11.6594 12.7531C11.2407 13.075 10.7782 13.3438 10.2844 13.5469L9.89381 15.3313C9.83131 15.6156 9.61256 15.8406 9.32506 15.8875C8.89381 15.9594 8.45006 15.9969 7.99693 15.9969C7.54381 15.9969 7.10006 15.9594 6.66881 15.8875C6.38131 15.8406 6.16256 15.6156 6.10006 15.3313L5.70943 13.5469C5.21568 13.3438 4.75318 13.075 4.33443 12.7531L2.59693 13.3094C2.32193 13.3969 2.01568 13.3188 1.83131 13.0969C1.57818 12.7906 1.34693 12.4656 1.14068 12.1219L0.993807 11.8687C0.803182 11.525 0.637557 11.1687 0.500057 10.7969C0.400057 10.525 0.484432 10.2219 0.700057 10.0281L2.05318 8.79688C2.01881 8.53438 2.00006 8.26875 2.00006 8C2.00006 7.73125 2.01881 7.46563 2.05318 7.20625L0.700057 5.975C0.484432 5.78125 0.400057 5.47813 0.500057 5.20625C0.637557 4.83438 0.803182 4.47813 0.993807 4.13438L1.14068 3.88125C1.34693 3.5375 1.57818 3.2125 1.83131 2.90625C2.01568 2.68125 2.32193 2.60625 2.59693 2.69375L4.33756 3.24688C4.75631 2.925 5.21881 2.65625 5.71256 2.45312L6.10318 0.66875C6.16568 0.384375 6.38443 0.159375 6.67193 0.1125C7.10318 0.0375 7.54693 0 8.00006 0C8.45318 0 8.89693 0.0375 9.32818 0.109375C9.61568 0.15625 9.83443 0.38125 9.89693 0.665625L10.2876 2.45C10.7813 2.65313 11.2438 2.92188 11.6626 3.24375L13.4032 2.69062C13.6782 2.60312 13.9844 2.68125 14.1688 2.90313C14.4219 3.20938 14.6532 3.53437 14.8594 3.87812L15.0063 4.13125C15.1969 4.475 15.3626 4.83125 15.5001 5.20312L15.4969 5.20625ZM8.00006 10.5C8.6631 10.5 9.29898 10.2366 9.76782 9.76777C10.2367 9.29893 10.5001 8.66304 10.5001 8C10.5001 7.33696 10.2367 6.70107 9.76782 6.23223C9.29898 5.76339 8.6631 5.5 8.00006 5.5C7.33702 5.5 6.70113 5.76339 6.23229 6.23223C5.76345 6.70107 5.50006 7.33696 5.50006 8C5.50006 8.66304 5.76345 9.29893 6.23229 9.76777C6.70113 10.2366 7.33702 10.5 8.00006 10.5Z"
                        fill="#A0AEC0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2251_7697">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="p-[9px]  bg-[#EBEFF5] rounded-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                    >
                      <path
                        d="M0.25 8C0.25 7.53587 0.434374 7.09075 0.762563 6.76256C1.09075 6.43437 1.53587 6.25 2 6.25C2.46413 6.25 2.90925 6.43437 3.23744 6.76256C3.56563 7.09075 3.75 7.53587 3.75 8C3.75 8.46413 3.56563 8.90925 3.23744 9.23744C2.90925 9.56563 2.46413 9.75 2 9.75C1.53587 9.75 1.09075 9.56563 0.762563 9.23744C0.434374 8.90925 0.25 8.46413 0.25 8ZM5.25 8C5.25 7.53587 5.43437 7.09075 5.76256 6.76256C6.09075 6.43437 6.53587 6.25 7 6.25C7.46413 6.25 7.90925 6.43437 8.23744 6.76256C8.56563 7.09075 8.75 7.53587 8.75 8C8.75 8.46413 8.56563 8.90925 8.23744 9.23744C7.90925 9.56563 7.46413 9.75 7 9.75C6.53587 9.75 6.09075 9.56563 5.76256 9.23744C5.43437 8.90925 5.25 8.46413 5.25 8ZM12 6.25C12.4641 6.25 12.9092 6.43437 13.2374 6.76256C13.5656 7.09075 13.75 7.53587 13.75 8C13.75 8.46413 13.5656 8.90925 13.2374 9.23744C12.9092 9.56563 12.4641 9.75 12 9.75C11.5359 9.75 11.0908 9.56563 10.7626 9.23744C10.4344 8.90925 10.25 8.46413 10.25 8C10.25 7.53587 10.4344 7.09075 10.7626 6.76256C11.0908 6.43437 11.5359 6.25 12 6.25Z"
                        fill="#A0AEC0"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-[10px] items-center">
                    <span className="text-drakGrey text-sm font-[400px]">
                      Dự án / Nhóm
                    </span>
                    <button className="text-[14px] text-[#fff] bg-drakGrey py-[6px] px-[12px] rounded-[8px] flex items-center gap-[10px]">
                      Công việc cá nhân
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                      >
                        <path
                          d="M4.63408 6.80685C4.97588 7.14864 5.53096 7.14864 5.87275 6.80685L10.2478 2.43185C10.5896 2.09005 10.5896 1.53497 10.2478 1.19318C9.90596 0.851379 9.35088 0.851379 9.00908 1.19318L5.25205 4.95021L1.49502 1.19591C1.15322 0.854114 0.598144 0.854114 0.256348 1.19591C-0.0854492 1.53771 -0.0854492 2.09279 0.256348 2.43458L4.63135 6.80958L4.63408 6.80685Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <button className="text-blackGrey text-[14px] bg-Grey py-[6px] px-[12px] rounded-[8px] flex items-center gap-[10px]">
                      Cần thực hiện
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                      >
                        <path
                          d="M5.13823 6.80685C5.48003 7.14864 6.03511 7.14864 6.3769 6.80685L10.7519 2.43185C11.0937 2.09005 11.0937 1.53497 10.7519 1.19318C10.4101 0.851379 9.85503 0.851379 9.51323 1.19318L5.7562 4.95021L1.99917 1.19591C1.65737 0.854114 1.10229 0.854114 0.760498 1.19591C0.418701 1.53771 0.418701 2.09279 0.760498 2.43458L5.1355 6.80958L5.13823 6.80685Z"
                          fill="#64748B"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className=" text-[#F63A46] text-[12px] text-base/[12px]  rounded-[6px] bg-secondError">
                      <div className="px-[8px] py-[4px] flex gap-[5px] items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2251_7717)">
                            <path
                              d="M0.5 6L1.16797 0.65625C1.21484 0.28125 1.53359 0 1.91328 0H5.86484C6.21641 0 6.5 0.283594 6.5 0.635156C6.5 0.710156 6.48594 0.7875 6.46016 0.857812L5.375 3.75H8.63984C9.11328 3.75 9.5 4.13438 9.5 4.61016C9.5 4.78359 9.44844 4.95234 9.35 5.09531L4.84531 11.6812C4.70703 11.8828 4.47969 12.0023 4.23828 12.0023H4.17031C3.80234 12.0023 3.50234 11.7023 3.50234 11.3344C3.50234 11.2805 3.50938 11.2266 3.52344 11.1727L4.625 6.75H1.25C0.835156 6.75 0.5 6.41484 0.5 6Z"
                              fill="#F63A46"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2251_7717">
                              <rect
                                width="9"
                                height="12"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Khẩn cấp
                      </div>
                    </div>
                    <div className="bg-Grey px-[8px] py-[4px] rounded-[6px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2251_7723)">
                          <path
                            d="M2 0.75C2 0.335156 1.66484 0 1.25 0C0.835156 0 0.5 0.335156 0.5 0.75V1.5V8.625V11.25C0.5 11.6648 0.835156 12 1.25 12C1.66484 12 2 11.6648 2 11.25V8.25L3.50703 7.87266C4.47031 7.63125 5.48984 7.74375 6.37813 8.18672C7.41406 8.70469 8.61641 8.76797 9.69922 8.36016L10.5125 8.05547C10.8055 7.94531 11 7.66641 11 7.35234V1.54922C11 1.01016 10.4328 0.658594 9.95 0.9L9.725 1.0125C8.63984 1.55625 7.3625 1.55625 6.27734 1.0125C5.45469 0.6 4.51016 0.496875 3.61719 0.719531L2 1.125V0.75Z"
                            fill="#A0AEC0"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2251_7723">
                            <rect
                              width="10.5"
                              height="12"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text-textColor text-[20px] text-base/[20px] font-[600]">
                  {formData.taskName}
                </div>
              </div>
              <div className="flex gap-5 flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="638"
                  height="2"
                  viewBox="0 0 638 2"
                  fill="none"
                >
                  <path d="M0 1H638" stroke="url(#paint0_linear_2266_7728)" />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2266_7728"
                      x1="0"
                      y1="1"
                      x2="631.846"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E0E1E2" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#E2E8F0" />
                      <stop
                        offset="1"
                        stopColor="#E0E1E2"
                        stopOpacity="0.15625"
                      />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="flex items-center">
                  <span className="w-[150px] text-[14px] font-[400] text-drakGrey text-base/[14px]">
                    Chịu trách nhiệm
                  </span>
                  <div className="flex items-center  gap-[10px]">
                    <button className="flex items-center gap-[10px] px-[10px] rounded-[20px] bg-[#E7F3FF] py-[5px]">
                      <div className="">
                        <Image
                          src="/images/avt.svg"
                          width={20}
                          height={20}
                          alt="avt"
                        />
                      </div>
                      <div className="flex items-center gap-[5px]">
                        <span className="text-[14px] font-[400]  text-textBlue">
                          Công Du
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                        >
                          <path
                            d="M8.27679 1.98214C8.58214 1.79464 8.78571 1.45446 8.78571 1.07143C8.78571 0.479464 8.30625 0 7.71429 0C7.12232 0 6.64286 0.479464 6.64286 1.07143C6.64286 1.45714 6.84643 1.79464 7.15179 1.98214L5.61696 5.05179C5.37321 5.53929 4.74107 5.67857 4.31518 5.33839L1.92857 3.42857C2.0625 3.24911 2.14286 3.02679 2.14286 2.78571C2.14286 2.19375 1.66339 1.71429 1.07143 1.71429C0.479464 1.71429 0 2.19375 0 2.78571C0 3.37768 0.479464 3.85714 1.07143 3.85714C1.07679 3.85714 1.08482 3.85714 1.09018 3.85714L2.31429 10.5911C2.46161 11.4054 3.17143 12 4.00179 12H11.4268C12.2545 12 12.9643 11.408 13.1143 10.5911L14.3384 3.85714C14.3438 3.85714 14.3518 3.85714 14.3571 3.85714C14.9491 3.85714 15.4286 3.37768 15.4286 2.78571C15.4286 2.19375 14.9491 1.71429 14.3571 1.71429C13.7652 1.71429 13.2857 2.19375 13.2857 2.78571C13.2857 3.02679 13.3661 3.24911 13.5 3.42857L11.1134 5.33839C10.6875 5.67857 10.0554 5.53929 9.81161 5.05179L8.27679 1.98214Z"
                            fill="url(#paint0_linear_2271_7812)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2271_7812"
                              x1="0.474643"
                              y1="1.42857"
                              x2="15.4248"
                              y2="8.70809"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FAB534" />
                              <stop offset="1" stop-color="#F64F39" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Chi tiết công việc: {selectedTaskId}
                </h2>
                <button
                  onClick={closeDrawer}
                  className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div> */}

              {/* <div className="h-[calc(100%-64px)] overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Tên công việc
                    </label>
                    <input
                      type="text"
                      name="taskName"
                      value={formData.taskName || ""}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Phòng ban
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department || ""}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Dự án / Nhóm
                    </label>
                    <input
                      type="text"
                      name="project"
                      value={formData.project || ""}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Ngày bắt đầu
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={
                        formData.startDate
                          ? dayjs(formData.startDate).format("YYYY-MM-DD")
                          : ""
                      }
                      onChange={(e) =>
                        handleDateChange("startDate", dayjs(e.target.value))
                      }
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Hạn hoàn thành
                    </label>
                    <input
                      type="date"
                      name="dueDate"
                      value={
                        formData.dueDate
                          ? dayjs(formData.dueDate).format("YYYY-MM-DD")
                          : ""
                      }
                      onChange={(e) =>
                        handleDateChange("dueDate", dayjs(e.target.value))
                      }
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Trạng thái
                    </label>
                    <select
                      name="status"
                      value={formData.status || ""}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    >
                      <option value="">Chọn trạng thái</option>
                      <option value="Đang hoạt động">Đang hoạt động</option>
                      <option value="Chờ duyệt">Chờ duyệt</option>
                      <option value="Hoàn thành">Hoàn thành</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Tình trạng
                    </label>
                    <input
                      type="text"
                      name="condition"
                      value={formData.condition || ""}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div> */}

              {/* <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={closeDrawer}
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    {isSaving ? (
                      <span className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Đang lưu...
                      </span>
                    ) : (
                      "Lưu"
                    )}
                  </button>
                </div>
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
