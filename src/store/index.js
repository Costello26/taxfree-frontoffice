import { configureStore } from '@reduxjs/toolkit';

import passportReducer from './passport';
import authReducer from './auth';

const store = configureStore({
  reducer: { 
    passport: passportReducer, 
    auth: authReducer },
});

export default store;
