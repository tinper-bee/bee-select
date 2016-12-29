import React from 'react';

const propTypes ={
  label: React.PropTypes.oneOfType([
  		React.PropTypes.string,
  		React.PropTypes.object
  ])
};
class OptGroup extends React.Component {

}
OptGroup.propTypes = propTypes;
export default OptGroup;