import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class LargePhotoModal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModal);
  }

  onCloseModal = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modal>
          <img src={this.props.largeImg} alt="" />
        </Modal>
      </Overlay>,
      modalRoot
    );
  }
}

export default LargePhotoModal;
