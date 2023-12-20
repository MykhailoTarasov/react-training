import { HiTrash } from 'react-icons/hi';
import Modal from 'react-modal';
import { Container, InfoWrapper, Info, ButtonBox } from './QuizCard.Styled';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container level={level}>
      <Link to={`/quizzes/${id}`} state={{ from: location }}>
        <h2>{topic}</h2>
      </Link>

      <ButtonBox>
        <button onClick={() => onDelete(id)}>
          <HiTrash />
        </button>
        <button onClick={openModal}>Open modal</button>
      </ButtonBox>

      <InfoWrapper>
        <Info>Level: {level}</Info>
        <Info>Time: {time} min</Info>
        <Info>Questions: {questions}</Info>
      </InfoWrapper>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <p>{topic}</p>
      </Modal>
    </Container>
  );
};

export default QuizCard;
