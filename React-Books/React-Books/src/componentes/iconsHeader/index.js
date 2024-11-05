import "../iconsHeader/style.css";
import perfil from "../../img/perfil.svg";
import bag from "../../img/sacola.svg";

const icons = [perfil, bag];

function IconsHeader() {
  return (
    <ul className="icon">
      {icons.map((icon) => (
        <li className="icons">
          <img src={icon} alt="icon" />
        </li>
      ))}
    </ul>
  );
}

export default IconsHeader;
