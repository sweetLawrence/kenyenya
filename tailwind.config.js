/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary': {
                    DEFAULT: '#074F7E',
                    100: '#011019',
                    200: '#031f32',
                    300: '#042f4b',
                    400: '#063e64',
                    500: '#074f7e',
                    600: '#0b7bc5',
                    700: '#29a2f3',
                    800: '#70c1f7',
                    900: '#b8e0fb'
                },
                'secondary': {
                    DEFAULT: '#439a86',
                    100: '#0d1e1a',
                    200: '#1b3d35',
                    300: '#285b4f',
                    400: '#367a6a',
                    500: '#439a86',
                    600: '#5db8a3',
                    700: '#86caba',
                    800: '#aedcd1',
                    900: '#d7ede8'
                },
                'tertiary': {
                    DEFAULT: '#E2D9DA',
                    100: '#322728',
                    200: '#644d50',
                    300: '#957579',
                    400: '#bca7aa',
                    500: '#e2d9da',
                    600: '#e8e1e2',
                    700: '#eee9e9',
                    800: '#f3f0f0',
                    900: '#f9f8f8'
                },
                'secondary-green': {
                    DEFAULT: '#80ded9',
                    100: '#0e3836',
                    200: '#1d706c',
                    300: '#2ba8a2',
                    400: '#49d0c9',
                    500: '#80ded9',
                    600: '#9ae5e1',
                    700: '#b4ece9',
                    800: '#cdf2f0',
                    900: '#e6f9f8'
                },
                'primary-blue': {
                    DEFAULT: '#155A85',
                    100: '#04121a',
                    200: '#082435',
                    300: '#0c364f',
                    400: '#11486a',
                    500: '#155a85',
                    600: '#1e83c2',
                    700: '#46a6e2',
                    800: '#83c4ec',
                    900: '#c1e1f5'
                },
                'reddish': {
                    DEFAULT: "#ff4870",
                    '50': '#fff5fb',
                    '100': '#ffedf7',
                    '200': '#ffd1e9',
                    '300': '#ffb5d6',
                    '400': '#ff80aa',
                    '500': '#ff4870',
                    '600': '#e6395c',
                    '700': '#bf2844',
                    '800': '#991a2f',
                    '900': '#730f1e',
                    '950': '#4a060f'
                }
            }
        },
    },
    plugins: [],
}

