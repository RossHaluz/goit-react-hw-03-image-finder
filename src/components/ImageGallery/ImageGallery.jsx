import React, { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import FetchPhotosGallery from 'components/api/api';

class ImageGallery extends Component {
  state = {
    items: [],
    page: 1,
    error: null,
    loading: false,
  };

  async componentDidUpdate(prevProp, prevState) {
    const prevNameSearch = prevProp.nameSerach;
    const nextNameSearch = this.props.nameSerach;
    if (prevNameSearch !== nextNameSearch) {
      this.setState({ loading: true, page: 1, items: [] });
      try {
        const images = await FetchPhotosGallery(
          nextNameSearch,
          this.state.page
        );
        this.setState({ items: images.hits });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { items, loading } = this.state;
    return (
      <ImageGalleryList>
        {loading && <p>Loading...</p>}
        <ImageGalleryItem items={items} />
      </ImageGalleryList>
    );
  }
}

export default ImageGallery;
