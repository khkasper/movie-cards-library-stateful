import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { content, id, type = 'text', value, onChange } = this.props;
    let inputName = id.replace('-input', '');
    if (inputName === 'text') inputName = 'searchText';
    if (inputName === 'image') inputName = 'imagePath';
    const inputClass = `input${type}`;

    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {content}
        <input
          type={ type }
          data-testid={ id }
          id={ id }
          name={ inputName }
          value={ value }
          onChange={ onChange }
          className={ inputClass }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
