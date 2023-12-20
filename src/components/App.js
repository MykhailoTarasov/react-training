
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage.js'))
const CreateQuizPage = lazy(() => import('../pages/CreateQuizPage.js'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.js'))
const QuizDetailsPage = lazy(() => import('../pages/QuizDetailsPage'))
const QuizzesPage = lazy(() => import('../pages/QuizzesPage'))

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="create" element={<CreateQuizPage />} />
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="quizzes/:quizId" element={<QuizDetailsPage />}>
            <Route path="a" element={<div>A</div>} />
            <Route path="b" element={<div>B</div>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    );
  };

export default App;
