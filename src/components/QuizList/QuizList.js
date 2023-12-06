import React from "react";

import QuizCard from '../QuizCard/QuizCard';
import { List, ListItem } from "./QuizList.Styled";

const QuizList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <QuizCard quiz={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};

export default QuizList;
