import { configureStore } from "@reduxjs/toolkit";
import usuariosReducer from "./usuariosRedux";

export const store = configureStore({
  reducer: {
    usuarios: usuariosReducer,
  },
});
