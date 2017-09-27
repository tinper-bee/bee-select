'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeMenu = require('bee-menu');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tinperBeeCore = require('tinper-bee-core');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _OptGroup = require('./OptGroup');

var _OptGroup2 = _interopRequireDefault(_OptGroup);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _componentClasses = require('component-classes');

var _componentClasses2 = _interopRequireDefault(_componentClasses);

var _util = require('./util');

var _SelectTrigger = require('./SelectTrigger');

var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//import FilterMixin from './FilterMixin';

function noop() {}

function filterFn(input, child) {
  return String((0, _util.getPropValue)(child, this.props.optionFilterProp)).indexOf(input) > -1;
}

function saveRef(name, component) {
  this[name] = component;
}

var valueObjectShape = void 0;

if (_react.PropTypes) {
  valueObjectShape = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
    key: _react.PropTypes.string,
    label: _react.PropTypes.node
  })]);
}

var propTypes = {
  defaultActiveFirstOption: _react.PropTypes.bool,
  multiple: _react.PropTypes.bool,
  filterOption: _react.PropTypes.any,
  children: _react.PropTypes.any,
  showSearch: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  allowClear: _react.PropTypes.bool,
  showArrow: _react.PropTypes.bool,
  tags: _react.PropTypes.bool,
  clsPrefix: _react.PropTypes.string,
  className: _react.PropTypes.string,
  transitionName: _react.PropTypes.string,
  optionLabelProp: _react.PropTypes.string,
  optionFilterProp: _react.PropTypes.string,
  animation: _react.PropTypes.string,
  choiceTransitionName: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onSearch: _react.PropTypes.func,
  placeholder: _react.PropTypes.any,
  onDeselect: _react.PropTypes.func,
  labelInValue: _react.PropTypes.bool,
  value: _react.PropTypes.oneOfType([valueObjectShape, _react.PropTypes.arrayOf(valueObjectShape)]),
  defaultValue: _react.PropTypes.oneOfType([valueObjectShape, _react.PropTypes.arrayOf(valueObjectShape)]),
  dropdownStyle: _react.PropTypes.object,
  maxTagTextLength: _react.PropTypes.number,
  tokenSeparators: _react.PropTypes.arrayOf(_react.PropTypes.string)
};

var defaultProps = {
  clsPrefix: 'rc-select',
  filterOption: filterFn,
  defaultOpen: false,
  labelInValue: false,
  defaultActiveFirstOption: true,
  showSearch: true,
  allowClear: false,
  placeholder: '',
  defaultValue: [],
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onSelect: noop,
  onSearch: noop,
  onDeselect: noop,
  showArrow: true,
  dropdownMatchSelectWidth: true,
  dropdownStyle: {},
  dropdownMenuStyle: {},
  optionFilterProp: 'value',
  optionLabelProp: 'value',
  notFoundContent: 'Not Found'
};

