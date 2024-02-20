import React from 'react'
import cerrar from "../img/cerrar.svg"

const Modal = ({setModal}) => {

const ocultarModal = () =>{
    setModal(false)
}

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
            <img src={cerrar} alt="icono cerrar"
            onClick={ocultarModal} />     
        </div>
    </div>
  )
}

export default Modal
