import React, { Component } from 'react';
import initialQuizItems from './data.json';
import { nanoid } from 'nanoid';

import QuizList from './QuizList/QuizList';
import SearchBar from './SearchBar/SearchBar';
import QuizForm from './QuizForm/QuizForm';

class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  componentDidMount() {
    const savedFilters = localStorage.getItem('quiz-filters');
    if (savedFilters !== null) {
      this.setState({
        filters: JSON.parse(savedFilters),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem('quiz-filters', JSON.stringify(this.state.filters));
    }
  }

  addQuiz = newQuiz => {
    this.setState(prevState => ({
      quizItems: [...prevState.quizItems, { ...newQuiz, id: nanoid() }],
    }));
  };

  deleteQuizItem = quizId => {
    this.setState(prevState => ({
      quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
    }));
  };

  changeFilter = (key, value) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [key]: value,
      },
    }));
  };

  resetFilters = () => {
    this.setState({
      filters: {
        topic: '',
        level: 'all',
      },
    });
  };

  getVisibleItems = () => {
    // Если topic содержится в topic квиза И если filter совпадает
    const { quizItems, filters } = this.state;

    return quizItems.filter(quiz => {
      const topicFilter = filters.topic.toLowerCase();
      const hasTopic = quiz.topic.toLowerCase().includes(topicFilter);

      if (filters.level === 'all') {
        return hasTopic;
      }

      return hasTopic && quiz.level === filters.level;
    });
  };

  render() {
    const { filters } = this.state;
    const visibleItems = this.getVisibleItems();

    return (
      <div>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar
          filters={filters}
          onChangeFilter={this.changeFilter}
          onReset={this.resetFilters}
        />
        <QuizList items={visibleItems} onDelete={this.deleteQuizItem} />
      </div>
    );
  }
}

export default App;
