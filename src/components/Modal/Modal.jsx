import { Overlay, Modal } from'./Modal.styled';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
 class LargePhotModal extends Component {

    componentDidMount() { 
        window.addEventListener('keydown', this.onCloseModal);
    }

    componentWillUnmount() { 
        window.removeEventListener('keydown', this.onCloseModal);
    }

    onCloseModal = event => { 
        if (event.code === 'Escape') { 
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    };

    render() { 
        return createPortal (
            <Overlay onClick={this.handleBackdropClick}>
                <Modal>
                    <img src={this.props.largeImg} alt="" />
                    </Modal>
            </Overlay>,
            modalRoot
        );
    }
 }

export default LargePhotModal;