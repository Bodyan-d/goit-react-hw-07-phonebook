import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterContacts } from './phonebook-actions';
import {
  fetchContacts,
  postContacts,
  deleteContact,
} from './phonebook-options';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [postContacts.fulfilled]: (state, action) => [...state, action.payload],

  [deleteContact.fulfilled]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

const filter = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
