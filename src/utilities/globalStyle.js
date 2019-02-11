import { createGlobalStyle } from 'styled-components'
import { black } from './colors'

export const GlobalStyle = createGlobalStyle`

html {
  font: 112.5%/1.45em  'Raleway', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  color: ${black};

  *, *:before, *:after {
    box-sizing: inherit;
  }
}
body {
  margin: 0;

}

 h1, h2 {
   font-family: Montserrat, sans-serif;
   margin-top: 0;
   padding: .5rem;
 }

 a {
 }

`
