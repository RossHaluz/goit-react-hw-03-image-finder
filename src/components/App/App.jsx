import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from 'components/Searchbar';
import { Container } from './App.styled';
import ImageGallery from 'components/ImageGallery';
import FetchPhotosGallery from 'components/api/api';
// import ImageLoader from 'components/Loader/Loader';

class App extends Component {
  state = {
    name: '',
    items: [],
    page: 1,
    error: null,
    loading: false,
  };

  async componentDidUpdate(prevProp, prevState) {
    if (prevState.name !== this.state.name) {
      console.log('Змінили імя');
      const images = await FetchPhotosGallery(this.state.name, this.state.page);
      console.log(images);
      this.setState({ items: images.hits });
    }
  }

  getNameSerch = name => {
    if (name === '') {
      toast.error('Ведіть текст у пошук!');
      return;
    }
    this.setState({ name });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.getNameSerch} />
        <ImageGallery items={this.state.items} />
        <Toaster position="top-right" />
      </Container>
    );
  }
}

export default App;
