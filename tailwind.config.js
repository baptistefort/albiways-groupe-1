/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Anton", "Impact", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      boxShadow: {
        neo: "10px 10px 0 #000",
        neosm: "5px 5px 0 #000",
        neolg: "16px 16px 0 #000",
        insetNeo: "inset 0 0 0 3px #000"
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        marqueeReverse: "marqueeReverse 24s linear infinite",
        floaty: "floaty 4s ease-in-out infinite",
        jitter: "jitter 0.34s steps(2, end) infinite",
        ticker: "ticker 18s linear infinite",
        scan: "scan 3.8s linear infinite",
        blink: "blink 1s steps(2, end) infinite",
        pop: "pop 0.45s cubic-bezier(.2,1.35,.24,1)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        jitter: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(1px, -1px) rotate(-0.6deg)" }
        },
        ticker: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" }
        },
        scan: {
          "0%": { transform: "translateY(-110%)" },
          "100%": { transform: "translateY(110%)" }
        },
        blink: {
          "0%, 45%": { opacity: "1" },
          "46%, 100%": { opacity: "0" }
        },
        pop: {
          "0%": { transform: "scale(.94)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};
