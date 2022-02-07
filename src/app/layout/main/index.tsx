import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/main/header/Header';

const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const MainLayout: React.FC = () => {
  return (
    <MainLayoutContainer>
      <Header />
      <Outlet />
    </MainLayoutContainer>
  );
};
