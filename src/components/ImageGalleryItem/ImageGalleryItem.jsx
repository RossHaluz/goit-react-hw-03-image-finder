import React, { Component } from 'react';
import LargePhotoModal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    largeImage: '',
    isOpen: false,
  };

  onShowLargeImg = img => {
    this.setState(state => ({ isOpen: !state.isOpen }));
    this.setState({ largeImage: img });
  };

  render() {
    const { items } = this.props;
    const { isOpen, largeImage } = this.state;
    return (
      <>
        {items.map(({ webformatURL, largeImageURL, id }) => {
          return (
            <li key={id} onClick={() => this.onShowLargeImg(largeImageURL)}>
              <img src={webformatURL} alt="" width={350} height={350} />
            </li>
          );
        })}
        {isOpen && (
          <LargePhotoModal
            largeImg={largeImage}
            onClose={this.onShowLargeImg}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
