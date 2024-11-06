import styled from "styled-components";

export const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "32px"};
  text-align: ${(props) => props.textAlign || "center"};
`;
