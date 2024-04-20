const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    safelist: ["dark"],
    prefix: "",

    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                bazarSoftPrimary: "#84D187",
                bazarPrimary: "#00B207",
                bazarHardPrimary: "#2C742F",
                bazarWarning: "#FF8A00",
                bazarDanger: "#EA4B48",
                bazarGray: {
                    50: "#F2F2F2",
                    100: "#E6E6E6",
                    200: "#CCCCCC",
                    300: "#B3B3B3",
                    400: "#999999",
                    500: "#808080",
                    600: "#666666",
                    700: "#4D4D4D",
                    800: "#333333",
                    900: "#1A1A1A",
                },
                bazarGreenGray: {
                    50: "#EDF2EE",
                    100: "#DAE5DA",
                    200: "#B4CCB4",
                    300: "#7A997C",
                    400: "#7A997C",
                    500: "#618062",
                    600: "#406B42",
                    700: "#2B572E",
                    800: "#173B1A",
                    900: "#002603",
                },
            },
            fontSize: {
                "display-regular": [
                    "4.5rem",
                    {
                        fontWeight: 400,
                        lineHeight: "120%",
                        letterSpacing: 0,
                    },
                ],
                "display-bold": [
                    "4.5rem",
                    {
                        fontWeight: 600,
                        lineHeight: "120%",
                        letterSpacing: 0,
                    },
                ],

                "heading-regular-1": [
                    "3.5rem",
                    {
                        fontWeight: 400,
                        lineHeight: "120%",
                    },
                ],
                "heading-regular-2": [
                    "3rem",
                    {
                        fontWeight: 400,
                        lineHeight: "120%",
                    },
                ],
                "heading-regular-3": [
                    "2.5rem",
                    {
                        fontWeight: 400,
                        lineHeight: "120%",
                    },
                ],
                "heading-regular-4": [
                    "2.25rem",
                    {
                        fontWeight: 400,
                        lineHeight: "120%",
                    },
                ],
                "heading-regular-5": [
                    "2rem",
                    {
                        fontWeight: 400,
                        lineHeight: "120%",
                    },
                ],
                "heading-bold-1": [
                    "3.5rem",
                    {
                        fontWeight: 600,
                        lineHeight: "120%",
                    },
                ],
                "heading-bold-2": [
                    "3rem",
                    {
                        fontWeight: 600,
                        lineHeight: "120%",
                    },
                ],
                "heading-bold-3": [
                    "2.5rem",
                    {
                        fontWeight: 600,
                        lineHeight: "120%",
                    },
                ],
                "heading-bold-4": [
                    "2.25rem",
                    {
                        fontWeight: 600,
                        lineHeight: "120%",
                    },
                ],
                "heading-bold-5": [
                    "2rem",
                    {
                        fontWeight: 600,
                        lineHeight: "120%",
                    },
                ],

                "body-regular-xxl": [
                    "1.5rem",
                    {
                        fontWeight: 400,
                        lineHeight: "150%",
                    },
                ],
                "body-medium-xxl": [
                    "1.5rem",
                    {
                        fontWeight: 500,
                        lineHeight: "150%",
                    },
                ],
                "body-semiBold-xxl": [
                    "1.5rem",
                    {
                        fontWeight: 600,
                        lineHeight: "150%",
                    },
                ],

                "body-regular-xl": [
                    "1.25rem",
                    {
                        fontWeight: 400,
                        lineHeight: "150%",
                    },
                ],
                "body-medium-xl": [
                    "1.25rem",
                    {
                        fontWeight: 500,
                        lineHeight: "150%",
                    },
                ],
                "body-semiBold-xl": [
                    "1.25rem",
                    {
                        fontWeight: 600,
                        lineHeight: "150%",
                    },
                ],

                "body-regular-l": [
                    "1.125rem",
                    {
                        fontWeight: 400,
                        lineHeight: "150%",
                    },
                ],
                "body-medium-l": [
                    "1.125rem",
                    {
                        fontWeight: 500,
                        lineHeight: "150%",
                    },
                ],
                "body-semiBold-l": [
                    "1.125rem",
                    {
                        fontWeight: 600,
                        lineHeight: "150%",
                    },
                ],

                "body-regular-m": [
                    "1rem",
                    {
                        fontWeight: 400,
                        lineHeight: "150%",
                    },
                ],
                "body-medium-m": [
                    "1rem",
                    {
                        fontWeight: 500,
                        lineHeight: "150%",
                    },
                ],
                "body-semiBold-m": [
                    "1rem",
                    {
                        fontWeight: 600,
                        lineHeight: "150%",
                    },
                ],

                "body-regular-s": [
                    "0.875rem",
                    {
                        fontWeight: 400,
                        lineHeight: "150%",
                    },
                ],
                "body-medium-s": [
                    "0.875rem",
                    {
                        fontWeight: 500,
                        lineHeight: "150%",
                    },
                ],
                "body-semiBold-s": [
                    "0.875rem",
                    {
                        fontWeight: 600,
                        lineHeight: "150%",
                    },
                ],

                "body-regular-t": [
                    "0.75rem",
                    {
                        fontWeight: 400,
                        lineHeight: "130%",
                    },
                ],
                "body-medium-t": [
                    "0.75rem",
                    {
                        fontWeight: 500,
                        lineHeight: "130%",
                    },
                ],
                "body-semiBold-t": [
                    "0.75rem",
                    {
                        fontWeight: 600,
                        lineHeight: "130%",
                    },
                ],
            },
            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "collapsible-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-collapsible-content-height)" },
                },
                "collapsible-up": {
                    from: { height: "var(--radix-collapsible-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "collapsible-down": "collapsible-down 0.2s ease-in-out",
                "collapsible-up": "collapsible-up 0.2s ease-in-out",
            },
        },
    },
    plugins: [animate],
};
