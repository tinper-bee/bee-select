'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _tinperBeeCore = require('tinper-bee-core');

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//import getContainerRenderMixin from './getContainerRenderMixin';

function noop() {}

function returnEmptyString() {
  return '';
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];

var propTypes = {
  children: _react.PropTypes.any,
  action: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
  showAction: _react.PropTypes.any,
  hideAction: _react.PropTypes.any,
  getPopupClassNameFromAlign: _react.PropTypes.any,
  onPopupVisibleChange: _react.PropTypes.func,
  afterPopupVisibleChange: _react.PropTypes.func,
  popup: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]).isRequired,
  popupStyle: _react.PropTypes.object,
  prefixCls: _react.PropTypes.string,
  popupClassName: _react.PropTypes.string,
  popupPlacement: _react.PropTypes.string,
  builtinPlacements: _react.PropTypes.object,
  popupTransitionName: _react.PropTypes.string,
  popupAnimation: _react.PropTypes.any,
  mouseEnterDelay: _react.PropTypes.number,
  mouseLeaveDelay: _react.PropTypes.number,
  zIndex: _react.PropTypes.number,
  focusDelay: _react.PropTypes.number,
  blurDelay: _react.PropTypes.number,
  getPopupContainer: _react.PropTypes.func,
  destroyPopupOnHide: _react.PropTypes.bool,
  mask: _react.PropTypes.bool,
  maskClosable: _react.PropTypes.bool,
  onPopupAlign: _react.PropTypes.func,
  popupAlign: _react.PropTypes.object,
  popupVisible: _react.PropTypes.bool,
  maskTransitionName: _react.PropTypes.string,
  maskAnimation: _react.PropTypes.string
};

var defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  onPopupVisibleChange: noop,
  afterPopupVisibleChange: noop,
  onPopupAlign: noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var Trigger = function (_Component) {
  _inherits(Trigger, _Component);

  function Trigger(props) {
    _classCallCheck(this, Trigger);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      popupVisible: !!_this.props.popupVisible || _this.props.defaultPopupVisible
    };
    //this.removeContainer = this.removeContainer.bind(this);
    _this.getContainer = _this.getContainer.bind(_this);
    _this.renderComponent = _this.renderComponent.bind(_this);
    _this.isVisible = _this.isVisible.bind(_this);

    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    _this.onPopupMouseEnter = _this.onPopupMouseEnter.bind(_this);
    _this.onPopupMouseLeave = _this.onPopupMouseLeave.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onTouchStart = _this.onTouchStart.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onDocumentClick = _this.onDocumentClick.bind(_this);
    _this.getPopupDomNode = _this.getPopupDomNode.bind(_this);

    _this.getRootDomNode = _this.getRootDomNode.bind(_this);
    _this.getPopupClassNameFromAlign = _this.getPopupClassNameFromAlign.bind(_this);
    _this.getPopupAlign = _this.getPopupAlign.bind(_this);
    _this.getComponent = _this.getComponent.bind(_this);
    _this.setPopupVisible = _this.setPopupVisible.bind(_this);

    _this.delaySetPopupVisible = _this.delaySetPopupVisible.bind(_this);
    _this.clearDelayTimer = _this.clearDelayTimer.bind(_this);
    _this.createTwoChains = _this.createTwoChains.bind(_this);
    _this.isClickToShow = _this.isClickToShow.bind(_this);
    _this.isClickToHide = _this.isClickToHide.bind(_this);

    _this.isMouseEnterToShow = _this.isMouseEnterToShow.bind(_this);
    _this.isMouseLeaveToHide = _this.isMouseLeaveToHide.bind(_this);
    _this.isFocusToShow = _this.isFocusToShow.bind(_this);
    _this.isBlurToHide = _this.isBlurToHide.bind(_this);
    _this.forcePopupAlign = _this.forcePopupAlign.bind(_this);

    _this.fireEvents = _this.fireEvents.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  Trigger.prototype.isVisible = function isVisible(instance) {
    return instance.state.popupVisible;
  };

  Trigger.prototype.getContainer = function getContainer(instance) {
    var popupContainer = document.createElement('div');
    var mountNode = instance.props.getPopupContainer ? instance.props.getPopupContainer((0, _reactDom.findDOMNode)(instance)) : document.body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  Trigger.prototype.renderComponent = function renderComponent(instance, componentArg, ready) {
    if (instance._component || this.isVisible(instance)) {
      if (!instance._container) {
        instance._container = this.getContainer(instance);
      }
      var component = instance.getComponent(componentArg);
      _reactDom2["default"].unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
        instance._component = this;
        if (ready) {
          ready.call(this);
        }
      });
    }
  };

  Trigger.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    this.mounted = false;
    ALL_HANDLERS.forEach(function (h) {
      _this2['fire' + h] = function (e) {
        _this2.fireEvents(h, e);
      };
    });
  };

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    this.renderComponent(this, null, function () {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    });
    if (this.isClickToHide()) {
      if (state.popupVisible) {
        if (!this.clickOutsideHandler) {
          this.clickOutsideHandler = (0, _tinperBeeCore.addEventListener)(document, 'mousedown', this.onDocumentClick);
          this.touchOutsideHandler = (0, _tinperBeeCore.addEventListener)(document, 'touchstart', this.onDocumentClick);
        }
        return;
      }
    }
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.touchOutsideHandler.remove();
      this.clickOutsideHandler = null;
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.touchOutsideHandler.remove();
      this.clickOutsideHandler = null;
      this.touchOutsideHandler = null;
    }
    //this.removeContainer();
  };

  Trigger.prototype.onMouseEnter = function onMouseEnter(e) {
    this.fireEvents('onMouseEnter', e);
    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
  };

  Trigger.prototype.onMouseLeave = function onMouseLeave(e) {
    this.fireEvents('onMouseLeave', e);
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  };

  Trigger.prototype.onPopupMouseEnter = function onPopupMouseEnter() {
    this.clearDelayTimer();
  };

  Trigger.prototype.onPopupMouseLeave = function onPopupMouseLeave(e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && (0, _contains2["default"])(this._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  };

  Trigger.prototype.onFocus = function onFocus(e) {
    this.fireEvents('onFocus', e);
    // incase focusin and focusout
    this.clearDelayTimer();
    if (this.isFocusToShow()) {
      this.focusTime = Date.now();
      this.delaySetPopupVisible(true, this.props.focusDelay);
    }
  };

  Trigger.prototype.onMouseDown = function onMouseDown(e) {
    this.fireEvents('onMouseDown', e);
    this.preClickTime = Date.now();
  };

  Trigger.prototype.onTouchStart = function onTouchStart(e) {
    this.fireEvents('onTouchStart', e);
    this.preTouchTime = Date.now();
  };

  Trigger.prototype.onBlur = function onBlur(e) {
    this.fireEvents('onBlur', e);
    this.clearDelayTimer();
    if (this.isBlurToHide()) {
      this.delaySetPopupVisible(false, this.props.blurDelay);
    }
  };

  Trigger.prototype.onClick = function onClick(event) {
    this.fireEvents('onClick', event);
    // focus will trigger click
    if (this.focusTime) {
      var preTime = void 0;
      if (this.preClickTime && this.preTouchTime) {
        preTime = Math.min(this.preClickTime, this.preTouchTime);
      } else if (this.preClickTime) {
        preTime = this.preClickTime;
      } else if (this.preTouchTime) {
        preTime = this.preTouchTime;
      }
      if (Math.abs(preTime - this.focusTime) < 20) {
        return;
      }
      this.focusTime = 0;
    }
    this.preClickTime = 0;
    this.preTouchTime = 0;
    event.preventDefault();
    var nextVisible = !this.state.popupVisible;
    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
      this.setPopupVisible(!this.state.popupVisible);
    }
  };

  Trigger.prototype.onDocumentClick = function onDocumentClick(event) {
    if (this.props.mask && !this.props.maskClosable) {
      return;
    }
    var target = event.target;
    var root = (0, _reactDom.findDOMNode)(this);
    var popupNode = this.getPopupDomNode();
    if (!(0, _contains2["default"])(root, target) && !(0, _contains2["default"])(popupNode, target)) {
      this.close();
    }
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component) {
      return this.mounted ? this._component.getPopupDomNode() : null;
    }
    return null;
  };

  Trigger.prototype.getRootDomNode = function getRootDomNode() {
    return _reactDom2["default"].findDOMNode(this);
  };

  Trigger.prototype.getPopupClassNameFromAlign = function getPopupClassNameFromAlign(align) {
    var className = [];
    var props = this.props;
    var popupPlacement = props.popupPlacement;
    var builtinPlacements = props.builtinPlacements;
    var prefixCls = props.prefixCls;

    if (popupPlacement && builtinPlacements) {
      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
    }
    if (props.getPopupClassNameFromAlign) {
      className.push(props.getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement;
    var popupAlign = props.popupAlign;
    var builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  };

  Trigger.prototype.getComponent = function getComponent() {
    var props = this.props;
    var state = this.state;

    var mouseProps = {};
    if (this.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = this.onPopupMouseEnter;
    }
    if (this.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = this.onPopupMouseLeave;
    }
    return _react2["default"].createElement(
      _Popup2["default"],
      _extends({
        prefixCls: props.prefixCls,
        destroyPopupOnHide: props.destroyPopupOnHide,
        visible: state.popupVisible,
        className: props.popupClassName,
        action: props.action,
        align: this.getPopupAlign(),
        onAlign: props.onPopupAlign,
        animation: props.popupAnimation,
        getClassNameFromAlign: this.getPopupClassNameFromAlign
      }, mouseProps, {
        getRootDomNode: this.getRootDomNode,
        style: props.popupStyle,
        mask: props.mask,
        zIndex: props.zIndex,
        transitionName: props.popupTransitionName,
        maskAnimation: props.maskAnimation,
        maskTransitionName: props.maskTransitionName
      }),
      typeof props.popup === 'function' ? props.popup() : props.popup
    );
  };

  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible) {
    this.clearDelayTimer();
    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({
          popupVisible: popupVisible
        });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS) {
    var _this3 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      this.delayTimer = setTimeout(function () {
        _this3.setPopupVisible(visible);
        _this3.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props;
    var action = _props.action;
    var showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props2 = this.props;
    var action = _props2.action;
    var hideAction = _props2.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props3 = this.props;
    var action = _props3.action;
    var showAction = _props3.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props4 = this.props;
    var action = _props4.action;
    var hideAction = _props4.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props5 = this.props;
    var action = _props5.action;
    var showAction = _props5.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props6 = this.props;
    var action = _props6.action;
    var hideAction = _props6.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this.popupInstance && this.popupInstance.alignInstance) {
      this.popupInstance.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var props = this.props;
    var children = props.children;
    var child = _react2["default"].Children.only(children);
    var newChildProps = {};

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    return _react2["default"].cloneElement(child, newChildProps);
  };

  return Trigger;
}(_react.Component);

;

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
exports["default"] = Trigger;
module.exports = exports['default'];