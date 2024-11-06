import React, { useState } from "react";
import styled from "styled-components";
import { Books } from "../LastBooks/dataNew";
import PeterImage from "../../img/peter.jpeg";

const Section = styled.section`
  padding: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #f7f7f7;
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`;

const BooksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const BookImage = styled.img`
  width: 130px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;

const Card = styled.div`
  margin-top: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 50px;
  max-width: 350px;
  margin-top: 150px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const StyledCardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #ff7f00;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e67200;
  }
`;

function LastBooks() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Section>
      <Title>Latest Releases</Title>
      <BooksContainer>
        {Books.map((book) => (
          <BookImage key={book.id} src={book.src} alt={book.name} />
        ))}
      </BooksContainer>

      <Card>
        <StyledCardImage src={PeterImage} alt="Peter and the Wolf" />

        <CardTitle>Peter and the Wolf</CardTitle>
        <CardDescription>
          {showFullDescription
            ? "This classic tale brings readers into the adventurous world of young Peter, who lives on the edge of a deep, dark forest. One day, he decides to leave the safety of his home to explore, encountering a cast of colorful characters—a bird, a duck, a cat, and, most dangerously, a cunning wolf. Through courage, cleverness, and a bit of teamwork, Peter learns valuable lessons about bravery and friendship. Perfect for readers who enjoy timeless stories with moral lessons, Peter and the Wolf is a charming fable that has captivated audiences for generations."
            : "This classic tale brings readers into the adventurous world of young Peter, who lives on the edge of a deep, dark forest..."}
        </CardDescription>
        <Button onClick={toggleDescription}>
          {showFullDescription ? "Show Less" : "Learn More"}
        </Button>
      </Card>
    </Section>
  );
}

export default LastBooks;
