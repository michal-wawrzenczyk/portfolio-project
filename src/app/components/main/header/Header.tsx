import React from 'react';
// because we are going to write some JSX code here

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  return <HeaderContainer>Header + Nav</HeaderContainer>;
};
