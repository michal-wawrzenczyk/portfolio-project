import React from 'react';
import { NavLink } from 'react-router-dom';

import { getBirds } from '../../../../../store/slices/gallery';
import { useDispatch } from 'react-redux';
// import { RootState } from '../../../../../store/reducers/rootReducer';

const categories = [
  { name: 'Birds', status: false },
  { name: 'Mammals', status: false },
  { name: 'Reptiles', status: false },
  { name: 'Amphibians', status: false },
  { name: 'Insects', status: false },
  { name: 'All pictures', status: false }
];

export const NavFilter: React.FC = () => {
  const dispatch = useDispatch();

  // const gallery = useSelector((state: RootState) => state.gallery.gallery);

  return (
    <nav>
      <ul>
        <li>
          <NavLink onClick={() => dispatch(getBirds())} to="/">
            {categories[0].name}
          </NavLink>
        </li>
        <li>
          <NavLink to="/">{categories[1].name}</NavLink>
        </li>
        <li>
          <NavLink to="/">{categories[2].name}</NavLink>
        </li>
        <li>
          <NavLink to="/">{categories[3].name}</NavLink>
        </li>
        <li>
          <NavLink to="/">{categories[4].name}</NavLink>
        </li>
        <li>
          <NavLink to="/">{categories[5].name}</NavLink>
        </li>
      </ul>
    </nav>
  );
};
