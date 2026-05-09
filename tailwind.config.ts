import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FBF8F2",
          100: "#F6F1E7",
          200: "#EFE7D5",
          300: "#E5D9BE",
          400: "#D6C49E",
        },
        canvas: {
          DEFAULT: "#F4EEE2",
          warm: "#EDE4D2",
          deep: "#E2D6BE",
        },
        ink: {
          DEFAULT: "#2A2622",
          soft: "#3D3832",
          muted: "#6E665A",
          faint: "#9A9082",
        },
        bronze: {
          DEFAULT: "#8A6B3D",
          light: "#A88A5C",
          deep: "#5E4626",
        },
        sepia: {
          DEFAULT: "#7A6448",
          light: "#A8907A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.02em",
        wide: "0.08em",
        widest: "0.32em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.65, 0, 0.05, 1)",
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        slow: "1200ms",
        slower: "1800ms",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-6px,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
        drift: "drift 9s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
