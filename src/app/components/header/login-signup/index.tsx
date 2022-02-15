import React from 'react';
import styled from 'styled-components';
import { LogIn } from './login-btn';
import { SignUp } from './signup-btn';

const LogSignBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

export const LogOrSign: React.FC = () => {
  return (
    <LogSignBtnContainer>
      <LogIn />
      <SignUp />
    </LogSignBtnContainer>
  );
};
