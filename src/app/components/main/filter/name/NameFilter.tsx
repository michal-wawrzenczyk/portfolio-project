import React from 'react';
import { TextField, Autocomplete } from '@mui/material';

// export const NameFilter: React.FC = () => {
//   return <input type="text" placeholder="photographer name..." />;
// };

// here an array of author names of DUMMY_PHOTOS (mock.ts) should be
// how to extract the names from DUMMY_PHOTOS and create an array of names ???
const photographersNames = ['Michał Wawrzeńczyk', 'Grzegorz Długosz'];

export const NameFilter: React.FC = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={photographersNames}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Photographer name" />
      )}
    />
  );
};
