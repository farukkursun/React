import { configureStore } from '@reduxjs/toolkit';
import yetkiSlice from "../features/yetkiSlice"
import haberSlice from "../features/haberSlice"

const store = configureStore({

  //! burada redux için gerekli verileri yazacağım file ların adını belirttim
  reducer: {
    yetkiSlice:yetkiSlice,
    haberSlice:haberSlice
   
  },
});
export default store;
