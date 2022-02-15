import React from 'react';
import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 50%;
  background-color: whitesmoke;
  text-align: center;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Map: React.FC = () => {
  return <MapContainer>Map</MapContainer>;
};
