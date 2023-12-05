import React from "react";

import QuizCard from '../QuizCard/QuizCard';

const QuizList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <QuizCard quiz={item}/>
        </li>
      ))}
    </ul>
  );
};

export default QuizList;
