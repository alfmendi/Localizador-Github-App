import React from "react";
import styled from "styled-components";

import spinner from "../assets/spinning-loading.gif";

const Spinner = () => {
  return (
    <Container>
      <img src={spinner} alt="cargando datos"></img>
    </Container>
  );
};

export default Spinner;

// Styled Components
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */

  & img {
    width: 60px;
  }
`;
