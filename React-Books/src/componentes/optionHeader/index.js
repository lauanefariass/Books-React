import "../optionHeader/style.css";

const textOption = ["Categories", "Library", "Favorites"];

function optionHeader() {
  return (
    <ul className="options">
      {textOption.map((text) => (
        <li className="option">
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}
export default optionHeader;
