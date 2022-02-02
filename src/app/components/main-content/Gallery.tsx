import React from 'react';
import styled from 'styled-components';

export const GalleryContainer = styled.div`
  width: 50%;
  background-color: whitesmoke;
  text-align: center;
  height: 100%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Gallery: React.FC = () => {
  return <GalleryContainer>Gallery</GalleryContainer>;
};
