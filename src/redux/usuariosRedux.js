import { createSlice } from "@reduxjs/toolkit";

export const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    usuarios: [],
    usuario: null,
    repositorios: [],
    isLoading: false,
    error: false,
    errorMensaje: null,
    errorEstado: null,
  },
  reducers: {
    // Resetear el estado de error
    resetearEstadoError: (state) => {
      state.error = false;
      state.errorMensaje = null;
      state.errorEstado = null;
    },
    //Conseguir todos los usuarios
    getUsuariosInicio: (state) => {
      state.isLoading = true;
      state.error = false;
      state.errorMensaje = null;
      state.errorEstado = null;
    },
    getUsuariosExito: (state, action) => {
      state.isLoading = false;
      state.usuarios = action.payload;
    },
    getUsuariosError: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMensaje = action.payload.mensaje;
      state.errorEstado = action.payload.estado;
    },
    // Buscar un nombre de usuario
    buscarUsuarioInicio: (state) => {
      state.isLoading = true;
      state.error = false;
      state.errorMensaje = null;
      state.errorEstado = null;
    },
    buscarUsuarioExito: (state, action) => {
      state.isLoading = false;
      state.usuarios = action.payload;
    },
    buscarUsuarioError: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMensaje = action.payload.mensaje;
      state.errorEstado = action.payload.estado;
    },
    // Eliminar todos los usuarios del estado
    eliminarUsuarios: (state) => {
      state.usuarios = [];
    },
    // Conseguir usuario especifico
    getUsuarioInicio: (state) => {
      state.isLoading = true;
      state.error = false;
      state.errorMensaje = null;
      state.errorEstado = null;
    },
    getUsuarioExito: (state, action) => {
      state.isLoading = false;
      state.usuario = action.payload;
    },
    getUsuarioError: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMensaje = action.payload.mensaje;
      state.errorEstado = action.payload.estado;
    },
    // Conseguir todos los repositorios de un usuario especifico
    getRepositoriosInicio: (state) => {
      state.isLoading = true;
      state.error = false;
      state.errorMensaje = null;
      state.errorEstado = null;
    },
    getRepositoriosExito: (state, action) => {
      state.isLoading = false;
      state.repositorios = action.payload;
    },
    getRepositoriosError: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMensaje = action.payload.mensaje;
      state.errorEstado = action.payload.estado;
    },
  },
});

export const {
  resetearEstadoError,
  getUsuariosInicio,
  getUsuariosExito,
  getUsuariosError,
  buscarUsuarioInicio,
  buscarUsuarioExito,
  buscarUsuarioError,
  eliminarUsuarios,
  getUsuarioInicio,
  getUsuarioExito,
  getUsuarioError,
  getRepositoriosInicio,
  getRepositoriosExito,
  getRepositoriosError,
} = usuariosSlice.actions;

export default usuariosSlice.reducer;
