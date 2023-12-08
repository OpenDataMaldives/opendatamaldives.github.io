/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["RedditSans-regular", "Inter", ...defaultTheme.fontFamily.sans],
        'opdmv-bold': ['RedditSans-bold', 'sans-serif'],
        'opdmv-italic': ['RedditSans-italic', 'sans-serif'],
        'opdmv-light': ['RedditSans-light', 'sans-serif'],
        'opdmv-regular': ['RedditSans-regular', 'sans-serif'],
        'opdmv-semi-bold': ['RedditSans-semi-bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

