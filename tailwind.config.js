module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        72: "18rem",
        80: "20rem",
      },
      padding: {
        "5/6": "83.33333%",
      },
    },
  }, 
  plugins: [require("@tailwindcss/forms")],
};
