import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    kullanici: {},
  },
  reducers: {
    olusturKullanaici: (state, action) => {
      state.kullanici = action.payload;
      // console.log(action);
      // console.log(state.kullanici);
    },
    kullaniciSil:(state)=>{
      state.kullanici=''
    }
  },
});
export const { olusturKullanaici,kullaniciSil } = yetkiSlice.actions;
export default yetkiSlice.reducer;
