import React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  filtersSelector,
  gallerySelector
} from '../../../../../store/selectors/selectors';
import _uniq from 'lodash/uniq';
import { filterPhotosAction } from '../../../../../store/async-actions/filter-photos.action';

export const NameFilter: React.FC = () => {
  const filters = useSelector(filtersSelector);
  const gallery = useSelector(gallerySelector);
  const dispatch = useDispatch();

  const authors = _uniq(gallery.map((photoInfo) => photoInfo.author));

  const authorHandler = (author: string): void => {
    dispatch(filterPhotosAction({ ...filters, author: author }));
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={authors}
      sx={{ width: 300 }}
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
