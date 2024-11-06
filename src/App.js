import React from "react";
import styled from "styled-components";
import Header from "../src/componentes/header";
import SearchBar from "../src/componentes/Search";
import LastBooks from "../src/componentes/LastBooks";

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

      <LastBooks />
    </AppContainer>
  );
}

export default App;
