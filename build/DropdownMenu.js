'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _tinperBeeCore = require('tinper-bee-core');

var _beeMenus = require('bee-menus');

var _beeMenus2 = _interopRequireDefault(_beeMenus);

var _domScrollIntoView = require('dom-scroll-into-view');

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  defaultActiveFirstOption: _react.PropTypes.bool,
  value: _react.PropTypes.any,
  dropdownMenuStyle: _react.PropTypes.object,
  multiple: _react.PropTypes.bool,
  onPopupFocus: _react.PropTypes.func,
  onMenuDeSelect: _react.PropTypes.func,
  onMenuSelect: _react.PropTypes.func,
  prefixCls: _react.PropTypes.string,
  menuItems: _react.PropTypes.any,
  inputValue: _react.PropTypes.string,
  visible: _react.PropTypes.bool
};

var DropdownMenu = function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  DropdownMenu.prototype.componentWillMount = function componentWillMount() {
    this.lastInputValue = this.props.inputValue;
  };

  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
    this.scrollActiveItemToView();
    this.lastVisible = this.props.visible;
  };

  DropdownMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (!nextProps.visible) {
      this.lastVisible = false;
    }
    // freeze when hide
    return nextProps.visible;
  };

  DropdownMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    if (!prevProps.visible && props.visible) {
      this.scrollActiveItemToView();
    }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
  };

  DropdownMenu.prototype.scrollActiveItemToView = function scrollActiveItemToView() {
    // scroll into view
    var itemComponent = (0, _reactDom.findDOMNode)(this.firstActiveItem);
    if (itemComponent) {
      (0, _domScrollIntoView2["default"])(itemComponent, (0, _reactDom.findDOMNode)(this.refs.menu), {
        onlyScrollIfNeeded: true
      });
    }
  };

  DropdownMenu.prototype.renderMenu = function renderMenu() {
    var _this2 = this;

    var props = this.props;
    var menuItems = props.menuItems,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        value = props.value,
        prefixCls = props.prefixCls,
        multiple = props.multiple,
        onMenuSelect = props.onMenuSelect,
        inputValue = props.inputValue;

    if (menuItems && menuItems.length) {
      var _ret = function () {
        var menuProps = {};
        if (multiple) {
          menuProps.onDeselect = props.onMenuDeselect;
          menuProps.onSelect = onMenuSelect;
        } else {
          menuProps.onClick = onMenuSelect;
        }

        var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
        var activeKeyProps = {};

        var clonedMenuItems = menuItems;
        if (selectedKeys.length) {
          (function () {
            if (props.visible && !_this2.lastVisible) {
              activeKeyProps.activeKey = selectedKeys[0];
            }
            var foundFirst = false;
            // set firstActiveItem via cloning menus
            // for scroll into view
            var clone = function clone(item) {
              if (!foundFirst && selectedKeys.indexOf(item.key) !== -1) {
                foundFirst = true;
                return (0, _react.cloneElement)(item, {
                  ref: function ref(_ref) {
                    _this2.firstActiveItem = _ref;
                  }
                });
              }
              return item;
            };

            clonedMenuItems = menuItems.map(function (item) {
              if (item.type === _beeMenus.ItemGroup) {
                var children = (0, _tinperBeeCore.toArray)(item.props.children).map(clone);
                return (0, _react.cloneElement)(item, {}, children);
              }
              return clone(item);
            });
          })();
        }

        // clear activeKey when inputValue change
        if (inputValue !== _this2.lastInputValue) {
          activeKeyProps.activeKey = '';
        }

        return {
          v: _react2["default"].createElement(
            _beeMenus2["default"],
            _extends({
              ref: 'menu',
              style: _this2.props.dropdownMenuStyle,
              defaultActiveFirst: defaultActiveFirstOption
            }, activeKeyProps, {
              multiple: multiple,
              focusable: false
            }, menuProps, {
              selectedKeys: selectedKeys,
              prefixCls: prefixCls + '-menu'
            }),
            clonedMenuItems
          )
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
    return null;
  };

  DropdownMenu.prototype.render = function render() {
    var renderMenu = this.renderMenu();
    return renderMenu ? _react2["default"].createElement(
      'div',
      {
        style: { overflow: 'auto' },
        onFocus: this.props.onPopupFocus,
        onMouseDown: _util.preventDefaultEvent
      },
      renderMenu
    ) : null;
  };

  return DropdownMenu;
}(_react.Component);

;

exports["default"] = DropdownMenu;
module.exports = exports['default'];