'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index2');

var _index2 = _interopRequireDefault(_index);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };
var defaultProps = {
  clsPrefix: 'u-select',
  showSearch: false,
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom'
};

var propTypes = {
  clsPrefix: _react.PropTypes.string,
  className: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['default', 'lg', 'sm']),
  combobox: _react.PropTypes.bool,
  notFoundContent: _react.PropTypes.any,
  showSearch: _react.PropTypes.bool,
  optionLabelProp: _react.PropTypes.string,
  transitionName: _react.PropTypes.string,
  choiceTransitionName: _react.PropTypes.string
};

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  //static Option = Option as React.ClassicComponentClass<OptionProps>;
  //static OptGroup = OptGroup as React.ClassicComponentClass<OptGroupProps>;

  function Select(props) {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  Select.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        clsPrefix = _props.clsPrefix,
        _props$className = _props.className,
        className = _props$className === undefined ? '' : _props$className,
        size = _props.size,
        combobox = _props.combobox,
        showSearch = _props.showSearch;
    var _props2 = this.props,
        _props2$notFoundConte = _props2.notFoundContent,
        notFoundContent = _props2$notFoundConte === undefined ? 'Not Found' : _props2$notFoundConte,
        optionLabelProp = _props2.optionLabelProp;


    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, clsPrefix + '-lg', size === 'lg'), _defineProperty(_classNames, clsPrefix + '-sm', size === 'sm'), _defineProperty(_classNames, clsPrefix + '-show-search', showSearch), _classNames), className);

    var antLocale = this.context.antLocale;

    if (antLocale && antLocale.Select) {
      notFoundContent = 'notFoundContent' in this.props ? notFoundContent : antLocale.Select.notFoundContent;
    }

    if (combobox) {
      notFoundContent = null;
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || 'value';
    }

    return _react2["default"].createElement(_index2["default"], _extends({}, this.props, {
      className: cls,
      optionLabelProp: optionLabelProp || 'children',
      notFoundContent: notFoundContent
    }));
  };

  return Select;
}(_react2["default"].Component);

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.Option = _index.Option;
Select.OptGroup = _index.OptGroup;

exports["default"] = Select;
module.exports = exports['default'];