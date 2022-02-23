import { configureStore } from '@reduxjs/toolkit';

// here reducers functions will be imported from "slices" folder and then implemented to root reducer of store.
import gallerySliceReducer from '../slices/gallery';

// store with root reducer
export const store = configureStore({
  reducer: {
    gallery: gallerySliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
