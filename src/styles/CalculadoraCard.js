import styled from 'styled-components';

export const CalculadoraCard = styled.div`
  display: flex;
  margin: 100px auto;
  background-color: #fff;
  flex-direction: column;
  width: max-content;
  max-width: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 60vh;

  p {
    color: #FF0000;
    margin: 15px 0 10px
  }

  .MuiInputAdornment-positionEnd img {
    width: 26px;
  }

  .MuiTextField-root {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`

export const CalcButton = styled.button`
  margin-bottom: 16px;
  background-color: #700098;
  padding: 16px;
  color: #fff;
  font-family: 'Roboto';
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s opacity;
  &:hover {
    opacity: 0.8;
  }
`