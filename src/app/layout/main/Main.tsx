import React from 'react';
import styled from 'styled-components';

import { Gallery } from '../../components/main-content/Gallery';
import { Map } from '../../components/main-content/Map';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
  flex: 1;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Main: React.FC = () => {
  return (
    <MainContainer>
      <Gallery />
      <Map />
    </MainContainer>
  );
};
