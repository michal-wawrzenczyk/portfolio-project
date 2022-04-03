import { AppThunkAction } from '../reducers/rootReducer';
import { DUMMY_PHOTOS } from '../../app/components/mock/mock';
import { Ifilters, setFilteredPhotos, setFilters } from '../slices/gallery';
import { PhotosData } from '../../app/types/photos-data';

// back-end simulation:
const getFilteredData = (filter: Ifilters): Promise<PhotosData[]> => {
  return new Promise((resolve) => {
    // if (filter === 'All pictures') {
    //   const data = DUMMY_PHOTOS;
    // } else {
    //   const data = DUMMY_PHOTOS.filter((picture) => {
    //     return picture.category === filter;
    //   });
    // }

    // const data =
    //   filter === 'All pictures'
    //     ? DUMMY_PHOTOS
    //     : DUMMY_PHOTOS.filter((picture) => {
    //         return picture.category === filter;
    //       });

    const data = DUMMY_PHOTOS.filter((picture) => {
      return picture.category === filter.category;
    });

    return setTimeout(() => resolve(data), Math.random() * 2000);
    // reject state can be
  });
};

// filterPhotosAction can be used everywhere - e.g. in hook (dispatch must be used because "thunk")
export const filterPhotosAction = (filter: Ifilters): AppThunkAction => {
  return async function thunk(dispatch): Promise<void> {
    try {
      const filteredData = await getFilteredData(filter);
      dispatch(setFilteredPhotos(filteredData));

      dispatch(setFilters(filter));
    } catch (err) {
      console.log(err);
    }
  };
};
