import { createSlice } from '@reduxjs/toolkit'

const shoesSlice = createSlice({
  name: 'shoes',
  initialState: {
    currentShoes: null
  },
  reducers: {
    setCurrentShoes: (state, action) => {
      state.currentShoes = action.payload
    },
  }
});

export const { setCurrentShoes } = shoesSlice.actions;
export default shoesSlice.reducer;