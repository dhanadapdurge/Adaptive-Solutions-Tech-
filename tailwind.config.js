/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#F8FAFC',
        'midnight': '#F1F5F9',
        'cosmic': '#E2E8F0',
        'electric-cyan': '#4F46E5', // Electric Indigo
        'aurora-teal': '#0D9488',   // sophisticated Teal/Mint
        'ice-blue': '#EFF6FF',
        'soft-white': '#FFFFFF',
        blue: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c084fc',
          400: '#a855f7',
          500: '#6366f1',
          600: '#4f46e5', // Electric Indigo
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        cyan: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf', // Teal/Mint light
          500: '#0d9488', // Teal/Mint main
          600: '#0f766e', // Teal/Mint hover
          700: '#115e59',
          800: '#134e4a',
          900: '#115e59',
        },
        slate: {
          50: '#f8fafc', // Platinum Gray background
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569', // Body text color #475569
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // Deep Slate Navy
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        outfit: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
