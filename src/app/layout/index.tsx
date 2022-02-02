import React from 'react';
import styled from 'styled-components';

import { Header } from './header/Header';
import { Filter } from './filter/Filter';
import { Main } from './main/Main';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Filter />
      <Main />
    </Container>
  );
};
