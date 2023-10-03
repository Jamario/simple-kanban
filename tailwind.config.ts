import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "theme-purple": {
                    DEFAULT: "#635FC7",
                    light: "#A8A4FF",
                },
                "theme-red": {
                    DEFAULT: "#EA5555",
                    light: "#FF9898",
                },
                "theme-black": {
                    DEFAULT: "#000112",
                    100: "#3E3F4E",
                    200: "#2B2C37",
                    300: "#20212C",
                },
                "theme-gray": {
                    DEFAULT: "#828FA3",
                    100: "#F4F7FD",
                    200: "#E4EBFA",
                },
            },
        },
    },
    plugins: [],
};
export default config;
