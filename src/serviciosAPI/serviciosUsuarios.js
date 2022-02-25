import axios from "axios";

import {
  getUsuariosInicio,
  getUsuariosExito,
  getUsuariosError,
  buscarUsuarioInicio,
  buscarUsuarioExito,
  buscarUsuarioError,
  getUsuarioInicio,
  getUsuarioExito,
  getUsuarioError,
  getRepositoriosInicio,
  getRepositoriosExito,
  getRepositoriosError,
} from "../redux/usuariosRedux";

const baseURL = "https://api.github.com";
const opciones = {
  Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
};

// Función para conseguir todos los usuarios de la API
const conseguirTodosUsuarios = async (dispatch) => {
  dispatch(getUsuariosInicio());
  try {
    const resultado = await axios.get(`${baseURL}/users`, opciones);
    dispatch(getUsuariosExito(resultado.data));
  } catch (error) {
    let mensaje = crearMensajeError(error);
    dispatch(
      getUsuariosError({
        mensaje: mensaje,
        estado: error?.response?.status || 500,
      })
    );
  }
};

// Función para buscar un/varios usuario/s en la API
const buscarUsuario = async (dispatch, usuario) => {
  dispatch(buscarUsuarioInicio());
  try {
    const resultado = await axios.get(
      `${baseURL}/search/users?q=${usuario}`,
      opciones
    );
    dispatch(buscarUsuarioExito(resultado.data.items));
  } catch (error) {
    let mensaje = crearMensajeError(error);
    dispatch(
      buscarUsuarioError({
        mensaje: mensaje,
        estado: error?.response?.status || 500,
      })
    );
  }
};

// Función para conseguir un usuario concreto
const getUsuario = async (dispatch, login) => {
  dispatch(getUsuarioInicio());
  try {
    const resultado = await axios.get(`${baseURL}/users/${login}`, opciones);
    dispatch(getUsuarioExito(resultado.data));
  } catch (error) {
    let mensaje = crearMensajeError(error);
    dispatch(
      getUsuarioError({
        mensaje: mensaje,
        estado: error?.response?.status || 500,
      })
    );
  }
};

// Función para conseguir todos los repositorios de un usuario concreto
const getRepositorios = async (dispatch, login) => {
  dispatch(getRepositoriosInicio());
  try {
    const resultado = await axios.get(
      `${baseURL}/users/${login}/repos`,
      opciones
    );
    dispatch(getRepositoriosExito(resultado.data));
  } catch (error) {
    let mensaje = crearMensajeError(error);
    dispatch(
      getRepositoriosError({
        mensaje: mensaje,
        estado: error?.response?.status || 500,
      })
    );
  }
};

// Función para generar el mensaje de error
const crearMensajeError = (error) => {
  let mensaje;
  if (error.message === "Network Error") {
    mensaje = "Error en la Red";
  } else if (error.response?.data.message) {
    mensaje = error.response?.data.message;
  } else mensaje = "";
  return mensaje;
};

const serviciosUsuarios = {
  conseguirTodosUsuarios,
  buscarUsuario,
  getUsuario,
  getRepositorios,
};

export default serviciosUsuarios;
