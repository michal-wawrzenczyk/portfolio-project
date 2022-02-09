import React from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutContainer } from '../../components/layout-container/container';

export const UniversalLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
};