var RcSelect = function (_Component) {
  _inherits(RcSelect, _Component);

  //mixins: [FilterMixin],

  function RcSelect(props) {
    _classCallCheck(this, RcSelect);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    var value = [];
    if ('value' in props) {
      value = (0, _util.toArray)(props.value);
    } else {
      value = (0, _util.toArray)(props.defaultValue);
    }
    value = _this.addLabelToValue(props, value);
    value = _this.addTitleToValue(props, value);
    var inputValue = '';
    if (props.combobox) {
      inputValue = value.length ? String(value[0].key) : '';
    }
    _this.saveInputRef = saveRef.bind(_this, 'inputInstance');
    _this.saveInputMirrorRef = saveRef.bind(_this, 'inputMirrorInstance');
    var open = props.open;
    if (open === undefined) {
      open = props.defaultOpen;
    }
    _this.state = {
      value: value,
      inputValue: inputValue,
      open: open
    };

    _this.filterOption = _this.filterOption.bind(_this);
    _this.renderFilterOptions = _this.renderFilterOptions.bind(_this);
    _this.renderFilterOptionsFromChildren = _this.renderFilterOptionsFromChildren.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.onDropdownVisibleChange = _this.onDropdownVisibleChange.bind(_this);

    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
    _this.onMenuSelect = _this.onMenuSelect.bind(_this);
    _this.onMenuDeselect = _this.onMenuDeselect.bind(_this);
    _this.onArrowClick = _this.onArrowClick.bind(_this);

    _this.onPlaceholderClick = _this.onPlaceholderClick.bind(_this);
    _this.onOuterFocus = _this.onOuterFocus.bind(_this);
    _this.onPopupFocus = _this.onPopupFocus.bind(_this);
    _this.onOuterBlur = _this.onOuterBlur.bind(_this);
    _this.onClearSelection = _this.onClearSelection.bind(_this);

    _this.onChoiceAnimationLeave = _this.onChoiceAnimationLeave.bind(_this);
    _this.getLabelBySingleValue = _this.getLabelBySingleValue.bind(_this);
    _this.getValueByLabel = _this.getValueByLabel.bind(_this);
    _this.getLabelFromOption = _this.getLabelFromOption.bind(_this);
    _this.getLabelFromProps = _this.getLabelFromProps.bind(_this);

    _this.getVLForOnChange = _this.getVLForOnChange.bind(_this);
    _this.getLabelByValue = _this.getLabelByValue.bind(_this);
    _this.getDropdownContainer = _this.getDropdownContainer.bind(_this);
    _this.getPlaceholderElement = _this.getPlaceholderElement.bind(_this);
    _this.getInputElement = _this.getInputElement.bind(_this);

    _this.getInputDOMNode = _this.getInputDOMNode.bind(_this);
    _this.getInputMirrorDOMNode = _this.getInputMirrorDOMNode.bind(_this);
    _this.getPopupDOMNode = _this.getPopupDOMNode.bind(_this);
    _this.getPopupMenuComponent = _this.getPopupMenuComponent.bind(_this);
    _this.setOpenState = _this.setOpenState.bind(_this);

    _this.setInputValue = _this.setInputValue.bind(_this);
    _this.clearBlurTime = _this.clearBlurTime.bind(_this);
    _this.clearAdjustTimer = _this.clearAdjustTimer.bind(_this);
    _this.clearAdjustTimer = _this.clearAdjustTimer.bind(_this);
    _this.updateFocusClassName = _this.updateFocusClassName.bind(_this);

    _this.maybeFocus = _this.maybeFocus.bind(_this);
    _this.addLabelToValue = _this.addLabelToValue.bind(_this);
    _this.addTitleToValue = _this.addTitleToValue.bind(_this);
    _this.removeSelected = _this.removeSelected.bind(_this);
    _this.openIfHasChildren = _this.openIfHasChildren.bind(_this);

    _this.fireChange = _this.fireChange.bind(_this);
    _this.isChildDisabled = _this.isChildDisabled.bind(_this);
    _this.tokenize = _this.tokenize.bind(_this);
    _this.adjustOpenState = _this.adjustOpenState.bind(_this);
    _this.renderTopControlNode = _this.renderTopControlNode.bind(_this);

    return _this;
  }

  RcSelect.prototype.componentWillMount = function componentWillMount() {
    this.adjustOpenState();
  };

  RcSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      var value = (0, _util.toArray)(nextProps.value);
      value = this.addLabelToValue(nextProps, value);
      value = this.addTitleToValue(nextProps, value);
      this.setState({
        value: value
      });
      if (nextProps.combobox) {
        this.setState({
          inputValue: value.length ? this.getLabelFromProps(nextProps, value[0].key) : ''
        });
      }
    }
  };

  RcSelect.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    this.props = nextProps;
    this.state = nextState;
    this.adjustOpenState();
  };

  RcSelect.prototype.componentDidUpdate = function componentDidUpdate() {
    var state = this.state,
        props = this.props;

    if (state.open && (0, _util.isMultipleOrTags)(props)) {
      var inputNode = this.getInputDOMNode();
      var mirrorNode = this.getInputMirrorDOMNode();
      if (inputNode.value) {
        inputNode.style.width = '';
        inputNode.style.width = mirrorNode.clientWidth + 'px';
      } else {
        inputNode.style.width = '';
      }
    }
  };

  RcSelect.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearBlurTime();
    this.clearAdjustTimer();
    if (this.dropdownContainer) {
      _reactDom2["default"].unmountComponentAtNode(this.dropdownContainer);
      document.body.removeChild(this.dropdownContainer);
      this.dropdownContainer = null;
    }
  };

  RcSelect.prototype.filterOption = function filterOption(input, child) {
    if (!input) {
      return true;
    }
    var filterOption = this.props.filterOption;
    if (!filterOption) {
      return true;
    }
    if (child.props.disabled) {
      return false;
    }
    return filterOption.call(this, input, child);
  };

  RcSelect.prototype.renderFilterOptions = function renderFilterOptions(inputValue) {
    return this.renderFilterOptionsFromChildren(this.props.children, true, inputValue);
  };

  RcSelect.prototype.renderFilterOptionsFromChildren = function renderFilterOptionsFromChildren(children, showNotFound, iv) {
    var _this2 = this;

    var sel = [];
    var props = this.props;
    var inputValue = iv === undefined ? this.state.inputValue : iv;
    var childrenKeys = [];
    var tags = props.tags;
    _react2["default"].Children.forEach(children, function (child) {
      if (child.type === _OptGroup2["default"]) {
        var innerItems = _this2.renderFilterOptionsFromChildren(child.props.children, false);
        if (innerItems.length) {
          var label = child.props.label;
          var key = child.key;
          if (!key && typeof label === 'string') {
            key = label;
          } else if (!label && key) {
            label = key;
          }
          sel.push(_react2["default"].createElement(
            _beeMenu.MenuItemGroup,
            { key: key, title: label },
            innerItems
          ));
        }
        return;
      }

      // warning(
      //   child.type === Option,
      //   'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' +
      //     `instead of \`${child.type.name || child.type.displayName || child.type}\`.`
      // );

      var childValue = (0, _util.getValuePropValue)(child);
      if (_this2.filterOption(inputValue, child)) {
        sel.push(_react2["default"].createElement(_beeMenu.MenuItem, _extends({
          style: _util.UNSELECTABLE_STYLE,
          attribute: _util.UNSELECTABLE_ATTRIBUTE,
          value: childValue,
          key: childValue
        }, child.props)));
      }
      if (tags && !child.props.disabled) {
        childrenKeys.push(childValue);
      }
    });
    if (tags) {
      // tags value must be string
      var value = this.state.value || [];
      value = value.filter(function (singleValue) {
        return childrenKeys.indexOf(singleValue.key) === -1 && (!inputValue || String(singleValue.key).indexOf(String(inputValue)) > -1);
      });
      sel = sel.concat(value.map(function (singleValue) {
        var key = singleValue.key;
        return _react2["default"].createElement(
          _beeMenu.MenuItem,
          {
            style: _util.UNSELECTABLE_STYLE,
            attribute: _util.UNSELECTABLE_ATTRIBUTE,
            value: key,
            key: key
          },
          key
        );
      }));
      if (inputValue) {
        var notFindInputItem = sel.every(function (option) {
          return (0, _util.getValuePropValue)(option) !== inputValue;
        });
        if (notFindInputItem) {
          sel.unshift(_react2["default"].createElement(
            _beeMenu.MenuItem,
            {
              style: _util.UNSELECTABLE_STYLE,
              attribute: _util.UNSELECTABLE_ATTRIBUTE,
              value: inputValue,
              key: inputValue
            },
            inputValue
          ));
        }
      }
    }
    if (!sel.length && showNotFound && props.notFoundContent) {
      sel = [_react2["default"].createElement(
        _beeMenu.MenuItem,
        {
          style: _util.UNSELECTABLE_STYLE,
          attribute: _util.UNSELECTABLE_ATTRIBUTE,
          disabled: true,
          value: 'NOT_FOUND',
          key: 'NOT_FOUND'
        },
        props.notFoundContent
      )];
    }
    return sel;
  };

  RcSelect.prototype.onInputChange = function onInputChange(event) {
    var tokenSeparators = this.props.tokenSeparators;

    var val = event.target.value;
    if ((0, _util.isMultipleOrTags)(this.props) && tokenSeparators && (0, _util.includesSeparators)(val, tokenSeparators)) {
      var nextValue = this.tokenize(val);
      this.fireChange(nextValue);
      this.setOpenState(false, true);
      this.setInputValue('', false);
      return;
    }
    this.setInputValue(val);
    this.setState({
      open: true
    });
    if ((0, _util.isCombobox)(this.props)) {
      this.fireChange([{
        key: val
      }]);
    }
  };

  RcSelect.prototype.onDropdownVisibleChange = function onDropdownVisibleChange(open) {
    this.setOpenState(open);
  };

  // combobox ignore


  RcSelect.prototype.onKeyDown = function onKeyDown(event) {
    var props = this.props;
    if (props.disabled) {
      return;
    }
    var keyCode = event.keyCode;
    if (this.state.open && !this.getInputDOMNode()) {
      this.onInputKeyDown(event);
    } else if (keyCode === _tinperBeeCore.KeyCode.ENTER || keyCode === _tinperBeeCore.KeyCode.DOWN) {
      this.setOpenState(true);
      event.preventDefault();
    }
  };

  RcSelect.prototype.onInputKeyDown = function onInputKeyDown(event) {
    var props = this.props;
    if (props.disabled) {
      return;
    }
    var state = this.state;
    var keyCode = event.keyCode;
    if ((0, _util.isMultipleOrTags)(props) && !event.target.value && keyCode === _tinperBeeCore.KeyCode.BACKSPACE) {
      event.preventDefault();
      var value = state.value;

      if (value.length) {
        this.removeSelected(value[value.length - 1].key);
      }
      return;
    }
    if (keyCode === _tinperBeeCore.KeyCode.DOWN) {
      if (!state.open) {
        this.openIfHasChildren();
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    } else if (keyCode === _tinperBeeCore.KeyCode.ESC) {
      if (state.open) {
        this.setOpenState(false);
        event.preventDefault();
        event.stopPropagation();
      }
      return;
    }

    if (state.open) {
      var menu = this.refs.trigger.getInnerMenu();
      if (menu && menu.onKeyDown(event)) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };

  RcSelect.prototype.onMenuSelect = function onMenuSelect(_ref) {
    var _this3 = this;

    var item = _ref.item;

    var value = this.state.value;
    var props = this.props;
    var selectedValue = (0, _util.getValuePropValue)(item);
    var selectedLabel = this.getLabelFromOption(item);
    var event = selectedValue;
    if (props.labelInValue) {
      event = {
        key: event,
        label: selectedLabel
      };
    }
    props.onSelect(event, item);
    var selectedTitle = item.props.title;
    if ((0, _util.isMultipleOrTags)(props)) {
      if ((0, _util.findIndexInValueByKey)(value, selectedValue) !== -1) {
        return;
      }
      value = value.concat([{
        key: selectedValue,
        label: selectedLabel,
        title: selectedTitle
      }]);
    } else {
      if ((0, _util.isCombobox)(props)) {
        this.skipAdjustOpen = true;
        this.clearAdjustTimer();
        this.skipAdjustOpenTimer = setTimeout(function () {
          _this3.skipAdjustOpen = false;
        }, 0);
      }
      if (value.length && value[0].key === selectedValue) {
        this.setOpenState(false, true);
        return;
      }
      value = [{
        key: selectedValue,
        label: selectedLabel,
        title: selectedTitle
      }];
      this.setOpenState(false, true);
    }
    this.fireChange(value);
    var inputValue = void 0;
    if ((0, _util.isCombobox)(props)) {
      inputValue = (0, _util.getPropValue)(item, props.optionLabelProp);
    } else {
      inputValue = '';
    }
    this.setInputValue(inputValue, false);
  };

  RcSelect.prototype.onMenuDeselect = function onMenuDeselect(_ref2) {
    var item = _ref2.item,
        domEvent = _ref2.domEvent;

    if (domEvent.type === 'click') {
      this.removeSelected((0, _util.getValuePropValue)(item));
    }
    this.setInputValue('', false);
  };

  RcSelect.prototype.onArrowClick = function onArrowClick(e) {
    e.stopPropagation();
    if (!this.props.disabled) {
      this.setOpenState(!this.state.open, true);
    }
  };

  RcSelect.prototype.onPlaceholderClick = function onPlaceholderClick() {
    if (this.getInputDOMNode()) {
      this.getInputDOMNode().focus();
    }
  };

  RcSelect.prototype.onOuterFocus = function onOuterFocus() {
    this.clearBlurTime();
    this._focused = true;
    this.updateFocusClassName();
    this.props.onFocus();
  };

  RcSelect.prototype.onPopupFocus = function onPopupFocus() {
    // fix ie scrollbar, focus element again
    this.maybeFocus(true, true);
  };

  RcSelect.prototype.onOuterBlur = function onOuterBlur() {
    var _this4 = this;

    this.blurTimer = setTimeout(function () {
      _this4._focused = false;
      _this4.updateFocusClassName();
      var props = _this4.props;
      var value = _this4.state.value;
      var inputValue = _this4.state.inputValue;

      if ((0, _util.isSingleMode)(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
        var options = _this4._options || [];
        if (options.length) {
          var firstOption = (0, _util.findFirstMenuItem)(options);
          if (firstOption) {
            value = [{
              key: firstOption.key,
              label: _this4.getLabelFromOption(firstOption)
            }];
            _this4.fireChange(value);
          }
        }
      } else if ((0, _util.isMultipleOrTags)(props) && inputValue) {
        // why not use setState?
        _this4.state.inputValue = _this4.getInputDOMNode().value = '';
      }
      props.onBlur(_this4.getVLForOnChange(value));
    }, 10);
  };

  RcSelect.prototype.onClearSelection = function onClearSelection(event) {
    var props = this.props;
    var state = this.state;
    if (props.disabled) {
      return;
    }
    var inputValue = state.inputValue,
        value = state.value;

    event.stopPropagation();
    if (inputValue || value.length) {
      if (value.length) {
        this.fireChange([]);
      }
      this.setOpenState(false, true);
      if (inputValue) {
        this.setInputValue('');
      }
    }
  };

  RcSelect.prototype.onChoiceAnimationLeave = function onChoiceAnimationLeave() {
    this.refs.trigger.refs.trigger.forcePopupAlign();
  };

  RcSelect.prototype.getLabelBySingleValue = function getLabelBySingleValue(children, value) {
    var _this5 = this;

    if (value === undefined) {
      return null;
    }
    var label = null;
    _react2["default"].Children.forEach(children, function (child) {
      if (child.type === _OptGroup2["default"]) {
        var maybe = _this5.getLabelBySingleValue(child.props.children, value);
        if (maybe !== null) {
          label = maybe;
        }
      } else if ((0, _util.getValuePropValue)(child) === value) {
        label = _this5.getLabelFromOption(child);
      }
    });
    return label;
  };

  RcSelect.prototype.getValueByLabel = function getValueByLabel(children, label) {
    var _this6 = this;

    if (label === undefined) {
      return null;
    }
    var value = null;
    _react2["default"].Children.forEach(children, function (child) {
      if (child.type === _OptGroup2["default"]) {
        var maybe = _this6.getValueByLabel(child.props.children, label);
        if (maybe !== null) {
          value = maybe;
        }
      } else if ((0, _util.toArray)(_this6.getLabelFromOption(child)).join('') === label) {
        value = (0, _util.getValuePropValue)(child);
      }
    });
    return value;
  };

  RcSelect.prototype.getLabelFromOption = function getLabelFromOption(child) {
    return (0, _util.getPropValue)(child, this.props.optionLabelProp);
  };

  RcSelect.prototype.getLabelFromProps = function getLabelFromProps(props, value) {
    return this.getLabelByValue(props.children, value);
  };

  RcSelect.prototype.getVLForOnChange = function getVLForOnChange(vls_) {
    var vls = vls_;
    if (vls !== undefined) {
      if (!this.props.labelInValue) {
        vls = vls.map(function (v) {
          return v.key;
        });
      } else {
        vls = vls.map(function (vl) {
          return { key: vl.key, label: vl.label };
        });
      }
      return (0, _util.isMultipleOrTags)(this.props) ? vls : vls[0];
    }
    return vls;
  };

  RcSelect.prototype.getLabelByValue = function getLabelByValue(children, value) {
    var label = this.getLabelBySingleValue(children, value);
    if (label === null) {
      return value;
    }
    return label;
  };

  RcSelect.prototype.getDropdownContainer = function getDropdownContainer() {
    if (!this.dropdownContainer) {
      this.dropdownContainer = document.createElement('div');
      document.body.appendChild(this.dropdownContainer);
    }
    return this.dropdownContainer;
  };

  RcSelect.prototype.getPlaceholderElement = function getPlaceholderElement() {
    var props = this.props,
        state = this.state;

    var hidden = false;
    if (state.inputValue) {
      hidden = true;
    }
    if (state.value.length) {
      hidden = true;
    }
    if ((0, _util.isCombobox)(props) && state.value.length === 1 && !state.value[0].key) {
      hidden = false;
    }
    var placeholder = props.placeholder;
    if (placeholder) {
      return _react2["default"].createElement(
        'div',
        _extends({
          onMouseDown: _util.preventDefaultEvent,
          style: _extends({
            display: hidden ? 'none' : 'block'
          }, _util.UNSELECTABLE_STYLE)
        }, _util.UNSELECTABLE_ATTRIBUTE, {
          onClick: this.onPlaceholderClick,
          className: props.clsPrefix + '-selection-placeholder'
        }),
        placeholder
      );
    }
    return null;
  };

  RcSelect.prototype.getInputElement = function getInputElement() {
    var props = this.props;
    return _react2["default"].createElement(
      'div',
      { className: props.clsPrefix + '-search-field-wrap' },
      _react2["default"].createElement('input', {
        ref: this.saveInputRef,
        onChange: this.onInputChange,
        onKeyDown: this.onInputKeyDown,
        value: this.state.inputValue,
        disabled: props.disabled,
        className: props.clsPrefix + '-search-field'
      }),
      _react2["default"].createElement(
        'span',
        {
          ref: this.saveInputMirrorRef,
          className: props.clsPrefix + '-search-field-mirror'
        },
        this.state.inputValue
      )
    );
  };

  RcSelect.prototype.getInputDOMNode = function getInputDOMNode() {
    return this.inputInstance;
  };

  RcSelect.prototype.getInputMirrorDOMNode = function getInputMirrorDOMNode() {
    return this.inputMirrorInstance;
  };

  RcSelect.prototype.getPopupDOMNode = function getPopupDOMNode() {
    return this.refs.trigger.getPopupDOMNode();
  };

  RcSelect.prototype.getPopupMenuComponent = function getPopupMenuComponent() {
    return this.refs.trigger.getInnerMenu();
  };

  RcSelect.prototype.setOpenState = function setOpenState(open, needFocus) {
    var _this7 = this;

    var props = this.props,
        state = this.state;

    if (state.open === open) {
      this.maybeFocus(open, needFocus);
      return;
    }
    var nextState = {
      open: open
    };
    // clear search input value when open is false in singleMode.
    if (!open && (0, _util.isSingleMode)(props) && props.showSearch) {
      this.setInputValue('');
    }
    if (!open) {
      this.maybeFocus(open, needFocus);
    }
    this.setState(nextState, function () {
      if (open) {
        _this7.maybeFocus(open, needFocus);
      }
    });
  };

  RcSelect.prototype.setInputValue = function setInputValue(inputValue) {
    var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    this.setState({
      inputValue: inputValue
    });
    if (fireSearch) {
      this.props.onSearch(inputValue);
    }
  };

  RcSelect.prototype.clearBlurTime = function clearBlurTime() {
    if (this.blurTimer) {
      clearTimeout(this.blurTimer);
      this.blurTimer = null;
    }
  };

  RcSelect.prototype.clearAdjustTimer = function clearAdjustTimer() {
    if (this.skipAdjustOpenTimer) {
      clearTimeout(this.skipAdjustOpenTimer);
      this.skipAdjustOpenTimer = null;
    }
  };

  RcSelect.prototype.updateFocusClassName = function updateFocusClassName() {
    var refs = this.refs,
        props = this.props;


    if (this._focused) {
      (0, _componentClasses2["default"])(refs.root).add(props.clsPrefix + '-focused');
    } else {
      (0, _componentClasses2["default"])(refs.root).remove(props.clsPrefix + '-focused');
    }
  };

  RcSelect.prototype.maybeFocus = function maybeFocus(open, needFocus) {
    if (needFocus || open) {
      var input = this.getInputDOMNode();
      var _document = document,
          activeElement = _document.activeElement;

      if (input && (open || (0, _util.isMultipleOrTagsOrCombobox)(this.props))) {
        if (activeElement !== input) {
          input.focus();
        }
      } else {
        var selection = this.refs.selection;
        if (activeElement !== selection) {
          selection.focus();
        }
      }
    }
  };

  RcSelect.prototype.addLabelToValue = function addLabelToValue(props, value_) {
    var _this8 = this;

    var value = value_;
    if (props.labelInValue) {
      value.forEach(function (v) {
        v.label = v.label || _this8.getLabelFromProps(props, v.key);
      });
    } else {
      value = value.map(function (v) {
        return {
          key: v,
          label: _this8.getLabelFromProps(props, v)
        };
      });
    }
    return value;
  };

  RcSelect.prototype.addTitleToValue = function addTitleToValue(props, values) {
    var _this9 = this;

    var nextValues = values;
    var keys = values.map(function (v) {
      return v.key;
    });
    _react2["default"].Children.forEach(props.children, function (child) {
      if (child.type === _OptGroup2["default"]) {
        nextValues = _this9.addTitleToValue(child.props, nextValues);
      } else {
        var value = (0, _util.getValuePropValue)(child);
        var valueIndex = keys.indexOf(value);
        if (valueIndex > -1) {
          nextValues[valueIndex].title = child.props.title;
        }
      }
    });
    return nextValues;
  };

  RcSelect.prototype.removeSelected = function removeSelected(selectedKey) {
    var props = this.props;
    if (props.disabled || this.isChildDisabled(selectedKey)) {
      return;
    }
    var label = void 0;
    var value = this.state.value.filter(function (singleValue) {
      if (singleValue.key === selectedKey) {
        label = singleValue.label;
      }
      return singleValue.key !== selectedKey;
    });
    var canMultiple = (0, _util.isMultipleOrTags)(props);

    if (canMultiple) {
      var event = selectedKey;
      if (props.labelInValue) {
        event = {
          key: selectedKey,
          label: label
        };
      }
      props.onDeselect(event);
    }
    this.fireChange(value);
  };

  RcSelect.prototype.openIfHasChildren = function openIfHasChildren() {
    var props = this.props;
    if (_react2["default"].Children.count(props.children) || (0, _util.isSingleMode)(props)) {
      this.setOpenState(true);
    }
  };

  RcSelect.prototype.fireChange = function fireChange(value) {
    var props = this.props;
    if (!('value' in props)) {
      this.setState({
        value: value
      });
    }
    props.onChange(this.getVLForOnChange(value));
  };

  RcSelect.prototype.isChildDisabled = function isChildDisabled(key) {
    return (0, _util.toArray)(this.props.children).some(function (child) {
      var childValue = (0, _util.getValuePropValue)(child);
      return childValue === key && child.props && child.props.disabled;
    });
  };

  RcSelect.prototype.tokenize = function tokenize(string) {
    var _this10 = this;

    var _props = this.props,
        multiple = _props.multiple,
        tokenSeparators = _props.tokenSeparators,
        children = _props.children;

    var nextValue = this.state.value;
    (0, _util.splitBySeparators)(string, tokenSeparators).forEach(function (label) {
      var selectedValue = { key: label, label: label };
      if ((0, _util.findIndexInValueByLabel)(nextValue, label) === -1) {
        if (multiple) {
          var value = _this10.getValueByLabel(children, label);
          if (value) {
            selectedValue.key = value;
            nextValue = nextValue.concat(selectedValue);
          }
        } else {
          nextValue = nextValue.concat(selectedValue);
        }
      }
    });
    return nextValue;
  };

  RcSelect.prototype.adjustOpenState = function adjustOpenState() {
    if (this.skipAdjustOpen) {
      return;
    }
    var open = this.state.open;

    if (typeof document !== 'undefined' && this.getInputDOMNode() && document.activeElement === this.getInputDOMNode()) {
      open = true;
    }
    var options = [];
    if (open) {
      options = this.renderFilterOptions();
    }
    this._options = options;
    if (open && ((0, _util.isMultipleOrTagsOrCombobox)(this.props) || !this.props.showSearch) && !options.length) {
      open = false;
    }
    this.state.open = open;
  };

  RcSelect.prototype.renderTopControlNode = function renderTopControlNode() {
    var _this11 = this;

    var _state = this.state,
        value = _state.value,
        open = _state.open,
        inputValue = _state.inputValue;

    var props = this.props;
    var choiceTransitionName = props.choiceTransitionName,
        clsPrefix = props.clsPrefix,
        maxTagTextLength = props.maxTagTextLength,
        showSearch = props.showSearch;

    var className = clsPrefix + '-selection-rendered';
    // search input is inside topControlNode in single, multiple & combobox. 2016/04/13
    var innerNode = null;
    if ((0, _util.isSingleMode)(props)) {
      var selectedValue = null;
      if (value.length) {
        var showSelectedValue = false;
        var opacity = 1;
        if (!showSearch) {
          showSelectedValue = true;
        } else {
          if (open) {
            showSelectedValue = !inputValue;
            if (showSelectedValue) {
              opacity = 0.4;
            }
          } else {
            showSelectedValue = true;
          }
        }
        var singleValue = value[0];
        selectedValue = _react2["default"].createElement(
          'div',
          {
            key: 'value',
            className: clsPrefix + '-selection-selected-value',
            title: singleValue.title || singleValue.label,
            style: {
              display: showSelectedValue ? 'block' : 'none',
              opacity: opacity
            }
          },
          value[0].label
        );
      }
      if (!showSearch) {
        innerNode = [selectedValue];
      } else {
        innerNode = [selectedValue, _react2["default"].createElement(
          'div',
          {
            className: clsPrefix + '-search ' + clsPrefix + '-search--inline',
            key: 'input',
            style: {
              display: open ? 'block' : 'none'
            }
          },
          this.getInputElement()
        )];
      }
    } else {
      var selectedValueNodes = [];
      if ((0, _util.isMultipleOrTags)(props)) {
        selectedValueNodes = value.map(function (singleValue) {
          var content = singleValue.label;
          var title = singleValue.title || content;
          if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
            content = content.slice(0, maxTagTextLength) + '...';
          }
          var disabled = _this11.isChildDisabled(singleValue.key);
          var choiceClassName = disabled ? clsPrefix + '-selection-choice ' + clsPrefix + '-selection-choice-disabled' : clsPrefix + '-selection-choice';
          return _react2["default"].createElement(
            'li',
            _extends({
              style: _util.UNSELECTABLE_STYLE
            }, _util.UNSELECTABLE_ATTRIBUTE, {
              onMouseDown: _util.preventDefaultEvent,
              className: choiceClassName,
              key: singleValue.key,
              title: title
            }),
            _react2["default"].createElement(
              'div',
              { className: clsPrefix + '-selection-choice-content' },
              content
            ),
            disabled ? null : _react2["default"].createElement('span', {
              className: clsPrefix + '-selection-choice-remove',
              onClick: _this11.removeSelected.bind(_this11, singleValue.key)
            })
          );
        });
      }
      selectedValueNodes.push(_react2["default"].createElement(
        'li',
        {
          className: clsPrefix + '-search ' + clsPrefix + '-search--inline',
          key: '__input'
        },
        this.getInputElement()
      ));

      innerNode = _react2["default"].createElement(
        'ul',
        null,
        selectedValueNodes
      );
    }
    return _react2["default"].createElement(
      'div',
      { className: className },
      this.getPlaceholderElement(),
      innerNode
    );
  };

  RcSelect.prototype.render = function render() {
    var _rootCls;

    var props = this.props;
    var multiple = (0, _util.isMultipleOrTags)(props);
    var state = this.state;
    var className = props.className,
        disabled = props.disabled,
        allowClear = props.allowClear,
        clsPrefix = props.clsPrefix;

    var ctrlNode = this.renderTopControlNode();
    var extraSelectionProps = {};
    var open = this.state.open;

    var options = this._options;
    if (!(0, _util.isMultipleOrTagsOrCombobox)(props)) {
      extraSelectionProps = {
        onKeyDown: this.onKeyDown,
        tabIndex: 0
      };
    }
    var rootCls = (_rootCls = {}, _defineProperty(_rootCls, className, !!className), _defineProperty(_rootCls, clsPrefix, 1), _defineProperty(_rootCls, clsPrefix + '-open', open), _defineProperty(_rootCls, clsPrefix + '-focused', open || !!this._focused), _defineProperty(_rootCls, clsPrefix + '-combobox', (0, _util.isCombobox)(props)), _defineProperty(_rootCls, clsPrefix + '-disabled', disabled), _defineProperty(_rootCls, clsPrefix + '-enabled', !disabled), _defineProperty(_rootCls, clsPrefix + '-allow-clear', !!props.allowClear), _rootCls);
    var clearStyle = _extends({}, _util.UNSELECTABLE_STYLE, {
      display: 'none'
    });
    if (state.inputValue || state.value.length) {
      clearStyle.display = 'block';
    }
    var clear = _react2["default"].createElement('span', _extends({
      key: 'clear',
      onMouseDown: _util.preventDefaultEvent,
      style: clearStyle
    }, _util.UNSELECTABLE_ATTRIBUTE, {
      className: clsPrefix + '-selection-clear',
      onClick: this.onClearSelection
    }));
    return _react2["default"].createElement(
      _SelectTrigger2["default"],
      {
        onPopupFocus: this.onPopupFocus,
        dropdownAlign: props.dropdownAlign,
        dropdownClassName: props.dropdownClassName,
        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        transitionName: props.transitionName,
        animation: props.animation,
        clsPrefix: props.clsPrefix,
        dropdownStyle: props.dropdownStyle,
        combobox: props.combobox,
        showSearch: props.showSearch,
        options: options,
        multiple: multiple,
        disabled: disabled,
        visible: open,
        inputValue: state.inputValue,
        value: state.value,
        onDropdownVisibleChange: this.onDropdownVisibleChange,
        getPopupContainer: props.getPopupContainer,
        onMenuSelect: this.onMenuSelect,
        onMenuDeselect: this.onMenuDeselect,
        ref: 'trigger'
      },
      _react2["default"].createElement(
        'div',
        {
          style: props.style,
          ref: 'root',
          onBlur: this.onOuterBlur,
          onFocus: this.onOuterFocus,
          className: (0, _classnames2["default"])(rootCls)
        },
        _react2["default"].createElement(
          'div',
          _extends({
            ref: 'selection',
            key: 'selection',
            className: clsPrefix + '-selection\n            ' + clsPrefix + '-selection--' + (multiple ? 'multiple' : 'single'),
            role: 'combobox',
            'aria-autocomplete': 'list',
            'aria-haspopup': 'true',
            'aria-expanded': open
          }, extraSelectionProps),
          ctrlNode,
          allowClear && !multiple ? clear : null,
          multiple || !props.showArrow ? null : _react2["default"].createElement(
            'span',
            _extends({
              key: 'arrow',
              className: clsPrefix + '-arrow',
              style: _util.UNSELECTABLE_STYLE
            }, _util.UNSELECTABLE_ATTRIBUTE, {
              onMouseDown: _util.preventDefaultEvent,
              onClick: this.onArrowClick
            }),
            _react2["default"].createElement('b', null)
          )
        )
      )
    );
  };

  return RcSelect;
}(_react.Component);

;

RcSelect.defaultProps = defaultProps;
RcSelect.propTypes = propTypes;

exports["default"] = RcSelect;
module.exports = exports['default'];