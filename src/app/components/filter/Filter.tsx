import React from 'react';
import styled from 'styled-components';
import { NameFilter } from './filters/NameFilter';
import { SpeciesFilter } from './filters/SpeciesFilter';
import { RatingFilter } from './filters/RatingFilter';
import { ProvinceFilter } from './filters/ProvinceFilter';
import { Grid } from '@mui/material';

export const FilterContainer = styled.nav`
  padding: 0 1rem;
`;

export const Filter: React.FC = () => {
  return (
    <FilterContainer>
      <Grid
        container
        display={'flex'}
        flexWrap={'nowrap'}
        gap={'5px'}
        alignItems={'center'}>
        <Grid item xs={3}>
          <RatingFilter />
        </Grid>
        <Grid item xs={3}>
          <ProvinceFilter />
        </Grid>
        <Grid item xs={3}>
          <NameFilter />
        </Grid>
        <Grid item xs={3}>
          <SpeciesFilter />
        </Grid>
      </Grid>
    </FilterContainer>
  );
};

// create useFilters Hook and keep there all the filters
