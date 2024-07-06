// src/redux/languageReducer.js
import { createReducer } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  language: 'en', // default language
};

// Define action types
const SET_LANGUAGE = 'language/setLanguage';

// Define action creators
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

// Create the reducer using createReducer
const languageReducer = createReducer(initialState, (builder) => {
  builder.addCase(SET_LANGUAGE, (state, action) => {
    state.language = action.payload;
  });
});

export default languageReducer;
