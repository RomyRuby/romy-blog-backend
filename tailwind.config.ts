import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          font: {
            main: '#27264d',
            sub: '#8c8da9'
          }

        }
      }
    },
  },
  plugins: [Typography],
};
export default config;
