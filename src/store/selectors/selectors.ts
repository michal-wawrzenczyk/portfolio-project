import { Ifilters, SelectedPhoto } from '../slices/gallery';
import { RootState } from '../slices/types';
import { PhotosData } from '../../app/types/photos-data';
import { Provinces } from '../../app/components/main/filter/province';

export const filtersSelector = (state: RootState): Ifilters =>
  state.galleryState.filters;

export const gallerySelector = (state: RootState): PhotosData[] =>
  state.galleryState.gallery;

export const selectedPhotoSelector = (state: RootState): SelectedPhoto =>
  state.galleryState.selectedPhoto;

export const getSelectedPhotoById =
  (paramID: string | undefined) =>
  (state: RootState): PhotosData => {
    const filteredPhotoById: PhotosData = state.galleryState.gallery.find(
      (photo) => photo.photoId === Number(paramID)
    ) || {
      author: '',
      species: '',
      category: '',
      photoUrl: '',
      photoId: 0,
      uploadTimeStamp: 0,
      description: '',
      location: {
        lat: 0,
        lon: 0,
        city: '',
        province: Provinces.None
      }
    };
    return filteredPhotoById;
  };

// export const selectedPhotoId

// export const gallerySelectors = {
//     getGallery:
//     getSelectedPhotoById:
// }

// zastanowić się nad Ifilters
