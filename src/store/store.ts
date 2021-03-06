import { configureStore } from '@reduxjs/toolkit';
import listReducer from './reducers/ListSlice';

const store = configureStore({
  reducer: {
    listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
