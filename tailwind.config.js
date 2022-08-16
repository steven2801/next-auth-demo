const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Raleway", ...fontFamily.sans],
				secondary: ["Open Sans", ...fontFamily.sans],
			},
			colors: {
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				bg: "rgb(var(--color-bg) / <alpha-value>)",
				secondary: "rgb(var(--color-secondary) / <alpha-value>)",
				error: "rgb(var(--color-error) / <alpha-value>)",
				success: "rgb(var(--color-success) / <alpha-value>)",
			},
			keyframes: {
				shimmer: {
					"100%": {
						transform: "translateX(100%)",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
