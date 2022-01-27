import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepPurple, amber } from '@material-ui/core/colors';

import App from './App';
import './index.css'
import { AuthProvider } from './state/auth';

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
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

