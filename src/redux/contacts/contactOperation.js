
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get(
      'https://651b0919340309952f0e2e60.mockapi.io/contacts'
    );
    return response.data;
  } catch (error) {
    throw error; 
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const response = await axios.post(
        'https://651b0919340309952f0e2e60.mockapi.io/contacts',
        newContact
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(
        `https://651b0919340309952f0e2e60.mockapi.io/contacts/${id}`
      );
      return id;
    } catch (error) {
      throw error;
    }
  }
);