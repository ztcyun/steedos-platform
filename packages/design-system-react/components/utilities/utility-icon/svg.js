"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Svg = /*#__PURE__*/function (_React$Component) {
  _inherits(Svg, _React$Component);

  var _super = _createSuper(Svg);

  function Svg() {
    var _this;

    _classCallCheck(this, Svg);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getPaths", function (paths) {
      if (paths instanceof Array) {
        return paths.map(function (item) {
          return /*#__PURE__*/_react.default.createElement("path", item);
        });
      }

      return /*#__PURE__*/_react.default.createElement("path", _extends({
        key: "pathSVG"
      }, paths));
    });

    _defineProperty(_assertThisInitialized(_this), "getCircles", function (circles) {
      if (circles instanceof Array) {
        return circles.map(function (item) {
          return /*#__PURE__*/_react.default.createElement("circle", item);
        });
      }

      return /*#__PURE__*/_react.default.createElement("circle", _extends({
        key: "circleSVG"
      }, circles));
    });

    _defineProperty(_assertThisInitialized(_this), "getEllipses", function (ellipses) {
      if (ellipses instanceof Array) {
        return ellipses.map(function (item) {
          return /*#__PURE__*/_react.default.createElement("ellipse", item);
        });
      }

      return /*#__PURE__*/_react.default.createElement("ellipse", _extends({
        key: "ellipseSVG"
      }, ellipses));
    });

    _defineProperty(_assertThisInitialized(_this), "getGroups", function (groups) {
      if (groups instanceof Array) {
        return groups.map(function (item) {
          return /*#__PURE__*/_react.default.createElement("g", null, _this.getShapes(item));
        });
      }

      return /*#__PURE__*/_react.default.createElement("g", {
        key: "groupsSVG"
      }, _this.getShapes(groups));
    });

    _defineProperty(_assertThisInitialized(_this), "getShapes", function (data) {
      var shapes = [];

      if (data) {
        if (data.g) {
          // eslint-disable-next-line fp/no-mutating-methods
          shapes.push(_this.getGroups(data.g));
        }

        if (data.ellipse) {
          // eslint-disable-next-line fp/no-mutating-methods
          shapes.push(_this.getEllipses(data.ellipse));
        }

        if (data.circle) {
          // eslint-disable-next-line fp/no-mutating-methods
          shapes.push(_this.getCircles(data.circle));
        }

        if (data.path) {
          // eslint-disable-next-line fp/no-mutating-methods
          shapes.push(_this.getPaths(data.path));
        }
      }

      return shapes;
    });

    _defineProperty(_assertThisInitialized(_this), "getSVG", function (_ref, props) {
      var viewBox = _ref.viewBox,
          rest = _objectWithoutProperties(_ref, ["viewBox"]);

      return /*#__PURE__*/_react.default.createElement("svg", {
        "aria-hidden": props['aria-hidden'],
        className: props.className,
        viewBox: viewBox,
        name: props.name,
        style: props.style
      }, _this.getShapes(rest));
    });

    return _this;
  }

  _createClass(Svg, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          props = _objectWithoutProperties(_this$props, ["data"]);

      return data ? this.getSVG(data, props) : null;
    }
  }]);

  return Svg;
}(_react.default.Component);

_defineProperty(Svg, "displayName", 'Svg');

var _default = Svg;
exports.default = _default;