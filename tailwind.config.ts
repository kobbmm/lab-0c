import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: '#1F1F1F',           // สีดำ
        darkGray: '#2D2D2D',       // สีเทาเข้ม
        darkBlue: '#3A3A55',       // สีน้ำเงินเข้ม
        emeraldDark: '#2C6E49',    // สีเขียวมรกตเข้ม
        brightBlue: '#00BFFF',
        darkPurple: '#5A2D7D',
        vibrantRed: '#FF4C4C',
        vibrantYellow: '#FFD700',
        modernGray: '#4A4A4A',
        naturalBrown: '#E0C097',
        earthBrown: '#8D6E63',
        earthyGreen: '#4CAF50',
      },
    },
  },
  plugins: [],
};
export default config;


/*module.exports = {
  theme: {
    extend: {
      colors: {
        dark: '#1F1F1F',           // สีดำ
        darkGray: '#2D2D2D',       // สีเทาเข้ม
        darkBlue: '#3A3A55',       // สีน้ำเงินเข้ม
        emeraldDark: '#2C6E49',    // สีเขียวมรกตเข้ม
      },
    },
  },
  plugins: [],
}
*/ 