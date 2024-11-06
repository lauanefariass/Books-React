import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import Books from "./Books";

const SearchContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
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

const BookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 20px; /* Espaçamento entre a imagem e o nome */
`;

const BookImage = styled.img`
  width: 150px; /* largura padrão para todas as imagens */
  height: 200px; /* altura padrão para todas as imagens */
  object-fit: cover;
  border-radius: 8px;
`;

const BookName = styled.h4`
  color: #fff;
  font-size: 24px;
`;

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (evento) => {
    const Text = evento.target.value.trim();

    if (Text === "") {
      setSearchResults([]);
    } else {
      const Results = Books.filter((book) =>
        book.name.toLowerCase().startsWith(Text.toLowerCase())
      );
      setSearchResults(Results);
    }
  };

  return (
    <SearchContainer>
      <Title>Do you already know where to start?</Title>
      <SubTitle>Search a book</SubTitle>
      <Input placeholder="Write your next reading" onChange={handleSearch} />
      <div>
        {searchResults.map((book) => (
          <BookContainer key={book.id}>
            <BookImage src={book.src} alt={book.name} />
            <BookName>{book.name}</BookName>
          </BookContainer>
        ))}
      </div>
    </SearchContainer>
  );
}

export default Search;
