import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const UniversalLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const UniversalLayout: React.FC = () => {
  return (
    <UniversalLayoutContainer>
      <Outlet />
    </UniversalLayoutContainer>
  );
};
