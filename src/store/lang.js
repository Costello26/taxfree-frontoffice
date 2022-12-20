import { createSlice } from '@reduxjs/toolkit';
import { langsList } from '../assets/locales';

const initialLangState = {
  selected: langsList.uz
};

const langSlice = createSlice({
  name: 'authentication',
  initialState: initialLangState,
  reducers: {
    setLang(state, { payload }) {
      if(payload === 0 || payload === 1 || payload === 2){
        state.selected = payload;
      }
    },
  },
});

export const authActions = langSlice.actions;

export default langSlice.reducer;
