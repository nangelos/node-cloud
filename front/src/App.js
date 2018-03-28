import React, { Component } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { theme } from './common/theme'
import IndexPage from './components/IndexPage'

injectGlobal`
  body {
   font-family: 'IBM Plex Serif', serif;
   margin: 0;
   padding: 0;
   background: #333;
}
`
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <IndexPage />
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export default App
