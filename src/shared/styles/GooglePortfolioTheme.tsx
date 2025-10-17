import { createTheme } from "@mui/material";

export const GoogleLightPortfolioTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1967d2",
            contrastText: "#fff"
        },
        secondary: {
            main: "#5f6368",
            contrastText: "#fff"
        },
        text: {
            primary: "#202124",
            secondary: "#5f6368",
            disabled: "#9aa0a6"
        },
        background: {
            default: "linear-gradient(45deg, rgba(206, 223, 237, 1) 0%, rgba(255, 255, 255, 1) 22%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 78%, rgba(206, 223, 237, 1) 100%)",
            paper: "#ffffff"
        }
    },
})