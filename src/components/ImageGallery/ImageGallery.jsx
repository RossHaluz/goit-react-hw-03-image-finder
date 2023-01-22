import React, { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import FetchPhotosGallery from 'components/api/api';
import ImageLoader from 'components/Loader/Loader';
import LoadMore from 'components/LoadMoreBtn';

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
    if (
      prevNameSearch !== nextNameSearch ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
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

  onChangePageNumber = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { items, loading } = this.state;
    return (
      <ImageGalleryList>
        {loading && <ImageLoader />}
        <ImageGalleryItem items={items} />
        {items.length > 11 && <LoadMore addPage={this.onChangePageNumber} />}
      </ImageGalleryList>
    );
  }
}

export default ImageGallery;
