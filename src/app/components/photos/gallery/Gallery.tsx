import React from 'react';
import styled from 'styled-components';
import { PhotoList } from './PhotoList';
// import { DUMMY_PHOTOS } from '../../../mock/mock';
import { useDispatch, useSelector } from 'react-redux';
// store -> Selectors directory - there for every slice create selector (good way when app becomes bigger)
// getPhotoId, getAuthor - reusable list of selector, export them
import { RootState } from '../../../../store/slices/types';
import { filterPhotosAction } from '../../../../store/async-actions/filter-photos.action';
import { Categories } from '../../../../store/slices/gallery';
import { Province } from '../../filter/filters/province';
import { useLocation } from 'react-router-dom';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: whitesmoke;

  h3 {
    margin-left: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Gallery: React.FC = () => {
  const dispatch = useDispatch();
  const gallery = useSelector((state: RootState) => state.galleryState.gallery);

  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  const { search } = useLocation();

  // Na następnym spotkaniu
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams - check these methods (array length or property quantity)
  let query = useQuery();
  // queryParams ? listQueryParams : gallery
  const queryParams = null;
  if (queryParams) {
    dispatch(
      filterPhotosAction({
        author: '',
        category: Categories.ALL_PICTURES,
        province: (query.get('province') as Province) || Province.None,
        rating: null,
        species: ''
      })
    );
  }

  return (
    <GalleryContainer>
      <h3>All pictures:</h3>
      <PhotoList photos={gallery} />
    </GalleryContainer>
  );
};
