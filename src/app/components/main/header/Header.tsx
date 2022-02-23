import React from 'react';
// because we are going to write some JSX code here
import styled from 'styled-components';
import { Logo } from './logo';
import { Navigation } from './navigation';
import { LogOrSign } from './login-signup';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: whitesmoke;
  height: 100px;
`;

// interface HeaderProps {
//
// }

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
      <LogOrSign />
    </HeaderContainer>
  );
};
