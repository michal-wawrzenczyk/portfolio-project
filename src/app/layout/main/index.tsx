import React from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutContainer } from '../../components/layout-container/container';
import { Header } from '../../components/main/header/Header';

export const MainLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};
