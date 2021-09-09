import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          searchTextChange={ this.changeHandler }
          bookmarkedOnly={ bookmarkedOnly }
          bookmarkedOnlyChange={ this.changeHandler }
          selectedGenre={ selectedGenre }
          selectedGenreChange={ this.changeHandler }
        />
        <MovieList movies={ this.props.movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;