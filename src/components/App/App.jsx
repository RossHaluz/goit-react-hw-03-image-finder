import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from 'components/Searchbar';
import { Container } from './App.styled';

class App extends Component {
  state = {
    name: '',
    items: [],
    page: 1,
  };

  getNameSerch = name => {
    if (name === '') {
      toast.error('Ведіть текст у пошук!');
      return;
    }
    console.log(name);
    this.setState({ name });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.getNameSerch} />
        <Toaster position="top-right" />
      </Container>
    );
  }
}

export default App;
