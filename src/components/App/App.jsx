import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from 'components/Searchbar';
import { Container } from './App.styled';
import ImageGallery from 'components/ImageGallery';
import FetchPhotosGallery from 'components/api/api';
import LoadMore from 'components/LoadMoreBtn';
// import { ImageLoader } from 'components/Loader/Loader';
import { ThreeDots } from 'react-loader-spinner';

class App extends Component {
  state = {
    name: '',
    items: [],
    page: 1,
    error: null,
    loading: false,
    totalHits: 0,
  };

  async componentDidUpdate(prevProp, prevState) {
    const { name, page } = this.state;
    if (prevState.name !== name || prevState.page !== page) {
      this.setState({ loading: true });
      try {
        const images = await FetchPhotosGallery(name, page);
        console.log(images);
        this.setState({ totalHits: images.totalHits });
        if (images.totalHits === 0) {
          throw new Error();
        }
        this.setState(prev => ({ items: [...prev.items, ...images.hits] }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
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
    this.setState({ name, items: [], error: null, page: 1 });
  };

  render() {
    const { items, error, loading, totalHits } = this.state;
    const isShowBtn = items.length < totalHits;
    return (
      <Container>
        <Searchbar onSubmit={this.getNameSerch} />
        <ImageGallery items={items} />
        {loading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#3f51b5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ display: 'block', margin: '0 auto' }}
            wrapperClassName=""
            visible={true}
          />
        )}
        {error && <p>Щось пішло не так :( Оновіть сторінку.</p>}
        {isShowBtn && <LoadMore changePage={this.onChangePage} />}
        <Toaster position="top-right" />
      </Container>
    );
  }
}

export default App;
