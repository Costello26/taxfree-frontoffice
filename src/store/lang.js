import { createSlice } from '@reduxjs/toolkit';
import { langsList } from '../assets/locales';

const initialLangState = {
  selectedLang: 1 //0 ru, 1 uz, 2 en
};

const langSlice = createSlice({
  name: 'language',
  initialState: initialLangState,
  reducers: {
    setLang(state, { payload }) {
      const idx = langsList[payload];
      if (idx === 0 || idx === 1 || idx === 2) {
        state.selectedLang = idx;
      }
    },
  },
});

export const langActions = langSlice.actions;

export default langSlice.reducer;
