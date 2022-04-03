import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const SpeciesFilter: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Name of species..."
        variant="outlined"
      />
    </Box>
  );
};

// export const SpeciesFilter: React.FC = () => {
//   return <input type="text" placeholder="name of species..." />;
// };
