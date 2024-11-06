// src/componentes/Search/Search.js

import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import Books from "./Books"; // Importando `Books` corretamente

const SearchContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Search() {
  const [searchResults, setSearchResults] = useState([]); // Mudança de nome

  return (
    <SearchContainer>
      <Title>Do you already know where to start?</Title>
      <SubTitle>Search a book</SubTitle>
      <Input
        placeholder="Write your next reading"
        onBlur={(evento) => {
          const Text = evento.target.value;
          const Results = Books.filter((book) => book.name.includes(Text));
          setSearchResults(Results);
        }}
      />
      <div>
        {searchResults.map((book) => (
          <div key={book.id}>
            <h4>{book.name}</h4>
            <img src={book.src} alt={book.name} />
          </div>
        ))}
      </div>
    </SearchContainer>
  );
}

export default Search;
