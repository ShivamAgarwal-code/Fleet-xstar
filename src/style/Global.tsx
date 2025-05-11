import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.3s ease;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  .sc-laRPJI.bRIDge
  {
    display: none !important;
  }

  .kYzRJA.koGMaV {
  color: #3EB489; /* Mint green */
}
.sc-gsTCUz.liVWNQ{
color: #3EB489; }


`

export default GlobalStyle
