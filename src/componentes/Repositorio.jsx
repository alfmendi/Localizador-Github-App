import React from "react";
import styled from "styled-components";

import { FaEye, FaInfo, FaLink, FaStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";

const Repositorio = ({ repositorio }) => {
  return (
    <Container>
      <Enlace href={repositorio.html_url} target="_blank">
        <FaLink /> {repositorio.name}
      </Enlace>
      <p>{repositorio.description}</p>
      <Estadisticas>
        <Elemento color="#2196f3">
          <FaEye />
          {repositorio.watchers_count}
        </Elemento>
        <Elemento color="#009688">
          <FaStar />
          {repositorio.stargazers_count}
        </Elemento>
        <Elemento color="#e91e63">
          <FaInfo />
          {repositorio.open_issues}
        </Elemento>
        <Elemento color="#ff5722">
          <GoRepoForked />
          {repositorio.forks}
        </Elemento>
      </Estadisticas>
    </Container>
  );
};

export default Repositorio;

// Styled Components
const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  border-radius: 3px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

  & a {
    text-decoration: none;
    color: #333;
  }

  & p {
    font-size: 14px;
    color: #555;
    padding: 10px 0px 5px 0px;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    padding: 10px;

    & p {
      font-size: 10px;
    }
  }
`;

const Enlace = styled.a`
  width: fit-content;
  align-self: center;
  text-decoration: none;
  margin: 10px 0px;
  padding: 4px 8px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  cursor: pointer;
  border-radius: 3px;
  background: #e3edf7;
  border: 1px solid #aaa;
  color: #666;
  transition: 0.3s ease-in-out;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

  &:hover {
    border: 1px solid #1778f2;
    color: #1778f2;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    font-size: 8px;
    align-self: center;
  }
`;

const Estadisticas = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const Elemento = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  color: #eee;
  padding: 2px 10px;
  font-size: 12px;
  border-radius: 10px;
  opacity: 0.8;
  color: #fff;
  gap: 5px;

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    font-size: 8px;
    padding: 2px 5px;
  }
`;
