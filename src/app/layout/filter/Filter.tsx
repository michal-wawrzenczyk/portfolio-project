import React from 'react';
import styled from 'styled-components';

export const FilterContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background-color: whitesmoke;
  height: 75px;
`;

export const Filter: React.FC = () => {
  return (
    <FilterContainer>
      <p>Filter</p>
    </FilterContainer>
  );
};
