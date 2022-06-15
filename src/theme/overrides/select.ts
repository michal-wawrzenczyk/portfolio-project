import { Components, Theme } from '@mui/material';

export function createSelect(theme: Theme): Pick<Components, 'MuiSelect'> {
  return {
    MuiSelect: {
      defaultProps: {
        // The props to change the default for.
        autoWidth: true,
        defaultOpen: false
      },
      styleOverrides: {
        // Name of the slot
        select: {
          // Some CSS
          padding: 5,
          fontSize: '1rem',
          width: '100px',
          height: '20px'
        }
      }
    }
  };
}
