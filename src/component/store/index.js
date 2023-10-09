import { configureStore } from '@reduxjs/toolkit';
import Pizza from './slice/userSlice';
const store = configureStore({
  reducer: { user: Pizza.reducer },
});
export default store;
