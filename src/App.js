import Search from "./componentes/Search"

import Header from "./componentes/header";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #ffa726, #ff7043);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
    </AppContainer>
  );
}

export default App;
