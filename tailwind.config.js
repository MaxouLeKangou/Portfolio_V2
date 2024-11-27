/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./slices/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            anton: ['Anton', 'sans-serif'],
        },
        colors: {
            primary: '#4BE36F',
            background: {
                100: '#0D0D0D',
                200: '#191919',
            },
            white: {
                100: '#D8DFEA',
                200: '#AAAFB8',
                300: '#747B80',
            },
        },
        fontSize: {
            sm: '0.75rem',
            base: '0.875rem',
            lg: '1.5rem',
            xl: '2.5rem',
            '2xl': '4.375rem',
            'desk-sm': '1.125rem',
            'desk-base': '1.25rem',
            'desk-lg': '3.75rem',
            'desk-xl': '5rem',
            'desk-2xl': '8.75rem',
        },
        letterSpacing: {
            normal: '0',
            first: '0.125rem',
            second: '0.313rem',
        },
        lineHeight: {
            'main': '3.75rem',
            'current': '1.875rem',
            'desk-main': '7.5rem',
            'desk-current': '4.57rem',
        },

        screens: {
            sm: "480px",
            md: "720px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
        },

        extend: {},
    },
    plugins: [],
};
