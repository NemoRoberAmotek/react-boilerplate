import { ThemeOptions, createTheme } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#cf4a48'
    },
    secondary: {
      main: '#308f8f'
    }
  },
  typography: {
    h1: {
      fontWeight: 600
    },
    h2: {
      fontWeight: 600
    },
    h3: {
      fontWeight: 600
    },
    h4: {
      fontWeight: 600
    },
    h5: {
      fontWeight: 600
    },
    h6: {
      fontWeight: 600
    }
  }
}

export const theme = createTheme(themeOptions)
