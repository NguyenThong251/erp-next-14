import Image from "next/image";

interface LogoProps {
  collapsed: boolean;
}
export default function Logo({ collapsed }: LogoProps) {
  return (
    <>
      {/* <div className="flex items-center gap-4 pt-[24px] px-[38px] pb-[16px]"> */}
      <div className="flex items-center justify-center gap-4 pt-[24px] pb-[16px] border-b border-[#E9ECEF]">
        {/* <Dashboard sx={{ fontSize: 28, color: "#3B82F6", mr: 1 }} /> */}

        <Image
          src="/images/logo-icon.svg"
          alt="ERP Quốc Duy Logo"
          width={40}
          height={40}
        />
        <h3
          className={`text-[#344767] font-[600] text-[16px] transition-all duration-300 ${
            collapsed ? "hidden" : "block"
          }`}
        >
          ERP Quốc Duy
        </h3>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="234"
        height="2"
        viewBox="0 0 234 2"
        fill="none"
      >
        <path d="M0.375 1H233.625" stroke="url(#paint0_linear_4990_1147)" />
        <defs>
          <linearGradient
            id="paint0_linear_4990_1147"
            x1="0.375"
            y1="1"
            x2="231.375"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E0E1E2" stopOpacity="0" />
            <stop offset="0.5" stop-color="#E0E1E2" />
            <stop offset="1" stop-color="#E0E1E2" stopOpacity="0.15625" />
          </linearGradient>
        </defs>
      </svg> */}
    </>
  );
}
