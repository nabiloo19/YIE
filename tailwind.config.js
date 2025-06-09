/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,json}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'yie': {
          red: '#ba4342',
          dark: '#3a393c',
          light: '#fefefe',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'arabic': ['Noto Kufi Arabic', 'sans-serif'],
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee var(--duration) linear infinite',
        'blob': 'blob 7s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'animation-delay-2000': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'blob': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
          },
          '33%': {
            transform: 'translate(50px, -80px) scale(1.2) rotate(120deg)',
          },
          '66%': {
            transform: 'translate(-40px, 40px) scale(0.8) rotate(240deg)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1) rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};