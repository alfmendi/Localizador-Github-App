import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { resetearEstadoError } from "../redux/usuariosRedux";

const NotFound = () => {
  const dispatch = useDispatch();
  const { errorMensaje, errorEstado } = useSelector((state) => state.usuarios);

  const manejarResetearEstadoError = () => {
    dispatch(resetearEstadoError());
  };

  return (
    <Container>
      {errorEstado === 404 ? (
        <h2>Página no encontrada</h2>
      ) : (
        <h2>{errorMensaje}</h2>
      )}

      <Link onClick={manejarResetearEstadoError} to="/">
        Volver Inicio
      </Link>
    </Container>
  );
};

export default NotFound;

// Styled Components
const Container = styled.nav`
  max-width: 1200px;
  height: calc(100vh - 90px);
  margin: 0 auto;
  padding: 0px 20px;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;

  & a {
    text-decoration: none;
    background: #1778f2;
    color: #eee;
    border-radius: 3px;
    padding: 10px;
    margin-top: 20px;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
