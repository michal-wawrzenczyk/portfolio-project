import React from 'react';
import styled from 'styled-components';
import { MediaCard } from '../components/MediaCard';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0.25rem;

  img {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

interface PhotoItemProps {
  photoUrl: string;
  photoId: number;
}

export const PhotoItem: React.FC<PhotoItemProps> = ({ photoUrl, photoId }) => {
  return (
    <Card>
      <MediaCard url={photoUrl} photoId={photoId} />
    </Card>
  );
};
