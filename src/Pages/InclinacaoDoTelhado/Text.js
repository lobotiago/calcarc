import React from 'react';
import HeaderMenu from '../../Layouts/Header';
import { Explicacao } from '../../styles/Explicacao';
import { Container } from '@material-ui/core';

// import { Container } from './styles';

function ExplicacaoTelhado() {
  return (
    <>
      <Explicacao>
        <Container>
          <h1>Como calcular a Inclinação de um telhado, Passo a Passo!</h1>
          <p>
            Calcular a inclinação de um telhado pode parecer simples, mas sem conhecer a fundo os conceitos de inclinação e o que determina a inclinação mínima de um telhado, essa missão se torna praticamente impossível. Agora aqui eu vou te mostrar como calcular a inclinação de qualquer telhado, mesmo sem a ferramenta acima.
          </p>
          <p>
            O motivo de calcular a inclinação do telhado é para determinar como será todo o projeto de cobertura, definir a altura da cumeeira, o comprimento do Pendural e a área de cobertura.
          </p>
          <p>
            <b>O que determina a inclinação do telhado é o tipo de telha que será utilizada.</b> As telhas podem ser de cerâmica (barro), concreto, fibrocimento, vidro, metálicas, galvanizadas, ecológicas (fibras naturais ou materiais reciclados), de policarbonato e etc. São os fabricantes das telhaas que dizem qual é a <b>inclinação mínima e máxima</b> para cada tipo de telha!
          </p>
          <p>
            <i><b>Dica 01:</b> Sempre verifique as inclinações recomendadas pelo fabricante da telha. Se você é um estudante da área, tenha essa dica para toda sua carreira.</i>
          </p>
          
          {/* TO DO: ADS */}

          <h1>Como calcular a inclinação do telhado</h1>
          <p>
            A inclinação dos telhados é medida em porcentagem (ou percentual). Você provavelmente já ouviu alguem falar:
          </p>
          <h2>
            "O telhado tem inclinação de 10%" ou
          </h2>
          <h2>
            "O telhado tem inclinação de 30%".
          </h2>
          <br/>
          <p>
            Isso significa que um telhado com 10% de inclinação precisa de 10cm na vertical para cada 100cm (1 metro) na horizontal.
          </p>

          {/* TO DO: ADS */}

          <h1>Normas técnicas de Referência</h1>
          <p>
            NBR 15575-5:2013 - Edificações habitacionais - Desempenho - Requisitos para os sistemas de coberturas
          </p>
          <p>
            NBR 13858-1:1997 - Telhas de concreto - Projeto e execução de telhados
          </p>
          <p>
            NBR 7190:1997 - Projeto de estruturas de madeira
          </p>

        </Container>
      </Explicacao>
    </>
  );
}

export default ExplicacaoTelhado;