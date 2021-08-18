import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contatsReduser from './phonebook/phonebook-reduser';

const store = configureStore({
  reducer: {
    contacts: contatsReduser,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
