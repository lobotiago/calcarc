import React, { Component } from 'react';

import HeaderMenu from '../../Layouts/Header'
import ExplicacaoTelhado from './Text'
import { CalculadoraCard, CalcButton } from '../../styles/CalculadoraCard'
import { TextField, InputAdornment, Container } from '@material-ui/core';

import percent from '../../images/percent.svg'
import centimeter from '../../images/centimeter.svg'
// import { Container } from './styles';

export default class InclinacaoDoTelhado extends Component {
  state = {
    altura: 0,
    base: null,
    inclinacao: null
  }

  handleAlturaChange = e => {
    this.setState({ inclinacao: e.target.value })
  }
  handleBaseChange = e => {
    this.setState({ base: e.target.value })
  }

  handleCalc = e => {
    let inclinacao = parseInt(this.state.inclinacao)
    let base = parseInt(this.state.base)
    let altura = (inclinacao / 100) * base
    if (!isNaN(altura)) {
      this.setState({ altura: altura })
    } else {
      this.setState({ altura: 0 })
    }
  }


  render() {
    const { altura, base, inclinacao } = this.state

    return (
      <>
        <HeaderMenu />
        {/* TO DO: ADS */}
        <Container>
          <CalculadoraCard>
            <h1>Cálculo de inclinação do telhado</h1>
            <p>*consulte a inclinação mínima com o fabricante do telhado</p>
            <TextField
              id="inclinacao"
              value={inclinacao}
              label="Inclinação"
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <img src={percent} alt=""/>
                </InputAdornment>
              }}
              variant="outlined"
              onChange={this.handleAlturaChange}
            />
            <TextField
              id="base"
              value={base}
              label="Base"
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <img src={centimeter} alt=""/>
                </InputAdornment>
              }}
              variant="outlined"
              onChange={this.handleBaseChange}
            />
            <CalcButton onClick={this.handleCalc}>
              Calcular
            </CalcButton>
            <TextField
              disabled
              id="altura"
              value={altura}
              label="Altura"
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <img src={centimeter} alt=""/>
                </InputAdornment>,
                readOnly: true
              }}
              variant="outlined"
            />
          </CalculadoraCard>
        </Container>
        {/* TO DO: ADS */}

        <ExplicacaoTelhado />
      </>
    ) 
  }
}