import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DUMMY_PHOTOS } from '../../app/components/mock/mock';
import { PhotosData } from '../../app/types/photos-data';

// Define a type for the slice state:
export interface GalleryStateInterface {
  gallery: PhotosData[];
  showGallery: boolean;
}

// Define the initial state using that defined type:
const initialGalleryState: GalleryStateInterface = {
  gallery: DUMMY_PHOTOS,
  showGallery: true
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
    }
  }
});

const { actions, reducer: galleryReducer } = gallerySlice;

export const { setFilteredPhotos } = actions;
export default galleryReducer;
