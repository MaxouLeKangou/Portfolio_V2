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
            sm: "0.75rem",
            base: "0.875rem",
            lg: "1.5rem",
            xl: "2.5rem",
            "2xl": "4.375rem",
        },
        letterSpacing: {
            normal: '0',
            first: '0.125rem',
            second: '0.313rem',
        },

        extend: {},
    },
    plugins: [],
};
