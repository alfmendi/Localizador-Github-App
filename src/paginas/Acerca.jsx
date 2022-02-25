import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Acerca = () => {
  return (
    <Container>
      <h3>Información</h3>
      <Card>
        <p>
          Aplicación que permite localizar usuarios de Github. Una vez
          localizado un usuario, se muestra su información personal, así como
          una lista de los repositorios públicos del mismo a los que es posible
          acceder. La aplicación se ha desarrollado empleando la librería React
          para JavaScript. Dicha aplicación accede a la API desarrollada por
          Github (https://api.github.com). Las diferentes tecnologías empleadas
          para su desarrollo son:
        </p>
        <h3>Front End</h3>
        <ul>
          <li>React</li>
          <li>Redux toolkit</li>
          <li>React Router Dom</li>
        </ul>
        <Boton>
          <Link to="/">Volver</Link>
        </Boton>
      </Card>
    </Container>
  );
};

export default Acerca;

// Styled Components
const Container = styled.nav`
  max-width: 1200px;
  height: calc(100vh - 90px);
  margin: 0 auto;
  padding: 0px 20px;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    h3 {
      font-size: 15px;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  color: #333;
  padding: 10px 20px;
  background: #e3edf7;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  gap: 10px;

  & ul {
    list-style: none;
  }

  & p,
  li {
    color: #666;
  }

  & li {
    padding-left: 20px;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    h3,
    p,
    li {
      font-size: 12px;
    }
  }
`;

const Boton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    font-size: 14px;
    background: #1778f2;
    text-decoration: none;
    color: #eee;
    border-radius: 3px;
    padding: 5px 20px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.1),
      0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(3, 169, 244, 0.2);
  }

  & a:hover {
    opacity: 0.9;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    a {
      font-size: 12px;
    }
  }
`;

// /* Media Query for Mobile Devices */
// @media (max-width: 480px) {
//   .acercaContainer {
//     padding: 0 20px;
//   }

//   .header h3 {
//     font-size: 14px;
//   }

//   .acercaContainer h3 {
//     font-size: 12px;
//   }

//   .acercaContainer p,
//   .acercaContainer li,
//   .acercaContainer a,
//   .footer p {
//     font-size: 10px;
//   }
// }
