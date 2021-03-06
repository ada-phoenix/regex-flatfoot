import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#cfd8dc',
      light: '#ffffff',
      dark: '#9ea7aa'
    },
    secondary: {
      main: '#7cb342',
      light: '#aee571',
      dark: '#4b830d'
    },
    text: {
      primary: '#212121',
      secondary: '#fafafa'
    }
  }
})

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
