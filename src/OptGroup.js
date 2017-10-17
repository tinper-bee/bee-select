import React from 'react';
import PropTypes from 'prop-types';

const propTypes ={
  label: PropTypes.oneOfType([
  		PropTypes.string,
  		PropTypes.object
  ])
};
class OptGroup extends React.Component {

}
OptGroup.propTypes = propTypes;
export default OptGroup;