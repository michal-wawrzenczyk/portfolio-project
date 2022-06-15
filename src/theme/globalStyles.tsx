import { GlobalStyles, useTheme } from '@mui/material';

export const GlobalStylesComponent = () => {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        html: {
          width: '100%',
          height: '100%'
        }
      }}
    />
  );
};
