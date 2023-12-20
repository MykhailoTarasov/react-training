import { NavLink } from "react-router-dom";


export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink >
      <NavLink  to="/create">Create quiz</NavLink>
      <NavLink  to="/quizzes">Quiz list</NavLink>
    </nav>
  );
};