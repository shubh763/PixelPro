import { configureStore } from "@reduxjs/toolkit";
import sliceHome from "../slice/homeSlice/sliceHome";


export const store = configureStore({
  reducer: { sliceHome },
});
