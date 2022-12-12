import { configureStore } from '@reduxjs/toolkit';

import passportReducer from './passport';

const store = configureStore({
  reducer: { passport: passportReducer },
});

export default store;
