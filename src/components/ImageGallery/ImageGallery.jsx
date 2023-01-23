import React from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ items, id }) => {
  return (
    <ImageGalleryList>
      <ImageGalleryItem items={items} />
    </ImageGalleryList>
  );
};

export default ImageGallery;
