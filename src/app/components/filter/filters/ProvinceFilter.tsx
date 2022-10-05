import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Province, provinces } from './province';
import { useDispatch, useSelector } from 'react-redux';
import { gallerySelectors } from '../../../../store/selectors/selectors';
import { filterPhotosAction } from '../../../../store/async-actions/filter-photos.action';
import { useLocation, useNavigate } from 'react-router-dom';
import { queryStr } from '../../../../utilities/utilsFunctions';

export const ProvinceFilter: React.FC = () => {
  const { filtersSelector } = gallerySelectors;
  const navigate = useNavigate();

  const { search } = useLocation();

  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);
  const [province, setProvince] = useState('');

  // enum instead of string
  const provinceHandler = (provinceName: Province): void => {
    setProvince(provinceName);
    navigate(queryStr({ ...filters, province: provinceName }));
    dispatch(filterPhotosAction({ ...filters, province: provinceName }));
  };

  // const useQuery = () => {
  //   const { search } = useLocation();

  //   return React.useMemo(() => new URLSearchParams(search), [search]);
  // };

  // useEffect(() => {
  //   queryStr(filters);
  // }, [filters]);

  // let query = useQuery();

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id="province-select-helper-label">Province</InputLabel>
      <Select
        labelId="province-select-helper-label"
        id="province-select"
        label="province"
        value={province}
        onChange={(event): void => {
          const provinceName = event.target.value as Province;
          provinceHandler(provinceName);
        }}>
        <MenuItem value={''}>None</MenuItem>
        {provinces.map((provinceName, index) => (
          <MenuItem key={`${provinceName}-${index}`} value={provinceName}>
            {provinceName}
          </MenuItem>
        ))}
      </Select>
      {/* <div>
        {query.get('province') ? (
          <h3>
            The <code>{query.get('province')}</code> in the query string is
            &quot;{query.get('province')}
            &quot;
          </h3>
        ) : (
          <h3>There is no {query.get('province')} in the query string</h3>
        )}
      </div> */}
    </FormControl>
  );
};

// when mapping elements, key must be defined
// if drag and drop function - then id is better, than index
