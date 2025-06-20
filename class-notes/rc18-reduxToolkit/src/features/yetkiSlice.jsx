import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    kullaniciOlustur: (state, { payload }) => {
      console.log(payload);
      console.log(state);
    },
    kullaniciSil: (state) => {},
  },
});

export const { kullaniciOlustur, kullaniciSil } = yetkiSlice.actions;
export default yetkiSlice.reducer;
