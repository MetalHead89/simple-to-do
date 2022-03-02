import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ListItem = {
  id: number;
  text: string;
  isComplete: boolean;
};

type List = {
  list: ListItem[];
};

const initialState: List = {
  list: [],
};

let id = 0;

export const ListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      id += 1;

      state.list.push({ id, text: action.payload, isComplete: false });
    },
  },
});

export default ListSlice.reducer;
