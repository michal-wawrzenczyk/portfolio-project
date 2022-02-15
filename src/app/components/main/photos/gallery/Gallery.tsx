import React from 'react';
import styled from 'styled-components';
import { PhotoList } from './PhotoList';
import { DUMMY_PHOTOS } from '../../../mock/mock';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: whitesmoke;

  h3 {
    margin-left: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Gallery: React.FC = () => {
  return (
    <GalleryContainer>
      <h3>All pictures:</h3>
      <PhotoList photos={DUMMY_PHOTOS} />
    </GalleryContainer>
  );
};
