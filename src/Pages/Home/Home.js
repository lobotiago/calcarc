import React from 'react';
import { Container } from '@material-ui/core';
import HeaderMenu from '../../Layouts/Header';

import { CorpoHome, CardLink } from '../../styles/home';

// import logo from '../../images/logo.svg';
import teto from '../../images/roof.svg';
import rampa from '../../images/ramp.svg';
import escada from '../../images/stairs.svg';

function Main() {
  return (
    <>
      <HeaderMenu />
      <Container>
        <CorpoHome>
          <CardLink to="/inclinacao-do-telhado">
            <h1>Inclinação do telhado</h1>
            <img src={teto} alt=""/>
          </CardLink>
          <CardLink to="/inclinacao-da-rampa">
            <h1>Inclinação da rampa</h1>
            <img src={rampa} alt=""/>
          </CardLink>
          <CardLink to="/calculo-de-escada">
            <h1>Cálculo de escada</h1>
            <img src={escada} alt=""/>
          </CardLink>
        </CorpoHome>
      </Container>
    </>
  );
}

export default Main;
