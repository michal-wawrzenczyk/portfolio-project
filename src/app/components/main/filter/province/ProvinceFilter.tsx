import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Provinces, provinces } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { filtersSelector } from '../../../../../store/selectors/selectors';
import { filterPhotosAction } from '../../../../../store/async-actions/filter-photos.action';

export const ProvinceFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);
  const [province, setProvince] = useState('');

  // zastanowic sie nad przypisaniem enuma zamiast stringa
  const provinceHandler = (province: Provinces): void => {
    setProvince(province);
    dispatch(filterPhotosAction({ ...filters, province }));
  };

  return (
    <FormControl>
      <InputLabel id="province-select-helper-label">Province</InputLabel>
      <Select
        labelId="province-select-helper-label"
        id="province-select"
        label="province"
        value={province}
        sx={{ width: 220 }}
        onChange={(event): void => {
          const province = event.target.value as Provinces;
          provinceHandler(province);
        }}>
        <MenuItem value={''}>None</MenuItem>
        {provinces.map((province) => (
          <MenuItem value={province}>{province}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
