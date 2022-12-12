import { createSlice } from '@reduxjs/toolkit';

const initialpassportState = {
  firstName: 'Asqarali',
  lastName: 'Olimov',
  passportJSHR: '12345678910112',
  passportImage: '',
  passportDate: '15/04/2014',
  passportNumber: 'AB1234567',
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
  },
});

export const passportActions = passportSlice.actions;

export default passportSlice.reducer;
