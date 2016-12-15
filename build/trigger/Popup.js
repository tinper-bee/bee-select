'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tinperBeeCore = require('tinper-bee-core');

var _beeAnimate = require('bee-animate');

var _beeAnimate2 = _interopRequireDefault(_beeAnimate);

var _PopupInner = require('./PopupInner');

var _PopupInner2 = _interopRequireDefault(_PopupInner);

var _LazyRenderBox = require('./LazyRenderBox');

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  visible: _react.PropTypes.bool,
  style: _react.PropTypes.object,
  getClassNameFromAlign: _react.PropTypes.func,
  onAlign: _react.PropTypes.func,
  getRootDomNode: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  align: _react.PropTypes.any,
  destroyPopupOnHide: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  prefixCls: _react.PropTypes.string,
  onMouseLeave: _react.PropTypes.func
};

var Popup = function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.onAlign = _this.onAlign.bind(_this);
    _this.getPopupDomNode = _this.getPopupDomNode.bind(_this);
    _this.getTarget = _this.getTarget.bind(_this);
    _this.getMaskTransitionName = _this.getMaskTransitionName.bind(_this);
    _this.getTransitionName = _this.getTransitionName.bind(_this);
    _this.getClassName = _this.getClassName.bind(_this);
    _this.getPopupElement = _this.getPopupElement.bind(_this);
    _this.getZIndexStyle = _this.getZIndexStyle.bind(_this);
    _this.getMaskElement = _this.getMaskElement.bind(_this);
    _this.saveAlign = _this.saveAlign.bind(_this);
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
  };

  Popup.prototype.onAlign = function onAlign(popupDomNode, align) {
    var props = this.props;
    var alignClassName = props.getClassNameFromAlign(props.align);
    var currentAlignClassName = props.getClassNameFromAlign(align);
    if (alignClassName !== currentAlignClassName) {
      this.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = this.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return _reactDom2["default"].findDOMNode(this.refs.popup);
  };

  Popup.prototype.getTarget = function getTarget() {
    return this.props.getRootDomNode();
  };

  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var props = this.props;
    var align = props.align;
    var style = props.style;
    var visible = props.visible;
    var prefixCls = props.prefixCls;
    var destroyPopupOnHide = props.destroyPopupOnHide;

    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';
    if (!visible) {
      this.currentAlignClassName = null;
    }
    var newStyle = _extends({}, style, this.getZIndexStyle());
    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: 'popup',
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      style: newStyle
    };
    if (destroyPopupOnHide) {
      return _react2["default"].createElement(
        _beeAnimate2["default"],
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        },
        visible ? _react2["default"].createElement(
          _tinperBeeCore.Align,
          {
            target: this.getTarget,
            key: 'popup',
            ref: this.saveAlign,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          _react2["default"].createElement(
            _PopupInner2["default"],
            _extends({
              visible: true
            }, popupInnerProps),
            props.children
          )
        ) : null
      );
    }
    return _react2["default"].createElement(
      _beeAnimate2["default"],
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      },
      _react2["default"].createElement(
        _tinperBeeCore.Align,
        {
          target: this.getTarget,
          key: 'popup',
          ref: this.saveAlign,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        _react2["default"].createElement(
          _PopupInner2["default"],
          _extends({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          props.children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = _react2["default"].createElement(
          _beeAnimate2["default"],
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.saveAlign = function saveAlign(align) {
    this.alignInstance = align;
  };

  Popup.prototype.render = function render() {
    return _react2["default"].createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(_react.Component);

;

Popup.propTypes = propTypes;
exports["default"] = Popup;
module.exports = exports['default'];