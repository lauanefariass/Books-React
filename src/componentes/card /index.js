import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0px;
  max-width: 350px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #ff7f00;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #e67200;
  }
`;

const CardComponent = ({ title, description, img }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  return (
    <Card>
      {img && <Image src={img} alt={title} />}
      <Title>{title}</Title>
      <Description>
        {showFullDescription ? description : `${description.slice(0, 100)}...`}
      </Description>
      <Button onClick={toggleDescription}>
        {showFullDescription ? "Show Less" : "Learn More"}
      </Button>
    </Card>
  );
};

export default CardComponent;
