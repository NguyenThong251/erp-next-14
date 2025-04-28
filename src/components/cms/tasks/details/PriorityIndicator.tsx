import React from "react";

interface PriorityIndicatorProps {
  priority: "urgent" | "normal"; // Mức độ ưu tiên
  onClick?: () => void; // Sự kiện click (nếu cần)
}

const PriorityIndicator: React.FC<PriorityIndicatorProps> = ({
  priority,
  onClick,
}) => {
  return (
    <div className="flex items-center gap-[10px]">
      {priority === "urgent" ? (
        <div
          className="text-[#F63A46] text-[12px] text-base/[12px] rounded-[6px] bg-secondError cursor-pointer"
          onClick={onClick} // Thêm sự kiện click nếu có
        >
          <div className="px-[8px] py-[4px] flex gap-[5px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
            >
              <path
                d="M0.5 6L1.16797 0.65625C1.21484 0.28125 1.53359 0 1.91328 0H5.86484C6.21641 0 6.5 0.283594 6.5 0.635156C6.5 0.710156 6.48594 0.7875 6.46016 0.857812L5.375 3.75H8.63984C9.11328 3.75 9.5 4.13438 9.5 4.61016C9.5 4.78359 9.44844 4.95234 9.35 5.09531L4.84531 11.6812C4.70703 11.8828 4.47969 12.0023 4.23828 12.0023H4.17031C3.80234 12.0023 3.50234 11.7023 3.50234 11.3344C3.50234 11.2805 3.50938 11.2266 3.52344 11.1727L4.625 6.75H1.25C0.835156 6.75 0.5 6.41484 0.5 6Z"
                fill="#F63A46"
              />
            </svg>
            Khẩn cấp
          </div>
        </div>
      ) : (
        <div
          className="bg-Grey px-[8px] py-[4px] rounded-[6px] cursor-pointer"
          onClick={onClick} // Thêm sự kiện click nếu có
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
          >
            <g clipPath="url(#clip0_2251_7717)">
              <path
                d="M0.5 6L1.16797 0.65625C1.21484 0.28125 1.53359 0 1.91328 0H5.86484C6.21641 0 6.5 0.283594 6.5 0.635156C6.5 0.710156 6.48594 0.7875 6.46016 0.857812L5.375 3.75H8.63984C9.11328 3.75 9.5 4.13438 9.5 4.61016C9.5 4.78359 9.44844 4.95234 9.35 5.09531L4.84531 11.6812C4.70703 11.8828 4.47969 12.0023 4.23828 12.0023H4.17031C3.80234 12.0023 3.50234 11.7023 3.50234 11.3344C3.50234 11.2805 3.50938 11.2266 3.52344 11.1727L4.625 6.75H1.25C0.835156 6.75 0.5 6.41484 0.5 6Z"
                fill="#A0AEC0"
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
        </div>
      )}
    </div>
  );
};

export default PriorityIndicator;
