
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visitedItems: [],
};

const visitedSlice = createSlice({
  name: 'visited',
  initialState,
  reducers: {
    addVisited: (state, action) => {
      const exists = state.visitedItems.find(item => item.id === action.payload.id);
      if (!exists) {
        state.visitedItems.unshift(action.payload);
        if (state.visitedItems.length > 10) {
          state.visitedItems.pop();
        }
      }
    },
  },
});


export const { addVisited } = visitedSlice.actions;
export default visitedSlice.reducer;
