import {
  SearchbarHeader,
  SearchFrom,
  SearchFormButton,
  SearchFormInput,} from './Searchbar.styled';
import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa'



class Searchbar extends Component {
  state = {
    name: '',
  };

  onChangeInput = event => {
    this.setState({ name: event.currentTarget.value });
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name)
  };


  render() {
    return (
      <SearchbarHeader>
        <SearchFrom onSubmit={this.onSubmitForm}>
          <SearchFormButton type="submit">
            <FaSearch color="black"/>
          </SearchFormButton>
            <SearchFormInput
            onChange={this.onChangeInput}
            value={this.state.name}
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            />
        </SearchFrom>
      </SearchbarHeader>
    ); 
  }
}

export default Searchbar;