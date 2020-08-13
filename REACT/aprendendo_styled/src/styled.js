import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: cadetblue;
  justify-content: center;
  align-items: center;
  display: flex;
  /*
  *** TAMBÉM PODE FAZER ASSIM ***
  a{
    font-size: 35px;
    color: #fff;
  }
  */
`;

export const Titulo = styled.a`
  font-size: 35px;
  color: #fff;
`;

export const BemVindoH1 = styled.h1`
display: flex;
justify-content: center;
  align-items: center;
font-size: ${props => `${props.tam}px`};
color: ${props => `#${props.cor}`};
`;


