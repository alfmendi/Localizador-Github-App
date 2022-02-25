import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import serviciosUsuarios from "../serviciosAPI/serviciosUsuarios";

const BusquedaUsuarios = () => {
  const dispatch = useDispatch();
  const [texto, setTexto] = useState("");

  const manejarBusqueda = (e) => {
    e.preventDefault();
    serviciosUsuarios.buscarUsuario(dispatch, texto);
    setTexto("");
  };

  return (
    <FormContainer onSubmit={manejarBusqueda}>
      <InputContainer>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
      </InputContainer>
    </FormContainer>
  );
};

export default BusquedaUsuarios;

// Styled Components
const FormContainer = styled.form`
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #e3edf7;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

  & input {
    width: 300px;
    height: 100%;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 0px 8px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  }

  & button {
    height: 100%;
    cursor: pointer;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    padding: 0px 10px;
    background: #1778f2;
    color: #eee;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
    transition: 0.3s ease-in-out;
  }

  & button:hover {
    opacity: 0.9;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    & input {
      width: 200px;
      font-size: 12px;
    }

    & button {
      font-size: 12px;
    }
  }
`;

const InputContainer = styled.div`
  height: 32px;

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    height: 26px;
  }
`;
