import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { filterPhotosAction } from '../../../../../store/async-actions/filter-photos.action';
import { AppThunkDispatch } from '../../../../../store/reducers/rootReducer';
import { filtersSelector } from '../../../../../store/selectors/selectors';
import { Categories } from '../../../../../store/slices/gallery';

const categories = [
  // { name: 'Birds', status: false },
  // { name: 'Mammals', status: false },
  // { name: 'Reptiles', status: false },
  // { name: 'Amphibians', status: false },
  // { name: 'Insects', status: false },
  // { name: 'All pictures', status: false }
  Categories.BIRDS,
  Categories.MAMMALS,
  Categories.REPTILES,
  Categories.AMPHIBIANS,
  Categories.INSECTS,
  Categories.ALL_PICTURES
];

export const NavFilter: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const filters = useSelector(filtersSelector);

  const onClick = useCallback(
    (category: Categories): Promise<void> => {
      return dispatch(filterPhotosAction({ ...filters, category }));
    },
    [dispatch, filters]
  );

  return (
    <nav>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category}>
              <NavLink onClick={(): Promise<void> => onClick(category)} to="/">
                {category}
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
