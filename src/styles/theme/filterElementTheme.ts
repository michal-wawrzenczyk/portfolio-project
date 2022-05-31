import { createTheme } from '@mui/material/styles';

export const filterElementTheme = createTheme({
  components: {
    // Name of the component
    MuiSelect: {
      defaultProps: {
        // The props to change the default for.
        autoWidth: true
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearOnEscape: true
      }
    }
  }
});
