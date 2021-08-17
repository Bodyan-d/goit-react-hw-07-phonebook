import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './phonebook-actions';

const items = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

const filter = createReducer('', {
  [filterContacts]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
