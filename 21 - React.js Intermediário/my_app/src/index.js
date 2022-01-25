import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepPurple, amber } from '@material-ui/core/colors';

import App from './App';
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[700]
    },
    secondary: {
      main: amber[600]
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

