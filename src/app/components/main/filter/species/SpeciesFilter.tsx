import React from 'react';
import TextField from '@mui/material/TextField';
import {
  filtersSelector,
  gallerySelector
} from '../../../../../store/selectors/selectors';
import { filterPhotosAction } from '../../../../../store/async-actions/filter-photos.action';
import { useDispatch, useSelector } from 'react-redux';
import _uniq from 'lodash/uniq';
import { Autocomplete } from '@mui/material';

export const SpeciesFilter: React.FC = () => {
  const filters = useSelector(filtersSelector);
  const gallery = useSelector(gallerySelector);
  const dispatch = useDispatch();

  const speciesArray = _uniq(gallery.map((photoInfo) => photoInfo.species));
  console.log('species', speciesArray);

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
        <TextField {...params} label="Name of species..." variant="standard" />
      )}
    />
  );
};

// export const SpeciesFilter: React.FC = () => {
//   return <input type="text" placeholder="name of species..." />;
// };
