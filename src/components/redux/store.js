import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contatsReduser from './phonebook/phonebook-reduser';

const store = configureStore({
  reducer: {
    contacts: contatsReduser,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export default store;
