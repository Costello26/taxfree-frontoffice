import { configureStore } from '@reduxjs/toolkit';

import passportReducer from './passport';
import authReducer from './auth';
import langReducer from './lang'

const store = configureStore({
  reducer: { 
    passport: passportReducer, 
    auth: authReducer,
    lang: langReducer 
  },
});

export default store;
