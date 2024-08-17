import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

const Modal = ({children}) => {
    return ReactDom.createPortal(
        <div className={"modal-content"}>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export {Modal}