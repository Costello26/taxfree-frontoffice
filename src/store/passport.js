import { createSlice } from '@reduxjs/toolkit';

const initialpassportState = {
  fullname: "Olimov Asqarali",
  passportJSHR: '12345678910112',
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
        fullname,
        passportJSHR,
        passportImage,
        passportDate,
        passportNumber,
        userId,
      } = payload;
      state.fullname = fullname;
      state.passportJSHR = passportJSHR;
      state.passportImage = passportImage;
      state.passportDate = passportDate;
      state.passportNumber = passportNumber;
      state.userId = userId;
    },
    getUserId(state, { payload }) {
      state.userId = payload.userId;
    },
  },
});

export const passportActions = passportSlice.actions;

export default passportSlice.reducer;
