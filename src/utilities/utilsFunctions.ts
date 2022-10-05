export const queryStr = (filtersProp: any) => {
  let queryString = '';
  // $TO-DO TYPES
  if (!!filtersProp) {
    for (const property in filtersProp) {
      // category musi być rózne "All pictures"
      const allPictures = 'All pictures';

      if (!!filtersProp[property] && filtersProp[property] !== allPictures) {
        queryString = `${queryString}${property}=${filtersProp[property]}&`;
      }
    }
  }

  console.log(`${queryString}`);

  return `?${queryString}`;
};
