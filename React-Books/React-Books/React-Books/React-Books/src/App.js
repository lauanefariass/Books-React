import "./App.css";
import Logo from "./componentes/Logo/index";
import OptionHeader from "./componentes/optionHeader";
import IconsHeader from "./componentes/iconsHeader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OptionHeader />
        <IconsHeader />
      </header>
    </div>
  );
}

export default App;
