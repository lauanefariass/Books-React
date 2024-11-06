import React from "react";
import styled from "styled-components";
import Header from "../src/componentes/header"; // Importe o header
import SearchBar from "../src/componentes/Search"; // Importe o componente de input
import LastBooks from "../src/componentes/LastBooks"; // ou o caminho correto para o seu componente

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(45deg, #ffa726, #ff7043);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SearchBar />
      {/* Outros componentes que você já tinha */}
      <LastBooks />
    </AppContainer>
  );
}

export default App;
