import React from 'react';
import styled from 'styled-components';

export const FilterContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background-color: whitesmoke;
  height: 50px;

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
      <select>
        <option disabled selected>
          province...
        </option>
        <option>Pomorskie</option>
      </select>
      <input type="text" placeholder="photographer name..." />
      <input type="text" placeholder="name of species..." />
      <select>
        <option disabled selected>
          rating...
        </option>
        <option>5 stars</option>
        <option>4 stars</option>
        <option>3 stars</option>
        <option>2 stars</option>
        <option>1 stars</option>
      </select>
    </FilterContainer>
  );
};
