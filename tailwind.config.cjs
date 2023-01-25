/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				VeryDarkGray: "hsl(0, 0%, 17%)",
				DarkGray: "hsl(0, 0%, 59%)",
			},
			fontFamily: {
				Rubik: ["Rubik", "sans-serif"],
			},
		},
	},
	plugins: [],
};
