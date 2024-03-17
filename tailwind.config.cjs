/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/resources/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        "soluter-purple": {
          500: "#7B3483",
        },
        "soluter-blue": {
          500: "#1C5BA7",
        },
        "soluter-green": {
          500: "#41A46C",
        },
        "soluter-orange": {
          500: "#EE7838",
        },
        "soluter-red": {
          500: "#C22C3E",
        },
        "soluter-gray": {
          500: "#ececec",
        },
        "ao-black": {
          500: "#010101",
        },
        "ao-dark-blue": {
          500: "#102261",
        },
        "ao-blue": {
          500: "#1D3BA6",
        },
        "ao-dark-azure": {
          500: "#5B78DC",
        },
        "ao-azure": {
          500: "#9CA9D7",
        },
        "ao-light-azure": {
          500: "#9BF4FF",
        },
        "ao-white": {
          500: "#F7F8FC",
        },
        "ao-hover-blue": {
          500: "#130D5B",
        },
      },
    },
  },
};
