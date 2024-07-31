/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['Blinker'],
      bold: ['BlinkerBold'],
    },
    extend: {
      colors: {
        footerTextColor: '#9bc25b',
        footerSubscribeBg: '#ff5722',
        footerBoxColor: '#727272',
        footerProfileNameColor: '#000000',
        footerBackgroundColor: '#f9f9f9',
        footerLinkedinHoverColor: '#0072B1',
      },
      fontSize: {
        '18px': '18px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
