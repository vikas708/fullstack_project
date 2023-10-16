import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    isRegistering: false,
    registrationSuccess: false,
    error: null,
  },
  reducers: {
    registrationStart: (state) => {
      state.isRegistering = true;
      state.registrationSuccess = false;
      state.error = null;
    },
    registrationSuccess: (state) => {
      state.isRegistering = false;
      state.registrationSuccess = true;
      state.error = null;
    },
    registrationFailure: (state, action) => {
      state.isRegistering = false;
      state.registrationSuccess = false;
      state.error = action.payload;
    },
  },
});

export const {
  registrationStart,
  registrationSuccess,
  registrationFailure,
} = registrationSlice.actions;
export default registrationSlice.reducer;
