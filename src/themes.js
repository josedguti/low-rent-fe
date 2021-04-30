import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    linkcolor: '#000'
};

export const darkTheme = {
    body: "#000",
    fontColor: "#fff",
    linkcolor: '#fff',
};

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.body};
    }
    a {
        color: ${props => props.theme.linkcolor};
        text-decoration: none;
    }


`;