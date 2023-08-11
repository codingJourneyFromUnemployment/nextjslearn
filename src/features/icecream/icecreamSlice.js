import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const _initialState = {
  numOfIcecreams: 20,
};

const iceCreamSlice = createSlice({
  name: 'icecream',
  initialState: _initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecreams -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIcecreams -= action.payload;
    });
  }
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;