import "../header/style.css";
import Logo from "../Logo";
import OptionHeader from "../optionHeader";
import IconsHeader from "../iconsHeader";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OptionHeader />
      <IconsHeader />
    </header>
  );
}
export default Header;
