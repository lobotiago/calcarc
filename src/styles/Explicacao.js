import styled from 'styled-components';

export const Explicacao = styled.div`
  h1 {
    margin: 40px 0;
  }
  h2 {
    font-size: 26px;
    font-family: 'Roboto';
    text-align: center;
    margin: 0 auto 10px;
  }
  p {
    font-size: 18px;
    font-family: 'Roboto';
    margin-bottom: 20px;
  }
  @media screen and (min-width: 800px) {
    div {
      max-width: 70%;
    }
  }
`