import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material';

export const RatingFilter: React.FC = () => {
  const [rating, setRating] = useState('');

  return (
    <FormControl>
      <InputLabel id="rating-select-helper-label">Rating</InputLabel>
      <Select
        labelId="rating-select-helper-label"
        id="rating-select"
        label="rating"
        value={rating}
        onChange={(event): void => setRating(event.target.value)}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={5}>5 stars</MenuItem>
        <MenuItem value={4}>4 stars</MenuItem>
        <MenuItem value={3}>3 stars</MenuItem>
        <MenuItem value={2}>2 stars</MenuItem>
        <MenuItem value={1}>1 stars</MenuItem>
      </Select>
      <FormHelperText>Select rating</FormHelperText>
    </FormControl>
  );
};

// <select>
//     <option disabled selected>
//         rating...
//     </option>
//     <option>5 stars</option>
//     <option>4 stars</option>
//     <option>3 stars</option>
//     <option>2 stars</option>
//     <option>1 stars</option>
// </select>
