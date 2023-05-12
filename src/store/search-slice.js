import { createSlice } from '@reduxjs/toolkit';
import app from '../config';

const data=app();
const searchSlice = createSlice({
  name: 'ui',
  initialState: { items:data },
  reducers: {
    search(state,action) {
const userInput=action.payload;
   const data = state.items.filter((item) => {
      return item.first_name.includes(userInput);
    })
    state.items = data;
    },

    fill(state,action){
   state.items=action.payload;
   },
  }
});

export const uiActions = searchSlice.actions;

export default searchSlice;