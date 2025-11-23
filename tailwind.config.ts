import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pastel B2B Design System
        primary: '#D9DCE1',      // Misty Stone
        secondary: '#EFEAE4',    // Warm Linen
        accent: '#B9C7B7',       // Powder Sage
        background: '#F8F7F5',   // Porcelain White
        muted: '#8C929B',        // Cool Slate
        dark: '#2D3748',         // Dark text
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(140, 146, 155, 0.08)',
        'hover': '0 8px 30px rgba(140, 146, 155, 0.12)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
