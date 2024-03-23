import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../reducers/index'; 

const store = configureStore({
  reducer: profileReducer, 
});

export default store;