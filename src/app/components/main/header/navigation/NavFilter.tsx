import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { filterPhotosAction } from '../../../../../store/async-actions/filter-photos.action';
import { AppThunkDispatch } from '../../../../../store/reducers/rootReducer';

const categories = [
  { name: 'Birds', status: false },
  { name: 'Mammals', status: false },
  { name: 'Reptiles', status: false },
  { name: 'Amphibians', status: false },
  { name: 'Insects', status: false },
  { name: 'All pictures', status: false }
];

export const NavFilter: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();

  const onClick = useCallback(
    (category: string): Promise<void> => {
      return dispatch(filterPhotosAction(category));
    },
    [dispatch]
  );

  return (
    <nav>
      <ul>
        {categories.map((category) => {
          return (
            <li>
              <NavLink onClick={() => onClick(category.name)} to="/">
                {category.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// <li>
//   <NavLink onClick={() => onClick(categories[0].name)} to="/">
//     {categories[0].name}
//   </NavLink>
// </li>

// use map function for create NavLinks elements
// category.'' - empty string.
