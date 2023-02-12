import { useState } from 'react';
import {
  SearchbarHeader,
  SearchFrom,
  SearchFormButton,
  SearchFormInput,} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa'



const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const onChangeInput = event => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit(name);
  };

  return (
    <SearchbarHeader>
      <SearchFrom onSubmit={onSubmitForm}>
        <SearchFormButton type="submit">
          <FaSearch color="black" />
        </SearchFormButton>
        <SearchFormInput
          onChange={onChangeInput}
          value={name}
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
        />
      </SearchFrom>
    </SearchbarHeader>
  );
};

export default Searchbar;