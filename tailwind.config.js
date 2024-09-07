import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", "./src/**/*.{html,js}"],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [nextui()],
};
