import { fetchQuizzesById } from 'api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export default function QuizDetailsPage() {
  const params = useParams();
  const [quiz, setQuiz] = useState();
  const location = useLocation();

  useEffect(() => {
    async function getQuiz() {
      try {
        const fetchedQuiz = await fetchQuizzesById(params.quizId);
        setQuiz(fetchedQuiz);
      } catch (error) {}
    }

    getQuiz();
  }, [params.quizId]);

  return (
    <div>
      <Link to={location.state?.from ?? '/quizzes'}>
        Back to quizzes
      </Link>
      {quiz && (
        <>
          <p>{quiz.topic}</p>
          <p>{quiz.level}</p>
        </>
      )}

      <Outlet />
    </div>
  );
}
