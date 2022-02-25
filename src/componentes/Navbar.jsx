import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [mostrarIconoMenu, setMostrarIconoMenu] = useState(true);

  return (
    <Container>
      <ContainerIzq>
        <FaGithub size="1.5em" />
        <h2>Localizador Github</h2>
      </ContainerIzq>
      <ContainerDer>
        <Enlaces>
          <Link to="/">Inicio</Link>
          <Link to="acerca">Acerca de</Link>
        </Enlaces>
        <EnlacesMovil>
          {mostrarIconoMenu ? (
            <RiMenu3Line
              color="#333"
              size={16}
              onClick={() => setMostrarIconoMenu(false)}
            />
          ) : (
            <RiCloseLine
              color="#333"
              size={16}
              onClick={() => setMostrarIconoMenu(true)}
            />
          )}
          {!mostrarIconoMenu && (
            <MenuMovil>
              <Link to="/">
                <p>Inicio</p>
              </Link>
              <Link to="/acerca">
                <p>Acerca de</p>
              </Link>
            </MenuMovil>
          )}
        </EnlacesMovil>
      </ContainerDer>
    </Container>
  );
};

export default Navbar;

// Styled Components
const Container = styled.nav`
  max-width: 1200px;
  height: 50px;
  margin: 0 auto;
  padding: 0px 20px;
  background: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerIzq = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2 {
    margin-left: 20px;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const ContainerDer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Enlaces = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a {
    text-decoration: none;
    color: inherit;
    transition: 0.3s ease-in-out;
    position: relative;
  }

  & a:last-child {
    margin-left: 20px;
  }

  & a:hover {
    color: #1778f2;
  }

  & a::after {
    position: absolute;
    content: "";
    background: #1778f2;
    height: 3px;
    width: 0px;
    left: 0px;
    bottom: -4px;
    transition: 0.3s;
  }

  & a:hover::after {
    width: 100%;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    display: none;
  }
`;

const EnlacesMovil = styled.div`
  position: relative;
  display: none;
  z-index: 10;

  & a {
    text-decoration: none;
    color: inherit;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    display: block;
  }
`;

const MenuMovil = styled.div`
  width: 80px;
  padding: 10px;
  position: absolute;
  top: 20px;
  right: 0px;
  font-size: 10px;
  border-radius: 3px;
  background: #333;
  color: #eee;

  & p {
    cursor: pointer;
  }

  & p:last-child {
    margin-top: 10px;
  }
`;
