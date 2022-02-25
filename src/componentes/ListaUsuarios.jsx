import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { eliminarUsuarios } from "../redux/usuariosRedux";

import Spinner from "./Spinner";
import Usuario from "./Usuario";

const ListaUsuarios = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { usuarios, isLoading, error } = useSelector((state) => state.usuarios);

  useEffect(() => {
    if (error) navigate("/error");
  }, [error, navigate]);

  const manejarLimpiarLista = () => {
    dispatch(eliminarUsuarios());
  };

  if (isLoading) return <Spinner />;
  else
    return (
      <Container>
        {usuarios.length > 0 && (
          <>
            <BotonLimpiar onClick={manejarLimpiarLista}>
              Limpiar Lista
            </BotonLimpiar>

            {usuarios.map((usuario) => (
              <Usuario key={usuario.id} usuario={usuario} />
            ))}
          </>
        )}
        {usuarios.length === 0 && <p>No hay usuarios</p>}
      </Container>
    );
};

export default ListaUsuarios;

// Styled Components
const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 40px 0px 20px 0px;
  gap: 20px;
  overflow-y: scroll;
  border-radius: 3px;
  background: #e3edf7;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    & p {
      font-size: 12px;
    }
  }
`;

const BotonLimpiar = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  padding: 2px 10px;

  background: #1778f2;
  color: #eee;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
