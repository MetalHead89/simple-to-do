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
      if (action.payload.trim().length > 0) {
        id += 1;

        state.list.push({ id, text: action.payload, isComplete: false });
      }
    },
    changeItemState(state, action: PayloadAction<number>) {
      state.list.forEach((item, index) => {
        if (item.id === action.payload) {
          state.list[index].isComplete = !state.list[index].isComplete;
        }
      });
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.list.forEach((item, index) => {
        if (item.id === action.payload) {
          state.list.splice(index, 1);
        }
      });
    },
    clearCompletedItems(state) {
      state.list = state.list.filter((item) => item.isComplete === false);
    },
  },
});

export default ListSlice.reducer;
