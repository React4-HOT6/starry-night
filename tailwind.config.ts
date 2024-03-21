import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //meteor Effect
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      maxWidth: {
        customMax: "1200px",
      },
      backgroundImage: {
        main: "url('../../public/mainBackground.jpg')",
      },
    },
  },
  plugins: [addVariablesForColors, require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#4C17BF",
          secondary: "#836FFF",
          accent: "#51FFCB",
          neutral: "#DFDFDF",
          "base-100": "#ffffff",
          info: "#ff00ff",
          success: "#00ff00",
          warning: "#facc15",
          error: "#ff0000",
        },
      },
    ],
  },
};

/** BackgroundBeams 애니메이션 함수 */
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
