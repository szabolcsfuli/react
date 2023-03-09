import css from "./Modal.module.css";
import { createRef, Fragment } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const { userName, age } = props.userDetails;
  const modalRef = createRef();
  let errorMsg = [];

  if (!userName && userName !== null) {
    errorMsg.push("Username is not filled out!");
  }
  if (age !== null) {
    if (age < 0) {
      errorMsg.push("Nevagative value is not allowed!");
    } else if (age * 1 === 0) {
      errorMsg.push("Age is not filled out!");
    }
  }
  if (modalRef.current) {
    modalRef.current.style.display = "block";
  }

  return (
    <Fragment>
      {errorMsg.length > 0
        ? ReactDOM.createPortal(
            <div ref={modalRef} className={css.modal}>
              <div className={css['modal-content']}>
                <span className={css.close} onClick={props.closeModal}>
                  &times;
                </span>
                <div>
                  {errorMsg.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              </div>
            </div>,
            document.getElementById("error-modal")
          )
        : null}
    </Fragment>
  );
};

export default Modal;