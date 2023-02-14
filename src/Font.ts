import { createGlobalStyle } from "styled-components";
import Inter from './fonts/Inter-VariableFont_slnt,wght.ttf';

export const Fonts = createGlobalStyle`

  @font-face {
    font-family: 'Inter', sans-serif;
    src: url(${Inter});
  }
`