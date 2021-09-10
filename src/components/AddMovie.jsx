import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import TextArea from './TextArea';
import SelectInput from './SelectInput';

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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clickHandler(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(originalState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          content="Título"
          id="title-input"
          value={ title }
          onChange={ this.changeHandler }
        />
        <TextInput
          content="Subtítulo"
          id="subtitle-input"
          value={ subtitle }
          onChange={ this.changeHandler }
        />
        <TextInput
          content="Imagem"
          id="image-input"
          value={ imagePath }
          onChange={ this.changeHandler }
        />
        <TextArea
          content="Sinopse"
          name="storyline"
          id="storyline-input"
          value={ storyline }
          onChange={ this.changeHandler }
        />
        <TextInput
          content="Avaliação"
          type="number"
          id="rating-input"
          value={ rating }
          onChange={ this.changeHandler }
        />
        <SelectInput
          content="Gênero"
          name="genre"
          id="genre-input"
          value={ genre }
          onChange={ this.changeHandler }
          options={ movieOptions }
        />
        <button type="submit" onClick={ this.clickHandler } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
