import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }) {
    const { name, type } = target;
    const value = type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [name]: value,
    });
  }

  inputsGenerator(test, type, name, value) {
    return (
      <input
        data-testid={ test }
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.changeHandler }
      />
    );
  }

  render() {
    const { title, subtitle } = this.state;
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
      </form>
    );
  }
}

export default AddMovie;
