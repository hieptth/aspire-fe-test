import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["OpenSans"],
        avenirNext: ["AvenirNext"],
      },
    },
  },
  plugins: [],
};

export default config;
