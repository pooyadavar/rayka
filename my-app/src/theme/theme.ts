// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',

  palette: {
    primary: {
      main: '#2563eb', // رنگ آبی برند شما
      light: '#60a5fa',
    },
    secondary: {
      main: '#1e293b', // رنگ تیره اسلیت
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
    typography: {
    fontFamily: [
      'IRANSansX', 
      'Roboto', 
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: '20px',
        },
      },
    },
  },
});

export default theme;