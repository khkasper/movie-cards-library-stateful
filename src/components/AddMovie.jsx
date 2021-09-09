import React, { Component } from 'react';
import PropTypes from 'prop-types';

const originalState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const movieOptions = [
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

class AddMovie extends Component {
  constructor() {
    super();
    this.state = originalState;
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler({ target }) {
    const { name, type, checked, value } = target;
    const valueExpected = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueExpected,
    });
  }

  clickHandler(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(originalState);
  }

  inputsGenerator(test, type, name, value) {
    return (
      <input
        data-testid={ test }
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ this.changeHandler }
      />
    );
  }

  textAreaGenerator(test, type, name, value) {
    return (
      <textarea
        data-testid={ test }
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ this.changeHandler }
      />
    );
  }

  selectOptions(test, type, name, value) {
    const dataTestId = `${test.replace('-input', '')}-option`;
    return (
      <select
        data-testid={ test }
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ this.changeHandler }
      >
        {movieOptions.map(({ value: genre, text }) => (
          <option key={ genre } value={ genre } data-testid={ dataTestId }>
            {text}
          </option>
        ))}
      </select>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.inputsGenerator('title-input', 'text', 'title', title) }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.inputsGenerator('subtitle-input', 'text', 'subtitle', subtitle) }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.inputsGenerator('image-input', 'text', 'imagePath', imagePath) }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          { this.textAreaGenerator('storyline-input', 'text', 'storyline', storyline) }
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.inputsGenerator('rating-input', 'number', 'rating', rating) }
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          { this.selectOptions('genre-input', 'text', 'genre', genre) }
        </label>
        <button
          type="submit"
          onClick={ this.clickHandler }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
