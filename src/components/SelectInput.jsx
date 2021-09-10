import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {
  render() {
    const { content, id, name, value, onChange, options } = this.props;
    const dataTestId = `${id.replace('-input', '')}-option`;

    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {content}
        <select
          data-testid={ id }
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
          className="selectInput"
        >
          {options.map(({ value: genreValue, text }) => (
            <option key={ genreValue } value={ genreValue } data-testid={ dataTestId }>
              {text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectInput;
