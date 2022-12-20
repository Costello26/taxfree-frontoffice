import { createSlice } from '@reduxjs/toolkit';

const initialpassportState = {
  fullname: 'Olimov Asqarali',
  passportJSHR: '12345678910112',
  passportImage: '',
  passportDate: '',
  passportNumber: '',
  phone: '',
  userId: '',
};

const passportSlice = createSlice({
  name: 'passportData',
  initialState: initialpassportState,
  reducers: {
    setUserId(state, { payload }) {
      state.userId = payload;
    },
    setPhoneNumber(state, { payload }) {
      state.phone = payload;
    },
    setPersonalData(state, { payload }) {
      const {
        fullName,
        passportJSHR,
        passportImage,
        passportDate,
        passportNumber,
        phone,
        userId,
      } = payload;
      state.fullname = fullName;
      state.passportJSHR = passportJSHR;
      state.passportImage = passportImage;
      state.passportDate = passportDate;
      state.passportNumber = passportNumber;
      state.phone = phone;
      state.userId = userId;
    },
  },
});

export const passportActions = passportSlice.actions;

export default passportSlice.reducer;
