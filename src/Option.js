import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

class Option extends React.Component {

}

Option.propTypes = propTypes;
export default Option;