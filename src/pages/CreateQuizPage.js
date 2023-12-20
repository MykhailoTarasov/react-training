import QuizForm from 'components/QuizForm/QuizForm';
import { useState } from 'react';
import { createQuiz } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function CreateQuizPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      await createQuiz(newQuiz);
      toast.success('Создали квиз! Вернитесь на список чтобы увидеть!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link to="/quizzes">
        <button>Back to quizzes</button>
      </Link>
      <QuizForm onAdd={addQuiz} />
      <Toaster position="top-right" />
      {loading && <div>ADDING QUIZ...</div>}
      {error && <div>OOPS! AN ERROR!</div>}
    </div>
  );
}
