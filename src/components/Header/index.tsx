import React from "react";

import { Container, Rounded, ShakeHandsIcon } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Rounded>
        <span>
          <ShakeHandsIcon />
        </span>
      </Rounded>
      <span className="title">
        Mercado
        <br />
        Clone
      </span>
    </Container>
  );
};

export default Header;
