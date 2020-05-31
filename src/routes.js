import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import InclinacaoDoTelhado from './Pages/InclinacaoDoTelhado';
import InclinacaoDaRampa from './Pages/InclinacaoDaRampa';
import CalculoDaEscada from './Pages/CalculoDaEscada';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inclinacao-do-telhado" exact component={InclinacaoDoTelhado} />
        <Route path="/inclinacao-da-rampa" exact component={InclinacaoDaRampa} />
        <Route path="/calculo-de-escada" exact component={CalculoDaEscada} />
      </Switch>
    </BrowserRouter>
  )
}