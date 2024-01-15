import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    };
    *,::after, ::before {
        box-sizing: inherit;
    };

    body {
        margin: 0 auto;
        background: ${({ theme }) => theme.color.codGray};
        font-family: "Roboto", sans-serif;
    };
    
    body::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    body::-webkit-scrollbar-track {
        border-radius: 10px;
        background:red;
        /* background: ${({ theme }) => theme.color.blackOpacity01}; */
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: green;
        /* background: ${({ theme }) => theme.color.blackOpacity02}; */
    }
    body::-webkit-scrollbar-thumb:hover{
  	    background: blue;
  	    /* background: ${({ theme }) => theme.color.blackOpacity04}; */
    }
    body::-webkit-scrollbar-thumb:active{
  	    background: yellow;
  	    /* background: ${({ theme }) => theme.color.blackOpacity05}; */
    }
`;
