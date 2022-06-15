import React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import {
  filtersSelector,
  gallerySelector
} from '../../../../../store/selectors/selectors';
import { filterPhotosAction } from '../../../../../store/async-actions/filter-photos.action';
import { useDispatch, useSelector } from 'react-redux';
import _uniq from 'lodash/uniq';

export const SpeciesFilter: React.FC = () => {
  const filters = useSelector(filtersSelector);
  const gallery = useSelector(gallerySelector);
  const dispatch = useDispatch();

  const speciesArray = _uniq(gallery.map((photoInfo) => photoInfo.species));

  const authorHandler = (species: string): void => {
    dispatch(filterPhotosAction({ ...filters, species: species }));
  };

  return (
    <Autocomplete
      disablePortal
      id="species-combo-box-demo"
      options={speciesArray}
      autoHighlight
      sx={{ width: 300 }}
      onChange={(event, value): void => {
        const species = value as string;
        authorHandler(species);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Name of species..." />
      )}
    />
  );
};
