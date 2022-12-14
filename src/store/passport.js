import { createSlice } from '@reduxjs/toolkit';

const initialpassportState = {
  firstName: '',
  lastName: '',
  passportJSHR: '',
  passportImage: '',
  passportDate: '',
  passportNumber: '',
  userId: '',
};

const passportSlice = createSlice({
  name: 'passportData',
  initialState: initialpassportState,
  reducers: {
    receive(state, { payload }) {
      const {
        firstName,
        lastName,
        passportJSHR,
        passportImage,
        passportDate,
        passportNumber,
      } = payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.passportJSHR = passportJSHR;
      state.passportImage = passportImage;
      state.passportDate = passportDate;
      state.passportNumber = passportNumber;
    },
    getUserId(state, { payload }) {
      state.userId = payload.userId;
    },
  },
});

export const passportActions = passportSlice.actions;

export default passportSlice.reducer;
