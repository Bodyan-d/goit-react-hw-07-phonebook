import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contatsReduser from './phonebook/phonebook-reduser';

const store = configureStore({
  reducer: {
    contacts: contatsReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  /* preloadedState, */
});

export default store;
