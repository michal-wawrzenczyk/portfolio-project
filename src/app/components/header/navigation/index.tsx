import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;

  nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  nav li {
    margin-left: 1.5rem;
    font-size: 1.25rem;
  }

  nav a {
    text-decoration: none;
    color: black;
  }
`;

export const Navigation: React.FC = () => {
  return (
    <NavContainer>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/">Mammals</NavLink>
          </li>
          <li>
            <NavLink to="/">Reptiles</NavLink>
          </li>
          <li>
            <NavLink to="/">Amphibians</NavLink>
          </li>
          <li>
            <NavLink to="/">Insects</NavLink>
          </li>
        </ul>
      </nav>
    </NavContainer>
  );
};
