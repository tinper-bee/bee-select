'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _trigger = require('bee-overlay/build/trigger');

var _trigger2 = _interopRequireDefault(_trigger);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = require('./util');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var propTypes = {
  onPopupFocus: _propTypes2["default"].func,
  dropdownMatchSelectWidth: _propTypes2["default"].bool,
  dropdownAlign: _propTypes2["default"].object,
  visible: _propTypes2["default"].bool,
  disabled: _propTypes2["default"].bool,
  showSearch: _propTypes2["default"].bool,
  dropdownClassName: _propTypes2["default"].string,
  multiple: _propTypes2["default"].bool,
  inputValue: _propTypes2["default"].string,
  filterOption: _propTypes2["default"].any,
  options: _propTypes2["default"].any,
  clsPrefix: _propTypes2["default"].string,
  popupClassName: _propTypes2["default"].string,
  children: _propTypes2["default"].any
};

var SelectTrigger = function (_Component) {
  _inherits(SelectTrigger, _Component);

  function SelectTrigger(props) {
    _classCallCheck(this, SelectTrigger);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.setDropdownWidth = function () {
      if (!_this.props.dropdownMatchSelectWidth) {
        return;
      }
      var width = _reactDom2["default"].findDOMNode(_this).offsetWidth;
      if (width !== _this.state.dropdownWidth) {
        _this.setState({ dropdownWidth: width });
      }
    };

    _this.getInnerMenu = _this.getInnerMenu.bind(_this);
    _this.getPopupDOMNode = _this.getPopupDOMNode.bind(_this);
    _this.getDropdownTransitionName = _this.getDropdownTransitionName.bind(_this);
    _this.getDropdownElement = _this.getDropdownElement.bind(_this);
    _this.getDropdownPrefixCls = _this.getDropdownPrefixCls.bind(_this);
    _this.saveMenu = _this.saveMenu.bind(_this);
    _this.state = {
      dropdownWidth: null
    };

    return _this;
  }

  SelectTrigger.prototype.componentDidMount = function componentDidMount() {
    this.setDropdownWidth();
  };

  SelectTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setDropdownWidth();
  };

  SelectTrigger.prototype.getInnerMenu = function getInnerMenu() {
    return this.popupMenu && this.popupMenu.refs.menu;
  };

  SelectTrigger.prototype.getPopupDOMNode = function getPopupDOMNode() {
    return this.refs.trigger.getPopupDomNode();
  };

  SelectTrigger.prototype.getDropdownElement = function getDropdownElement(newProps) {
    var props = this.props;
    return _react2["default"].createElement(_DropdownMenu2["default"], _extends({
      ref: this.saveMenu
    }, newProps, {
      clsPrefix: this.getDropdownPrefixCls(),
      onMenuSelect: props.onMenuSelect,
      scrollToEnd: props.scrollToEnd,
      onMenuDeselect: props.onMenuDeselect,
      value: props.value,
      defaultActiveFirstOption: props.defaultActiveFirstOption,
      dropdownMenuStyle: props.dropdownMenuStyle
    }));
  };

  SelectTrigger.prototype.getDropdownTransitionName = function getDropdownTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = this.getDropdownPrefixCls() + '-' + props.animation;
    }
    return transitionName;
  };

  SelectTrigger.prototype.getDropdownPrefixCls = function getDropdownPrefixCls() {
    return this.props.clsPrefix + '-dropdown';
  };

  SelectTrigger.prototype.saveMenu = function saveMenu(menu) {
    this.popupMenu = menu;
  };

  SelectTrigger.prototype.render = function render() {
    var _popupClassName;

    var _props = this.props,
        onPopupFocus = _props.onPopupFocus,
        props = _objectWithoutProperties(_props, ['onPopupFocus']);

    var multiple = props.multiple,
        visible = props.visible,
        inputValue = props.inputValue,
        dropdownAlign = props.dropdownAlign,
        disabled = props.disabled,
        showSearch = props.showSearch,
        dropdownClassName = props.dropdownClassName,
        dropdownStyle = props.dropdownStyle,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;

    var dropdownPrefixCls = this.getDropdownPrefixCls();
    var popupClassName = (_popupClassName = {}, _defineProperty(_popupClassName, dropdownClassName, !!dropdownClassName), _defineProperty(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), _popupClassName);
    var popupElement = this.getDropdownElement({
      menuItems: props.options,
      onPopupFocus: onPopupFocus,
      multiple: multiple,
      inputValue: inputValue,
      visible: visible
    });
    var hideAction = void 0;
    if (disabled) {
      hideAction = [];
    } else if ((0, _util.isSingleMode)(props) && !showSearch) {
      hideAction = ['click'];
    } else {
      hideAction = ['blur'];
    }
    var popupStyle = _extends({}, dropdownStyle);
    var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
    if (this.state.dropdownWidth) {
      popupStyle[widthProp] = this.state.dropdownWidth + 'px';
    }
    return _react2["default"].createElement(
      _trigger2["default"],
      _extends({}, props, {
        showAction: disabled ? [] : ['click'],
        hideAction: hideAction,
        ref: 'trigger',
        popupPlacement: 'bottomLeft',
        builtinPlacements: BUILT_IN_PLACEMENTS,
        clsPrefix: dropdownPrefixCls
        // popupTransitionName={this.getDropdownTransitionName()}
        , onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: (0, _classnames2["default"])(popupClassName),
        popupStyle: popupStyle
      }),
      props.children
    );
  };

  return SelectTrigger;
}(_react.Component);

;

SelectTrigger.propTypes = propTypes;

exports["default"] = SelectTrigger;
module.exports = exports['default'];