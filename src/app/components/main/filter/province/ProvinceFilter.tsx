import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Provinces, provinces } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { filtersSelector } from '../../../../../store/selectors/selectors';
import { filterPhotosAction } from '../../../../../store/async-actions/filter-photos.action';

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export const ProvinceFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);
  const [province, setProvince] = useState('');

  // enum instead of string
  const provinceHandler = (provinceName: Provinces): void => {
    setProvince(provinceName);
    dispatch(filterPhotosAction({ ...filters, province: provinceName }));
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
        MenuProps={MenuProps}
        onChange={(event): void => {
          const provinceName = event.target.value as Provinces;
          provinceHandler(provinceName);
        }}>
        <MenuItem value={''}>None</MenuItem>
        {provinces.map((provinceName) => (
          <MenuItem value={provinceName}>{provinceName}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
