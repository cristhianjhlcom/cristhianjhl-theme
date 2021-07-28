import { Global, css } from "frontity";
import normalize from "./libs/css/normalize.css";

export function Normalize () {
    return (
        <Global
            styles={
                css(normalize)
            }
        />
    )
}

export function GlobalStyle () {
    return (
        <Global 
            styles={
                css`
                    :root {
                        --fontFamilyTitle: "Poppins", sans-serif;
                        --fontFamilyText: "Source Sans Pro", sans-serif;
                        --white: #ffffff;
                        --black: #111;
                        --gray: #a4a4a4;
                        --blueGray: #f5faff;
                        --darkGray: #525252;
                        --lightGray: #e8e8e8;
                        --primaryColor: #006ab0;
                        --primaryColorHover: #025e9a;
                        --secondaryColor: #213965;
                        --accentColor: #00eda4;
                        --linkColor: #24c5fd;
                        --textGray: #92a1b0;
                        --whatsapp: #21ac55;
                        --green: #4caf50;
                        --red: #f44336;
                        --rounded: 0.25rem;

                        --mobileDevice: 26.25rem;
                        --tableDevice: 48rem;
                        --desktopDevice: 67.5rem;
                    }

                    * {
                        font-display: swap;
                    }

                    html {
                        font-size: 16px;
                    }

                    body {
                        font-family: var(--fontFamilyText);
                        font-size: 16px;
                        background-color: var(--blueGray);
                    }

                    h1, h2, h3, h4, h5, h6 {
                        font-family: var(--fontFamilyTitle);
                    }

                    @media screen and (max-width: 960px) {
                        body {
                            margin-top: 100px;
                        }
                    }
                `
            }
        />
    )
}