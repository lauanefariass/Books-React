import "../../componentes/Logo/style.css";
import logo from "../../img/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="logo"></img>
      <p>
        <strong>React</strong> Books
      </p>
    </div>
  );
}
export default Logo;
