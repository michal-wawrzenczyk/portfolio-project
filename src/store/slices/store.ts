import { configureStore } from '@reduxjs/toolkit';
// middleware - read about it ! how it works
import rootReducer from '../reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer
});

export default store;
