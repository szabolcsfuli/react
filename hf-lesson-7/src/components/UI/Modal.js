import { Fragment } from 'react'
import { createPortal } from 'react-dom'

import classes from './Modal.module.css'

const BackDrop = () => {
  return <div className={classes.backdrop}></div>
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const Modal = props => {
  const portalElement = document.getElementById('overlays')

  return (
    <Fragment>
      {createPortal(<BackDrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal
