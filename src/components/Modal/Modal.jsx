import { useEffect } from 'react';
import { Overlay, Modal } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
 
const LargePhotModal = ({ largeImg, onClose }) => {

    useEffect(() => {
        const onCloseModal = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', onCloseModal);
    
        return () => {
            window.removeEventListener('keydown', onCloseModal);
        };
    }, [onClose]);

    const handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <Modal>
                <img src={largeImg} alt="" />
            </Modal>
        </Overlay>,
        modalRoot
    );
};

export default LargePhotModal;