import React from 'react';
import {Container, Header, Titulo, BemVindoH1} from './styled.js';

function App() {
  return (
    <Container>
      <Header>
       <Titulo>
         Meu projeto com styled
       </Titulo>
      </Header>
      <BemVindoH1 cor='0000FF' tam={20}>
        Olá, tudo bem?
      </BemVindoH1>
    </Container>
  );
}
export default App;
/* 
  <div className="container">
      <header className="header">
        <a className="titulo">Projeto Styled</a>
      </header>
      <h1>Bem vindo(a) ao sistema</h1>
    </div>
*/