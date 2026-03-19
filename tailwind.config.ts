import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#E4F9F8',
          700: '#1A7A78',
        },
        navy: {
          300: '#7A9DB0',
          500: '#3D5A6C',
          800: '#1E2D38',
        },
        surface: {
          50: '#F4F5F6',
          100: '#EAECEE',
        },
        gray: {
          200: '#E2E5E8',
          300: '#CDD2D8',
          400: '#A0AEBA',
          500: '#738290',
        },
        green: {
          50: '#EDF8E2',
          500: '#4A9B1F',
          600: '#3A7B18',
        },
        red: {
          50: '#FEF1F0',
          500: '#DC4040',
        },
        yellow: {
          50: '#FFFCE0',
          700: '#9A6C00',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        kadwa: ['Kadwa', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}

export default config
