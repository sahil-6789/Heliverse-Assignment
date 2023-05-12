import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
  name: 'cart',
  initialState: { arr:[],use:false,frontPage:true},
  reducers: {
    addUser(state,action) {
        const newItem = action.payload;
        const existingItem = state.arr.find((item) => item.domain === newItem.domain);
        if (!existingItem) {
          
          state.arr.push({
            id:newItem.id,
            image:newItem.image,
            firstname:newItem.firstname,
            lastname:newItem.lastname,
            email:newItem.email,
            gender:newItem.gender,
            domain:newItem.domain,
            available:newItem.available
            
          });
        
        
        } else {
        state.use=true;
        }

    },

    toggle(state){
   state.use=false;
   },
   front(state){
    state.frontPage=!state.frontPage;
   }
  }
});

export const teamActions = teamSlice.actions;

export default teamSlice;