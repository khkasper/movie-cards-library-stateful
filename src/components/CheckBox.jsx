import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  render() {
    const { content, type, id, name, checked, onChange } = this.props;

    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {content}
        <input
          type={ type }
          data-testid={ id }
          id={ id }
          name={ name }
          checked={ checked }
          onChange={ onChange }
          className="checkbox"
        />
      </label>
    );
  }
}

CheckBox.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
