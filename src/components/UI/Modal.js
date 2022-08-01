import React, { Fragment } from "react";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCartClose} />;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <BackDrop onCartClose={props.onCartClose} />
      <ModalOverLay>{props.children}</ModalOverLay>
    </Fragment>
  );
};

export default Modal;
