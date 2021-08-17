import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction(
  'phonebook/addContact',

  ({ name, number }) => {
    return {
      payload: {
        name,
        number,
        id: uuidv4(),
      },
    };
  },
);
export const deleteContact = createAction('phonebook/deleteContact');

export const filterContacts = createAction('phonebook/filterContacts');
