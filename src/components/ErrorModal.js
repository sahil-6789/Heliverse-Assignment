import React from 'react';
import CardButton from './CardButton';
import  './ErrorModal.css';
import { useDispatch } from 'react-redux';
import { teamActions } from '../store/team-slice';
import ModalCard from './ModalCard';

const Modal = (props) => {
const dispatch=useDispatch();

const removeModalHandler=(event )=>{
event.preventDefault();
dispatch(teamActions.toggle());
};

  return (
    <div>
    <div className="backdrop" onClick={removeModalHandler} />
    <ModalCard className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <CardButton onClick={removeModalHandler}>Okay</CardButton>
      </footer>
    </ModalCard>
  </div>
  );
};

export default Modal;