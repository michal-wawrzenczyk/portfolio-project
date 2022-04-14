import { Ifilters } from '../slices/gallery';
import { RootState } from '../slices/types';
import { PhotosData } from '../../app/types/photos-data';

export const filtersSelector = (state: RootState): Ifilters =>
  state.galleryState.filters;

export const gallerySelector = (state: RootState): PhotosData[] =>
  state.galleryState.gallery;
