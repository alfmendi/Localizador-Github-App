import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import serviciosUsuarios from "../serviciosAPI/serviciosUsuarios";

import Spinner from "../componentes/Spinner";
import Tarjeta from "../componentes/Tarjeta";
import ListaRepositorios from "../componentes/ListaRepositorios";

const Usuario = () => {
  const dispatch = useDispatch();
  const { isLoading, usuario, error } = useSelector((state) => state.usuarios);
  const { login } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    serviciosUsuarios.getUsuario(dispatch, login);
    if (error) navigate("/error");
  }, [dispatch, login, error, navigate]);

  useEffect(() => {
    serviciosUsuarios.getRepositorios(dispatch, login);
    if (error) navigate("/error");
  }, [dispatch, login, error, navigate]);

  const volverPaginaInicio = () => {
    navigate("/");
  };

  if (isLoading)
    return (
      <Container>
        <Spinner />
      </Container>
    );
  else
    return (
      <Container>
        <BotonVolver onClick={volverPaginaInicio}>Volver</BotonVolver>
        <InfoPersonal>
          <Imagen>
            <img src={usuario?.avatar_url} alt="imagen del usuario" />
            <ImagenPie>
              <h3>{usuario?.name}</h3>
              <p>{usuario?.login}</p>
            </ImagenPie>
          </Imagen>
          <InfoDatos>
            <InfoNombre>
              <h2>{usuario?.name || usuario?.login}</h2>
              <Disponible disponible={usuario?.hireable}>Disponible</Disponible>
            </InfoNombre>
            <p>{usuario?.bio}</p>
            <Enlace href={usuario?.html_url || "#"} target="_blank">
              Visitar Perfil Github
            </Enlace>
            <InfoTarjetas>
              <Tarjeta
                texto="Localización"
                dato={usuario?.location || "No disponible"}
              />
              <Tarjeta
                texto="Website"
                dato={usuario?.email || usuario?.blog || "No disponible"}
              />
              <Tarjeta
                texto="Twitter"
                dato={usuario?.twitter_username || "No disponible"}
              />
            </InfoTarjetas>
          </InfoDatos>
        </InfoPersonal>
        <Estadisticas>
          <Tarjeta texto="Seguidores" dato={usuario?.followers} />
          <Tarjeta texto="Siguiendo" dato={usuario?.following} />
          <Tarjeta texto="Repos Públicos" dato={usuario?.public_repos} />
          <Tarjeta texto="Gists Públicos" dato={usuario?.public_gists} />
        </Estadisticas>
        <ListaRepositorios />
      </Container>
    );
};

export default Usuario;

// Styled Components
const Container = styled.div`
  position: relative;
  max-width: 1200px;
  min-height: 610px;
  height: calc(100vh - 90px);
  margin: 0 auto;
  padding: 30px 20px 20px 20px;
  gap: 20px;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

const BotonVolver = styled.button`
  position: absolute;
  top: 0px;
  left: 20px;
  border: none;
  border-radius: 3px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  padding: 2px 10px;
  background: #1778f2;
  color: #eee;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const InfoPersonal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
  background: #e3edf7;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Imagen = styled.div`
  position: relative;

  & img {
    width: 200px;
    border-radius: 3px;
  }
`;

const ImagenPie = styled.div`
  position: absolute;
  bottom: 15px;
  left: 10px;
  padding: 2px 5px;
  border-radius: 3px;
  background: #eee;
  opacity: 0.8;

  & h3 {
    font-size: 14px;
  }

  & p {
    font-size: 12px;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    & h3,
    p {
      font-size: 10px;
    }
  }
`;

const InfoDatos = styled.div`
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;

  & p {
    font-size: 14px;
    color: #555;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    margin-left: 0px;
    & p {
      font-size: 10px;
    }
  }
`;

const InfoNombre = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    & h2 {
      font-size: 12px;
    }
  }
`;

const Disponible = styled.span`
  font-size: 12px;
  border-radius: 10px;
  padding: 2px 5px;
  margin-left: 10px;
  background: ${(props) => (props.disponible ? "green" : "red")};
  opacity: 0.5;
  color: #fff;

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    font-size: 8px;
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
    font-size: 10px;
    align-self: center;
  }
`;

const InfoTarjetas = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Estadisticas = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
  background: #e3edf7;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

  & div {
    flex: 1;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
`;
