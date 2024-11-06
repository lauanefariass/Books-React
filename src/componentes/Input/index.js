
import styled from "styled-components";


const Input = styled.input`
  border: 1px solid #fff;
  background: transparent;
  padding: 10px 20px; /* Ajuste o padding para uma visualização melhor */
  border-radius: 50px;
  width: 100%;
  max-width: 400px; /* Permite uma largura mais responsiva */
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  outline: none;

  &::placeholder {
    color: #fff;
    font-size: 16px;
  }
`;

export default Input;
