import React from "react";
import styled from "styled-components";
import BusquedaUsuarios from "../componentes/BusquedaUsuarios";
import ListaUsuarios from "../componentes/ListaUsuarios";

const Inicio = () => {
  return (
    <Container>
      <BusquedaUsuarios />
      <ListaUsuarios />
    </Container>
  );
};

export default Inicio;

// Styled Components
const Container = styled.nav`
  max-width: 1200px;
  height: calc(100vh - 90px);
  margin: 0 auto;
  padding: 0px 20px;
  background: #eee;
  display: flex;
  flex-direction: column;
`;
