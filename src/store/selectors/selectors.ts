import { Ifilters } from '../slices/gallery';
import { RootState } from '../slices/types';

export const filtersSelector = (state: RootState): Ifilters =>
  state.galleryState.filters;
