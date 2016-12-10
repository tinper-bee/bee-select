import React, { PropTypes ,Component } from 'react';
import LazyRenderBox from './LazyRenderBox';

const propTypes = {
    hiddenClassName: PropTypes.string,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    children: PropTypes.any,
}

class PopupInner extends Component{
  
  render() {
    const props = this.props;
    let className = props.className;
    if (!props.visible) {
      className += ` ${props.hiddenClassName}`;
    }
    return (<div
      className={className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      style={props.style}
    >
      <LazyRenderBox className={`${props.prefixCls}-content`} visible={props.visible}>
        {props.children}
      </LazyRenderBox>
    </div>);
  }
};

PopupInner.propTypes = propTypes;
export default PopupInner;
