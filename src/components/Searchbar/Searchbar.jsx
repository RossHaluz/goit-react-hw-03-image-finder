import React, { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

class Searchbar extends Component {
  state = {
    name: '',
  };

  onChangeInput = e => {
    this.setState({ name: e.currentTarget.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.onSubmitForm}>
          <SearchFormBtn type="submit">
            <FaSearch color="black" />
          </SearchFormBtn>
          <SearchFormInput
            type="text"
            value={this.state.name}
            onChange={this.onChangeInput}
            autocomplete="off"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
