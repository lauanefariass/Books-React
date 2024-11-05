import styled from "styled-components";

const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;
const Options = styled.ul`
  display: flex;
`;

const textOption = ["Categories", "Library", "Favorites"];

function optionHeader() {
  return (
    <Options>
      {textOption.map((text) => (
        <Option>
          <p>{text}</p>
        </Option>
      ))}
    </Options>
  );
}
export default optionHeader;
