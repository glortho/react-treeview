'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  collapsed: _propTypes2.default.bool,
  defaultCollapsed: _propTypes2.default.bool,
  nodeLabel: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  itemClassName: _propTypes2.default.string
};

var TreeView = function (_React$Component) {
  _inherits(TreeView, _React$Component);

  function TreeView(props) {
    _classCallCheck(this, TreeView);

    var _this = _possibleConstructorReturn(this, (TreeView.__proto__ || Object.getPrototypeOf(TreeView)).call(this, props));

    _this.state = { collapsed: _this.props.defaultCollapsed };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(TreeView, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ collapsed: !this.state.collapsed });
      if (this.props.onClick) {
        var _props;

        (_props = this.props).onClick.apply(_props, arguments);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          _props2$collapsed = _props2.collapsed,
          collapsed = _props2$collapsed === undefined ? this.state.collapsed : _props2$collapsed,
          _props2$className = _props2.className,
          className = _props2$className === undefined ? '' : _props2$className,
          _props2$itemClassName = _props2.itemClassName,
          itemClassName = _props2$itemClassName === undefined ? '' : _props2$itemClassName,
          nodeLabel = _props2.nodeLabel,
          children = _props2.children,
          defaultCollapsed = _props2.defaultCollapsed,
          rest = _objectWithoutProperties(_props2, ['collapsed', 'className', 'itemClassName', 'nodeLabel', 'children', 'defaultCollapsed']);

      var arrowClassName = 'tree-view_arrow';
      var containerClassName = 'tree-view_children';
      if (collapsed) {
        arrowClassName += ' tree-view_arrow-collapsed';
        containerClassName += ' tree-view_children-collapsed';
      }

      var arrow = _react2.default.createElement('div', _extends({}, rest, {
        className: className + ' ' + arrowClassName,
        onClick: this.handleClick }));

      return _react2.default.createElement(
        'div',
        { className: 'tree-view' },
        _react2.default.createElement(
          'div',
          { className: 'tree-view_item ' + itemClassName },
          arrow,
          nodeLabel
        ),
        _react2.default.createElement(
          'div',
          { className: containerClassName },
          collapsed ? null : children
        )
      );
    }
  }]);

  return TreeView;
}(_react2.default.Component);

exports.default = TreeView;


TreeView.propTypes = propTypes;