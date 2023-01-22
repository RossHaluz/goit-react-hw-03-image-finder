import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {};

  render() {
    const { items } = this.props;
    return (
      <>
        {items.map(({ id, webformatURL }) => {
          return (
            <li key={id}>
              <img src={webformatURL} alt="" />
            </li>
          );
        })}
      </>
    );
  }
}

export default ImageGalleryItem;
