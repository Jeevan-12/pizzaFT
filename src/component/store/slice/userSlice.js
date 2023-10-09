import { createSlice } from '@reduxjs/toolkit';
const Pizza = createSlice({
  name: 'pizza',
  initialState: [],
  reducers: {
    addPizza(state, action) {

      state.push(action.payload);
    },

    deletePizza(state, action) {
      console.log('delete', state[0], action);
      state = state.filter((item) => {
        return item._id !== action.payload._id;
      });
      return state;
    },
  },
});
export default Pizza;
export const { addPizza, deletePizza } = Pizza.actions;
