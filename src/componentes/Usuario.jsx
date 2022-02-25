import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Usuario = ({ usuario: { login, avatar_url } }) => {
  return (
    <Card>
      <CardAvatar src={avatar_url} />
      <CardInfo>
        <h4>{login}</h4>
        <Link to={`/usuario/${login}`}>Visitar Perfil</Link>
      </CardInfo>
    </Card>
  );
};

export default Usuario;

// Styled Components
const Card = styled.div`
  width: 320px;
  height: 100px;
  padding: 10px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e3edf7;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    width: 260px;
    height: 80px;
  }
`;

const CardAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  overflow-x: hidden;

  & h4 {
    font-size: 14px;
  }

  & a {
    margin-top: 10px;
    padding: 4px 8px;
    text-decoration: none;
    font-size: 10px;
    border-radius: 3px;
    border: 1px solid #aaa;
    color: #666;
    transition: 0.3s ease-in-out;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  }

  & a:hover {
    border: 1px solid #1778f2;
    color: #1778f2;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    & h4 {
      font-size: 12px;
    }

    & a {
      font-size: 8px;
    }
  }
`;
