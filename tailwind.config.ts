import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — see /src/styles/tokens.css for raw values.
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#141210",
          muted: "#6E6862",
          faint: "#9A938B",
        },
        cream: {
          DEFAULT: "#F8F5F2",
          soft: "#FCFAF8",
          dark: "#E7DFD4",
        },
        gold: {
          DEFAULT: "#C6A15B",
          soft: "#DCC18A",
          deep: "#8A6A2E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
        wider2: "0.3em",
      },
      maxWidth: {
        container: "1320px",
      },
      boxShadow: {
        luxe: "0 30px 80px -40px rgba(10,10,10,0.55)",
        soft: "0 20px 50px -30px rgba(10,10,10,0.35)",
        glow: "0 0 0 1px rgba(198,161,91,0.4), 0 14px 40px -12px rgba(198,161,91,0.5)",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
        "fade-dark":
          "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 45%, rgba(10,10,10,0.45) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.14)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "slow-zoom": "slow-zoom 20s ease-out forwards",
        shimmer: "shimmer 6s linear infinite",
        float: "float 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
