import { configureStore, createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = tableSlice.actions;

const store = configureStore({
  reducer: {
    table: tableSlice.reducer,
  },
});

export default store;