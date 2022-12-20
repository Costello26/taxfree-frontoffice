import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  qrCode: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    setQrCode(state, { payload }) {
      state.qrCode = payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
