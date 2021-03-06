"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
// var react_1 = require("react");
var p5 = require("p5/lib/p5.min");
var React = require("react");
var P5Wrapper = /** @class */ (function(_super) {
  __extends(P5Wrapper, _super);
  function P5Wrapper(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      sketch: props.sketch,
      canvas: null,
      wrapper: null
    };
    return _this;
  }
  P5Wrapper.prototype.componentDidMount = function() {
    var canvas = new p5(this.state.sketch, this.wrapper);
    if (canvas.myCustomRedrawAccordingToNewPropsHandler) {
      canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
    this.setState({
      canvas: canvas,
      wrapper: this.wrapper
    });
  };
  P5Wrapper.getDerivedStateFromProps = function(props, state) {
    var canvas = state.canvas;
    if (state.sketch !== props.sketch) {
      state.wrapper.removeChild(state.wrapper.childNodes[0]);
      canvas.remove();
      canvas = new p5(props.sketch, state.wrapper);
      return __assign({}, state, { sketch: props.sketch, canvas: canvas });
    }
    if (canvas && canvas.myCustomRedrawAccordingToNewPropsHandler) {
      canvas.myCustomRedrawAccordingToNewPropsHandler(props);
    }
    return state;
  };
  P5Wrapper.prototype.componentWillUnmount = function() {
    this.state.canvas.remove();
  };
  P5Wrapper.prototype.render = function() {
    var _this = this;
    return React.createElement("div", {
      ref: function(wrapper) {
        return (_this.wrapper = wrapper);
      }
    });
  };
  return P5Wrapper;
})(React.Component);
exports.default = P5Wrapper;
