import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billAmount: 0,
  percent: 0.15,
  people: 1,
  rounding: "NO",
};

const tipSlice = createSlice({
  name: "tip",
  initialState,
  reducers: {
    setBillAmount: (state, action) => {
      state.billAmount = action.payload;
    },
    setPercent: (state, action) => {
      state.percent = action.payload;
    },
    setPeople: (state, action) => {
      state.people = action.payload;
    },
    setRounding: (state, action) => {
      state.rounding = action.payload;
    },
  },
});

export const { setBillAmount, setPercent, setPeople, setRounding } =
  tipSlice.actions;

export default tipSlice.reducer;
