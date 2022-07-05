import React from 'react';
import styled from 'styled-components';
import { NameFilter } from './filters/NameFilter';
import { SpeciesFilter } from './filters/SpeciesFilter';
import { RatingFilter } from './filters/RatingFilter';
import { ProvinceFilter } from './filters/ProvinceFilter';

export const FilterContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background-color: whitesmoke;
  height: auto;

  input,
  select {
    width: 250px;
    height: 30px;
    font-size: 16px;
  }
`;

export const Filter: React.FC = () => {
  return (
    <FilterContainer>
      <p>Filter by:</p>
      <RatingFilter />
      <ProvinceFilter />
      <NameFilter />
      <SpeciesFilter />
    </FilterContainer>
  );
};

// create useFilters Hook and keep there all the filters
