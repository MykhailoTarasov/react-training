import React, { Component } from "react";
import initialQuizItems from "./data.json";

import QuizList from "./QuizList/QuizList";

class App extends Component {
  state = {
    quizItems: initialQuizItems,
  };

  render() {
    const { quizItems } = this.state;

    return (
      <div>
        <QuizList items={quizItems} />
      </div>
    );
  }
}

export default App;
