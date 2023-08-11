import { createSlice } from '@reduxjs/toolkit';

const _initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState: _initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    }
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;