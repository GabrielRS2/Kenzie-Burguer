import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    button{
        cursor: pointer;
    }

`

export const ThemeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 107px;
    height: 40px;
    padding: 0px 20px;

    background: #27AE60;

    border: 2px solid #27AE60;
    color: #FFFFFF;
    border-radius: 8px;

    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
`