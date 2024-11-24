/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            anton: ["Anton", "sans-serif"],
        },
        colors: {
            primary: "#4BE36F",
            background: {
                100: "#0D0D0D",
                200: "#191919",
            },
            white: {
                100: "#D8DFEA",
                200: "#AAAFB8",
                300: "#747B80",
            },
        },
        fontSize: {
            sm: "1.2rem",
            base: "1.4rem",
            lg: "2.4rem",
            xl: "4rem",
            "2xl": "7rem",
        },
        letterSpacing: {
            normal: '0',
            first: '.2rem',
            second: '.5rem',
        },

        extend: {},
    },
    plugins: [],
};
