import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  return (
    <Card>
      <img src={photoUrl} alt="img" />
      <div>
        <p>5 stars rating</p>
        <Link to={`/details/${photoId}`}>
          <p>show details</p>
        </Link>
      </div>
    </Card>
  );
};
