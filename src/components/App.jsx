import React, { Component } from 'react';
import initialQuizItems from './data.json';

import QuizList from './QuizList/QuizList';
import SearchBar from './SearchBar/SearchBar';
import QuizForm from './QuizForm/QuizForm';

class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topicFilter: '',
      levelFilter: 'all',
    },
  };

  changeFilter = (key, value) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [key]: value,
      },
    }));
  };

  render() {
    const { quizItems, filters } = this.state;
  const visibleItems = quizItems.filter(quiz => {
    if (filters.level === "all") {
      return true;
    }
    return quiz.level === filters.level;
  });

    return (
      <div>
        <QuizForm />
        <SearchBar filters={filters} onChangeFilter={this.changeFilter} />
        <QuizList items={visibleItems} />
      </div>
    );
  }
}

export default App;
