import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const toastSlice = createSlice({
  name: "toast-slice",
  initialState: {
    items: [],
  },
  reducers: {
    addToast(state, action) {
      const id = uuid();
      const { message, type, dispatch } = action.payload;
      state.items = [...state.items, { message, type, id }];
      setTimeout(() => {
        dispatch(removeToast({ toastID: id }));
      }, 1500);
    },
    removeToast(state, action) {
      state.items = state.items.filter(
        (toast) => toast.id !== action.payload.toastID
      );
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export const toastItems = (state) => state.toastSlice.items;

export default toastSlice.reducer;
