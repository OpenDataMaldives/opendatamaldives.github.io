/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
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

