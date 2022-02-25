import React from "react";
import styled from "styled-components";

const Tarjeta = ({ texto, dato }) => {
  return (
    <Container>
      <p>{texto}</p>
      <h4> {dato}</h4>
    </Container>
  );
};

export default Tarjeta;

// Styled Components
const Container = styled.div`
  width: fit-content;
  height: 50px;
  padding: 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e3edf7;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

  & p {
    font-size: 14px;
  }

  & h4 {
    font-size: 12px;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & p {
      font-size: 10px;
    }

    & h4 {
      font-size: 10px;
    }
  }
`;
