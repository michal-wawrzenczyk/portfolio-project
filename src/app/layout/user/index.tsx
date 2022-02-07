import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const UserLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const UserLayout: React.FC = () => {
  return (
    <UserLayoutContainer>
      <h1>User Profile Page</h1>
      <Outlet />
    </UserLayoutContainer>
  );
};

// layoutContainer i będzie zwracał children (komponent reactowy) i zaimportować.
