import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material';
// import { provinces } from './index';

export const ProvinceFilter: React.FC = () => {
  const [province, setProvince] = useState('');

  return (
    <FormControl>
      <InputLabel id="province-select-helper-label">Province</InputLabel>
      <Select
        labelId="province-select-helper-label"
        id="province-select"
        label="province"
        value={province}
        onChange={(event): void => setProvince(event.target.value)}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {/*map function*/}
        <MenuItem>dolnośląskie</MenuItem>
      </Select>
      <FormHelperText>Select province</FormHelperText>
    </FormControl>
  );
};
