/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                lila: {
                    100: "#B75F9F",
                    400: "#8C1D82",
                    900: "#63257E",
                },
                amarillo: "#FFD000",
            },
            fontFamily: {
                body: "Montserrat",
            },
            animation: {
                "spin-slow": "spin 10s linear infinite",
            },
        },
    },
    plugins: [],
}
