import Logo from "../Logo";
import OptionHeader from "../optionHeader";
import IconsHeader from "../iconsHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OptionHeader />
      <IconsHeader />
    </HeaderContainer>
  );
}
export default Header;
