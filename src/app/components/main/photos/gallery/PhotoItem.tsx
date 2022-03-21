import React from 'react';
import styled from 'styled-components';
import { MediaCard } from '../components/MediaCard';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  cursor: pointer;
  padding: 0.2rem;

  img {
    width: 100%;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0 0.5rem;
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
  return <MediaCard url={photoUrl} photoId={photoId} />;
};
