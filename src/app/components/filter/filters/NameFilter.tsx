import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import _uniq from 'lodash/uniq';
import { filterPhotosAction } from '../../../../store/async-actions/filter-photos.action';
import { gallerySelectors } from '../../../../store/selectors/selectors';
import { queryStr } from '../../../../utilities/utilsFunctions';
import { useNavigate } from 'react-router-dom';


export const NameFilter: React.FC = () => {
  // gallerySelector to nie selektor, tylko obiekt, który trzyma listę selektorów - jak tutaj uzyć useSelector?
  const { filtersSelector, gallerySelector } = gallerySelectors;
  const filters = useSelector(filtersSelector);
  const gallery = useSelector(gallerySelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const authors = _uniq(gallery.map((photoInfo) => photoInfo.author));
  const [selectedValue, setSelectedValue] = useState('');

  const authorHandler = (author: string): void => {
    dispatch(filterPhotosAction({ ...filters, author: author }));
    setSelectedValue(author);
    navigate(queryStr({ ...filters, author: author }));
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={authors}
      onChange={(event, value): void => {
        const author = value as string;
        authorHandler(author);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Photographer name" />
      )}
    />
  );
};
