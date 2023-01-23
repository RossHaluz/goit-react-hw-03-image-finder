import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from 'components/Searchbar';
import { Container } from './App.styled';
import ImageGallery from 'components/ImageGallery';
import FetchPhotosGallery from 'components/api/api';
import LoadMore from 'components/LoadMoreBtn';
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
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({});
      console.log('Змінили імя');
      const images = await FetchPhotosGallery(this.state.name, this.state.page);
      console.log(images);
      this.setState({ items: images.hits });
    }
  }

  onChangePage = () => {
    this.setState(prevPage => ({ page: prevPage.page + 1 }));
  };

  getNameSerch = name => {
    if (name === '') {
      toast.error('Ведіть текст у пошук!');
      return;
    }
    this.setState({ name });
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.getNameSerch} />
        <ImageGallery items={items} />
        {items.length > 11 && <LoadMore changePage={this.onChangePage} />}
        <Toaster position="top-right" />
      </Container>
    );
  }
}

export default App;