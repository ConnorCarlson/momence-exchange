import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#6643f0',
      },
      secondary: {
        main: grey[50],
        dark: grey[600],
      },
      divider: grey[200],
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    }
  });

  export const spacing = '16px';

