'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_STYLE = undefined;
exports.getValuePropValue = getValuePropValue;
exports.getPropValue = getPropValue;
exports.isCombobox = isCombobox;
exports.isMultipleOrTags = isMultipleOrTags;
exports.isMultipleOrTagsOrCombobox = isMultipleOrTagsOrCombobox;
exports.isSingleMode = isSingleMode;
exports.toArray = toArray;
exports.preventDefaultEvent = preventDefaultEvent;
exports.findIndexInValueByKey = findIndexInValueByKey;
exports.findIndexInValueByLabel = findIndexInValueByLabel;
exports.getSelectKeys = getSelectKeys;
exports.findFirstMenuItem = findFirstMenuItem;
exports.includesSeparators = includesSeparators;
exports.splitBySeparators = splitBySeparators;

var _beeMenus = require('bee-menus');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getValuePropValue(child) {
  //传入option标签 + 动态生成option数组
  if (child instanceof Array) {
    child.forEach(function (_child) {
      if ('value' in _child.props) {
        return _child.props.value;
      }
      if (_child.key) {
        return _child.key;
      }
    });
  } else {
    var props = child.props;
    if ('value' in props) {
      return props.value;
    }
    if (child.key) {
      return child.key;
    }
    throw new Error('no key or value for ' + child);
  }
}

function getPropValue(child, prop) {
  if (prop === 'value') {
    return getValuePropValue(child);
  }
  return child.props[prop];
}

function isCombobox(props) {
  return props.combobox;
}

function isMultipleOrTags(props) {
  return props.multiple || props.tags;
}

function isMultipleOrTagsOrCombobox(props) {
  return isMultipleOrTags(props) || isCombobox(props);
}

function isSingleMode(props) {
  return !isMultipleOrTagsOrCombobox(props);
}

function toArray(value) {
  var ret = value;
  if (value === undefined) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  }
  return ret;
}

function preventDefaultEvent(e) {
  e.preventDefault();
}

function findIndexInValueByKey(value, key) {
  var index = -1;
  for (var i = 0; i < value.length; i++) {
    if (value[i].key === key) {
      index = i;
      break;
    }
  }
  return index;
}

function findIndexInValueByLabel(value, label) {
  var index = -1;
  for (var i = 0; i < value.length; i++) {
    if (toArray(value[i].label).join('') === label) {
      index = i;
      break;
    }
  }
  return index;
}

function getSelectKeys(menuItems, value) {
  if (value === null || value === undefined) {
    return [];
  }
  var selectedKeys = [];
  _react2["default"].Children.forEach(menuItems, function (item) {
    if (item.type === _beeMenus.ItemGroup) {
      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
    } else {
      var itemValue = getValuePropValue(item);
      var itemKey = item.key;
      if (findIndexInValueByKey(value, itemValue) !== -1 && itemKey) {
        selectedKeys.push(itemKey);
      }
    }
  });
  return selectedKeys;
}

var UNSELECTABLE_STYLE = exports.UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};

var UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'unselectable'
};

function findFirstMenuItem(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (child.type === _beeMenus.ItemGroup) {
      var found = findFirstMenuItem(child.props.children);
      if (found) {
        return found;
      }
    } else if (!child.props.disabled) {
      return child;
    }
  }
  return null;
}

function includesSeparators(string, separators) {
  for (var i = 0; i < separators.length; ++i) {
    if (string.lastIndexOf(separators[i]) > 0) {
      return true;
    }
  }
  return false;
}

function splitBySeparators(string, separators) {
  var reg = new RegExp('[' + separators.join() + ']');
  var array = string.split(reg);
  if (array[0] === '') {
    array.shift();
  }
  if (array[array.length - 1] === '') {
    array.pop();
  }
  return array;
}