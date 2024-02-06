import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        white: "#FFFFFF",
        pattyPan: "#EFB810",
        violetDawn: "#A89B9B",
        black: "#000000",
      },
      fontFamily: {
        primary: "MateSC-Regular",
        secondary: "Monsterrat-Regular",
        secondaryBold: "Monsterrat-ExtraBold",
      },
      devices: {
        smallMobile: "(max-width: 360px)",
        smallTablet: "(max-width: 520px)",
        mobile: "(max-width: 768px)",
        bigTablet: "(max-width: 800px)",
        biggerMobile: "(max-width: 1024px)",
        middleResolutionDeskop: "(min-width: 1350px)",
        bigResolutionDesktop: "(min-width: 1900px)"
      }
    },
  },
  plugins: [],
};
export default config;
