import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import Repositorio from "./Repositorio";

const ListaRepositorios = () => {
  const { repositorios } = useSelector((state) => state.usuarios);

  return (
    <Container>
      <h2>Lista Repositorios</h2>
      {repositorios.map((repositorio) => (
        <Repositorio key={repositorio.id} repositorio={repositorio} />
      ))}
    </Container>
  );
};

export default ListaRepositorios;

// Styled Components
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  gap: 20px;
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
    gap: 10px;
    & h2 {
      font-size: 15px;
    }
  }
`;
