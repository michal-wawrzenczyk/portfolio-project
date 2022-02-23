import { createSlice } from '@reduxjs/toolkit';
import { DUMMY_PHOTOS } from '../../app/components/mock/mock';
import { PhotosData } from '../../app/types/photos-data';

// Define a type for the slice state:
interface initialGalleryStateTypes {
  gallery: PhotosData[];
  showGallery: boolean;
}

// Define the initial state using that defined type:
const initialGalleryState: initialGalleryStateTypes = {
  gallery: DUMMY_PHOTOS,
  showGallery: true
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: initialGalleryState,
  reducers: {
    getBirds(state) {
      state.gallery.filter((picture) => {
        return picture.category === 'Birds';
      });
    },
    getMammals(state) {
      state.gallery.filter((picture) => {
        return picture.category === 'Mammals';
      });
    }
  }
});

const { actions, reducer: galleryReducer } = gallerySlice;

export const { getBirds, getMammals } = actions;
export default galleryReducer;

// akcja z parametrem
