import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import CheckBox from './CheckBox';

const movieOptions = [
  { value: '', text: 'Todos' },
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <TextInput
          content="Inclui o texto:"
          name="searchText"
          id="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <CheckBox
          content="Mostrar somente favoritos"
          type="checkbox"
          name="bookmarkedOnly"
          id="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <SelectInput
          content="Filtrar por gênero"
          name="genre"
          id="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          options={ movieOptions }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
