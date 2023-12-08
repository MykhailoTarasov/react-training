import React from 'react';
import { Container, Info, InfoWrapper } from './QuizCard.Styled';

const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <Container level={level}>
      <h2>{topic}</h2>
      <button onClick={() => onDelete(id)}>Delete</button>
      <InfoWrapper>
        <Info>Level: {level}</Info>
        <Info>Time: {time} min</Info>
        <Info>Questions: {questions}</Info>
      </InfoWrapper>
    </Container>
  );
};

export default QuizCard;
