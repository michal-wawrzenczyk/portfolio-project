import React from 'react';
import styled from 'styled-components';

const DetailsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 0.5rem;

  h2 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0.2rem;
  }
`;

// interface DetailsCardProps {
//   species: string;
// }

export const DetailsCard: React.FC = () => {
  return (
    <DetailsCardContainer>
      <h2>Name of species</h2>
      <p>Localization</p>
      <img alt="image" />
      <p>Author:</p>
      <h3>Description:</h3>
      <p>...</p>
      <div>Back to gallery</div>
    </DetailsCardContainer>
  );
};
