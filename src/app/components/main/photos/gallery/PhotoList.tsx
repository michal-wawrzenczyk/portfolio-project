import React from 'react';
import styled from 'styled-components';
import { PhotoItem } from './PhotoItem';
import { PhotosData } from '../../../../types/photos-data';

const PhotoListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  overflow-y: scroll;
  flex: 1 1 0;
`;

interface PhotoListProps {
  photos: PhotosData[];
}

export const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
  return (
    <PhotoListContainer>
      {photos.map((photo) => (
        <PhotoItem
          key={photo.photoId}
          photoUrl={photo.photoUrl}
          photoId={photo.photoId}
        />
      ))}
    </PhotoListContainer>
  );
};
