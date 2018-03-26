import React, { Component } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { theme } from './common/theme'

injectGlobal`
  body {
   font-family: 'IBM Plex Serif', serif;
   margin: 0;
   padding: 0;
}
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <header style={{ textAlign: 'center' }}>
            <h1>Welcome to the cloud </h1>
          </header>
          <p>please login to view your files.</p>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
