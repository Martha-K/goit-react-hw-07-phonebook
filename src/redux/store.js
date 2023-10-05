import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

