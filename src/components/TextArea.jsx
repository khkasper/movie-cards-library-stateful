import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { content, id, name, value, onChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {content}
        <textarea
          data-testid={ id }
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
          className="textArea"
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
