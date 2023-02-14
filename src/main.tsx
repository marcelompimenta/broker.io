import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { Fonts } from './Font'
import { GlobalStyle } from './Global.style'
import Theme from './Theme.style'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme} >
      <GlobalStyle />
      <Fonts />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
