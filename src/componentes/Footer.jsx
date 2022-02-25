import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>© 2022 - alfonsoauzmendia@gmail.com</p>
    </Container>
  );
};

export default Footer;

// Styled Components
const Container = styled.footer`
  max-width: 1200px;
  height: 40px;
  margin: 0 auto;
  background: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  & p {
    width: 100%;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
