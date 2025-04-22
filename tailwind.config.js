/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hello: "#2275FF",
        textColor: "#344767",
        blackGrey: "#64748B",
        drakGrey: "#A0AEC0",
        textBlue: "#2275FF",
        Grey: "#EBEFF5",
        secondError: "rgba(252, 88, 107, 0.40)",
        secondGrey: "#F3F5F9",
        backgroundImage: {
          "custom-gradient":
            "linear-gradient(180deg, #9CACCC 0%, #7487A6 100%)",
        },
      },
      boxShadow: {
        "custom-soft": "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};
