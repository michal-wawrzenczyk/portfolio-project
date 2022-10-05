import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterPhotosAction } from '../../../../store/async-actions/filter-photos.action';
import { queryStr } from '../../../../utilities/utilsFunctions';
import { gallerySelectors } from '../../../../store/selectors/selectors';

export const RatingFilter: React.FC = () => {
  const [rating, setRating] = useState(null);
  const { filtersSelector } = gallerySelectors;
  const filters = useSelector(filtersSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ratingFilterHandler = (rating: number): void => {
    setRating(rating);
    // update url param
    navigate(queryStr({ ...filters, rating: rating }));
    // update store filters
    dispatch(filterPhotosAction({ ...filters, rating: rating }));
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id="rating-select-helper-label">Rating</InputLabel>
      <Select
        autoWidth={false}
        labelId="rating-select-helper-label"
        id="rating-select"
        label="rating"
        value={rating}
        onChange={(event): void => {
          // TO-DO
          const ratingValue = event.target.value as number || event.target.value as null;
          // setRating(event.target.value)
          ratingFilterHandler(event.target.value as (number || null));
        }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={5}>5 stars</MenuItem>
        <MenuItem value={4}>4 stars</MenuItem>
        <MenuItem value={3}>3 stars</MenuItem>
        <MenuItem value={2}>2 stars</MenuItem>
        <MenuItem value={1}>1 stars</MenuItem>
      </Select>
    </FormControl>
  );
};
