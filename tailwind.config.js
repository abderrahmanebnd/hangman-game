/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "5xl": "3rem",
      },
      fontFamily: {
        "mouse-memoirs": ["Mouse Memoirs", "sans-serif"],
        // You can add other font families here if needed
      },
      backgroundImage: {
        "mobile-bg": "url('/assets/images/background-mobile.svg')",
        "tablet-bg": "url('/assets/images/background-tablet.svg')",
        "desktop-bg": "url('/assets/images/background-desktop.svg')",
        "mobile-playBg": "url('/assets/images/hman_mobile-play-bg.png')",
        "tablet-playBg": "url('/assets/images/hman_tablet-play-bg.svg')",
        "desktop-playBg": "url('/assets/images/hman_desktop-play-bg.svg')",
      },
      backgroundColor: {
        "clr-bg": "#2463ff",
        "clr-highlight": "#3c74ff",
      },
      boxShadow: {
        "primary-shadow":
          "inset 0 -0.125rem 0 0.1875rem #140e66, inset 0 0.0625rem 0 0.375rem #3c74ff ",
      },
    },
  },
  plugins: [],
};

// --clr-bg: #2463ff;
//   --clr-shadow: #140e66;
//   --clr-highlight: #3c74ff;
