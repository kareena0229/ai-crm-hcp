import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hcp_name: "",
  sentiment: "",
  summary: "",
  materials_shared: "",
  followup: ""
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;