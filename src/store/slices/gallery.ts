import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provinces } from '../../app/components/main/filter/province';
import { DUMMY_PHOTOS } from '../../app/components/mock/mock';
import { PhotosData } from '../../app/types/photos-data';

export enum Categories {
  BIRDS = 'Birds',
  MAMMALS = 'Mammals',
  REPTILES = 'Reptiles',
  AMPHIBIANS = 'Amphibians',
  INSECTS = 'Insects',
  ALL_PICTURES = 'All pictures'
}

export interface Ifilters {
  author: string;
  species: string;
  rating: number | null;
  category: Categories;
  province: Provinces;
}

// Define a type for the slice state:
export interface GalleryStateInterface {
  gallery: PhotosData[];
  showGallery: boolean;
  filters: Ifilters;
}

// Define the initial state using that defined type:
const initialGalleryState: GalleryStateInterface = {
  gallery: DUMMY_PHOTOS,
  showGallery: true,
  filters: {
    author: '',
    species: '',
    rating: null,
    category: Categories.ALL_PICTURES,
    province: Provinces.None
  }
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: initialGalleryState,
  reducers: {
    setFilteredPhotos(
      state: GalleryStateInterface,
      action: PayloadAction<PhotosData[] | undefined>
    ): void {
      if (action.payload) {
        state.gallery = action.payload;
      }
    },
    setFilters(
      state: GalleryStateInterface,
      action: PayloadAction<Ifilters>
    ): void {
      if (action.payload) {
        state.filters = action.payload;
      }
    }
  }
});

const { actions, reducer: galleryReducer } = gallerySlice;

export const { setFilteredPhotos, setFilters } = actions;
export default galleryReducer;
