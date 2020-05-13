import React from 'react'

const Modal = ( { onClose = () => {}, children } ) => {

  const handleOutSideClick = e => {
    if( e.target.id === "modal") onClose()
  }

  return (
  <div id="modal" className="modal" onClick={ handleOutSideClick }>
    <div className="container">
      <button className="close" onClick={ onClose }/>
      <div className="content"> {children} </div>
    </div>
  </div>)
}

export default Modal