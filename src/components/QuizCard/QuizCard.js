import { HiTrash } from 'react-icons/hi';
import Modal from 'react-modal';
import { Container, InfoWrapper, Info, ButtonBox } from './QuizCard.Styled';
import { Component } from 'react';

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

class QuizCard extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const {
      quiz: { id, topic, level, time, questions },
      onDelete,
    } = this.props;
    return (
      <Container level={level}>
        <h2>{topic}</h2>
        <ButtonBox>
          <button onClick={() => onDelete(id)}>
            <HiTrash />
          </button>
          <button onClick={this.openModal}>Open modal</button>
        </ButtonBox>

        <InfoWrapper>
          <Info>Level: {level}</Info>
          <Info>Time: {time} min</Info>
          <Info>Questions: {questions}</Info>
        </InfoWrapper>

        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <p>{topic}</p>
        </Modal>
      </Container>
    );
  }
}

export default QuizCard;
