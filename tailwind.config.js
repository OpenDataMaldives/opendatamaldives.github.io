/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["RedditSans-regular", "Inter", ...defaultTheme.fontFamily.sans],
        'opdmv-bold': ['opdmv-bold', 'sans-serif'],
        // 'opdmv-bold': ['RedditSans-bold', 'sans-serif'],
        'opdmv-italic': ['opdmv-italic', 'sans-serif'],
        'opdmv-light': ['opdmv-light', 'sans-serif'],
        'opdmv-regular': ['opdmv-regular', 'sans-serif'],
        'opdmv-semi-bold': ['opdmv-semi-bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

