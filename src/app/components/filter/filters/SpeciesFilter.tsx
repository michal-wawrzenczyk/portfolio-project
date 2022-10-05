import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { gallerySelectors } from '../../../../store/selectors/selectors';
import { filterPhotosAction } from '../../../../store/async-actions/filter-photos.action';
import { useDispatch, useSelector } from 'react-redux';
import _uniq from 'lodash/uniq';
import { queryStr } from '../../../../utilities/utilsFunctions';
import { useNavigate } from 'react-router-dom';


export const SpeciesFilter: React.FC = () => {
  const { filtersSelector, gallerySelector } = gallerySelectors;
  const navigate = useNavigate();
  const filters = useSelector(filtersSelector);
  const gallery = useSelector(gallerySelector);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState('');

  const speciesArray = _uniq(gallery.map((photoInfo) => photoInfo.species));

  // const authorHandler = (species: string): void => {
  //   dispatch(filterPhotosAction({ ...filters, species: species }));
  // };

  // {
  //   React.ReactNode
  //   React.ReactElement
  //   React.ReactChild
  // }

  const speciesHandler = (speciesName: string): void => {
    setSelectedValue(speciesName);
    navigate(queryStr({ ...filters, species: speciesName }));
    dispatch(filterPhotosAction({ ...filters, species: speciesName }));
  };

  return (
    <Autocomplete
      disablePortal
      id="species-combo-box-demo"
      value={selectedValue}
      options={speciesArray}
      autoHighlight
      onChange={(event, value): void => {
        const species = value as string;
        speciesHandler(species);
      }}
      renderInput={(params): React.ReactNode => (
        <TextField {...params} label="Name of species..." />
      )}
    />
  );
};
