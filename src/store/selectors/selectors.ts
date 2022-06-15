import { Ifilters, SelectedPhoto } from '../slices/gallery';
import { RootState } from '../slices/types';
import { PhotosData } from '../../app/types/photos-data';

export const filtersSelector = (state: RootState): Ifilters =>
  state.galleryState.filters;

export const gallerySelector = (state: RootState): PhotosData[] =>
  state.galleryState.gallery;

export const selectedPhotoSelector = (state: RootState): SelectedPhoto =>
  state.galleryState.selectedPhoto;

export const getSelectedPhotoById =
  (paramID: string | undefined) =>
  (state: RootState): PhotosData | undefined => {
    return state.galleryState.gallery.find(
      (photo) => photo.photoId === Number(paramID)
    );
  };
// export const selectedPhotoId

// Ask NATALIA
// export const gallerySelectors = {
//     getGallery:
//     getSelectedPhotoById:
// }

// Ifilters - do I need it?
