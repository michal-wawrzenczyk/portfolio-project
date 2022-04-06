import { AppThunkAction } from '../reducers/rootReducer';
import { DUMMY_PHOTOS } from '../../app/components/mock/mock';
import {
  Categories,
  Ifilters,
  setFilteredPhotos,
  setFilters
} from '../slices/gallery';
import { PhotosData } from '../../app/types/photos-data';
// import { Provinces } from '../../app/components/main/filter/province';

// back-end simulation:
const getFilteredData = ({
  category,
  province
}: Ifilters): Promise<PhotosData[]> => {
  let data = [...DUMMY_PHOTOS];

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

    if (category) {
      if (category === Categories.ALL_PICTURES) {
        // data = data;
      } else {
        data = data.filter((picture) => {
          return picture.category === category;
        });
      }
    }

    if (province) {
      // filtrowanie
      data = data.filter((picture) => {
        return picture.location?.province === province;
      });
    }

    return setTimeout(() => resolve(data), Math.random() * 2000);
    // reject state can be
  });
};

// filterPhotosAction can be used everywhere - e.g. in hook (dispatch must be used because "thunk")
export const filterPhotosAction = (filters: Ifilters): AppThunkAction => {
  return async function thunk(dispatch): Promise<void> {
    try {
      const filteredData = await getFilteredData(filters);
      dispatch(setFilteredPhotos(filteredData));
      dispatch(setFilters(filters));
    } catch (err) {
      console.log(err);
    }
  };
};
