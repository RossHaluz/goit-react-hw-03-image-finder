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
    const { name, page } = this.state;
    if (prevState.name !== name || prevState.page !== page) {
      this.setState({ items: [], error: null });
      try {
        const images = await FetchPhotosGallery(name, page);
        if (images.hits.length === 0) {
          throw new Error();
        }
        this.setState(prev => ({ items: [...prev.items, ...images.hits] }));
      } catch (error) {
        this.setState({ error });
      }
    }
    if (prevState.name !== name) {
      this.setState({ page: 1 });
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
    const { items, error } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.getNameSerch} />
        <ImageGallery items={items} />
        {error && <p>Щось пішло не так :( Оновіть сторінку.</p>}
        {items.length > 11 && <LoadMore changePage={this.onChangePage} />}
        <Toaster position="top-right" />
      </Container>
    );
  }
}

export default App;
