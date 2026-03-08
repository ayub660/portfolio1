/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#00C2FF",
                "background-light": "#f8fafc",
                "background-dark": "#0f172a",
                "surface-light": "#ffffff",
                "surface-dark": "#1e293b",
                "text-main-light": "#1e293b",
                "text-main-dark": "#f1f5f9",
                "text-muted-light": "#64748b",
                "text-muted-dark": "#94a3b8",
            },
            fontFamily: {
                display: ["Montserrat", "sans-serif"],
                body: ["Poppins", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            boxShadow: {
                'neon': '0 0 20px rgba(0, 194, 255, 0.15)',
                'card': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}