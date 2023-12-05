import React from "react";

const QuizCard = ({ quiz: {topic, level, time, questions} }) => {
  return (
    <div>
      <h2>{topic}</h2>
      <div>
        <p>Level: {level}</p>
        <p>Time: {time} min</p>
        <p>Questions: {questions}</p>
      </div>
    </div>
  );
};

export default QuizCard;
