import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CorpoHome = styled.div`
  max-width: 100%;
  width: max-content;
  display: flex;
  margin: 100px auto;
  flex-direction: column;
`

export const CardLink = styled(Link)`
  background-color: #fff;
  max-width: calc(100vw - 32px);
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #dadada;
  }
  h1 {
    color: #000;
    margin: 0;
    margin-right: 20px;
  }
  img {
    width: 40px;
  }
`