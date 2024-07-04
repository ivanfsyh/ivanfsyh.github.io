/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        container: {
            center: true,
            padding: '16px'
        },
        extend: {
            colors: {
                primary: '#ABC270',
                secondary: '#FEC868',
                info: '#FDA769',
                dark: '#473C33',
            },
            screens: {
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
};