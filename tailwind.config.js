/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./public/index.html",  ],
  theme: {
    extend: {
      width: {
        "100vw": "100vw",
        "90vw": "90vw",
        "80vw": "80vw",
        "70vw": "70vw",
        "60vw": "60vw",
        "50vw": "50vw",
        
        "45vw": "45vw",
        "40vw": "40vw",
        "35vw": "35vw",
        "30vw": "30vw",
        "25vw": "25vw",
        "20vw": "20vw",
        "15vw": "15vw",

        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "35vh": "35vh",

        '4': '4px',
        '8': '8px',
        '10': '10px',
        '20': '20px',
        '24': '24px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',

      },
      flexGrow: {
        1: 2,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
}
