"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        id: "header"
      }, /*#__PURE__*/React.createElement("h1", null, "ML Learning Tools on Genomic analysis")));
    }
  }]);

  return Header;
}(React.Component);

var FileChoose = /*#__PURE__*/function (_React$Component2) {
  _inherits(FileChoose, _React$Component2);

  var _super2 = _createSuper(FileChoose);

  function FileChoose() {
    var _this;

    _classCallCheck(this, FileChoose);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "submit", function (e) {
      e.preventDefault();
      var formData = new FormData(e.target);
      fetch('mongodb://localhost/travellor', {
        method: 'POST',
        body: formData
      }).then(function (response) {
        return console.log(response);
      });
    });

    return _this;
  }

  _createClass(FileChoose, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        id: "filechoose"
      }, /*#__PURE__*/React.createElement("form", {
        className: "uploadfile",
        onSubmit: this.submit,
        action: "upload.php",
        method: "post",
        enctype: "multipart/form-data"
      }, /*#__PURE__*/React.createElement("label", {
        className: "textinput"
      }, "Upload the DNA sample "), /*#__PURE__*/React.createElement("input", {
        type: "file",
        name: "form-control",
        className: "uploadbutton",
        placeholder: "Please upload the DNA sample"
      }), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "Upload",
        className: "analysis"
      }))));
    }
  }]);

  return FileChoose;
}(React.Component);

var FunctionChoose = /*#__PURE__*/function (_React$Component3) {
  _inherits(FunctionChoose, _React$Component3);

  var _super3 = _createSuper(FunctionChoose);

  function FunctionChoose() {
    _classCallCheck(this, FunctionChoose);

    return _super3.apply(this, arguments);
  }

  _createClass(FunctionChoose, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        id: "mlselectcontent"
      }, /*#__PURE__*/React.createElement("p", null, "Select one tool to do analysis:"), /*#__PURE__*/React.createElement("button", {
        className: "algorithms",
        onClick: "alertDistance()"
      }, " Genetic Distance Tool"), /*#__PURE__*/React.createElement("button", {
        className: "algorithms",
        onClick: "alertPCA()"
      }, "Genetic PCA Tool"), /*#__PURE__*/React.createElement("button", {
        className: "algorithms",
        onClick: "alertBreakdown()"
      }, "Ancestry Breakdown")));
    }
  }]);

  return FunctionChoose;
}(React.Component);

var ResultShow = /*#__PURE__*/function (_React$Component4) {
  _inherits(ResultShow, _React$Component4);

  var _super4 = _createSuper(ResultShow);

  function ResultShow() {
    _classCallCheck(this, ResultShow);

    return _super4.apply(this, arguments);
  }

  _createClass(ResultShow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        id: "geneticDistanceTool"
      }, /*#__PURE__*/React.createElement("canvas", {
        id: "canvas",
        width: "1000",
        height: "700"
      })));
    }
  }]);

  return ResultShow;
}(React.Component);

var FooTer = /*#__PURE__*/function (_React$Component5) {
  _inherits(FooTer, _React$Component5);

  var _super5 = _createSuper(FooTer);

  function FooTer() {
    _classCallCheck(this, FooTer);

    return _super5.apply(this, arguments);
  }

  _createClass(FooTer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        id: "footer"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
        href: "Algorithms.html"
      }, "IT5007 Course project"))));
    }
  }]);

  return FooTer;
}(React.Component);

function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(query) {
    var variables,
        response,
        body,
        result,
        error,
        details,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            variables = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            _context3.prev = 1;
            _context3.next = 4;
            return fetch('/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.text();

          case 7:
            body = _context3.sent;
            result = JSON.parse(body, jsonDateReviver);

            if (result.errors) {
              error = result.errors[0];

              if (error.extensions.code == 'BAD_USER_INPUT') {
                details = error.extensions.exception.errors.join('\n ');
                alert("".concat(error.message, ":\n ").concat(details));
              } else {
                alert("".concat(error.extensions.code, ": ").concat(error.message));
              }
            }

            return _context3.abrupt("return", result.data);

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](1);
            alert("Error in sending data to server: ".concat(_context3.t0.message));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 13]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

var MainContent = /*#__PURE__*/function (_React$Component6) {
  _inherits(MainContent, _React$Component6);

  var _super6 = _createSuper(MainContent);

  function MainContent() {
    var _this2;

    _classCallCheck(this, MainContent);

    _this2 = _super6.call(this);
    _this2.state = {
      travellors: []
    };
    return _this2;
  }

  _createClass(MainContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n      travellorList {\n        id phone status pname\n        created ticketnumber due\n      }\n    }";
                _context.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context.sent;

                if (data) {
                  this.setState({
                    travellors: data.travellorList
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "createTravellor",
    value: function () {
      var _createTravellor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(travellor) {
        var query;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "mutation travellorAdd($travellor: TravellorInputs!) {\n      travellorAdd(travellor: $travellor) {\n        id\n      }\n    }";

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createTravellor(_x2) {
        return _createTravellor.apply(this, arguments);
      }

      return createTravellor;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(FileChoose, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(FunctionChoose, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ResultShow, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(FooTer, null), /*#__PURE__*/React.createElement("hr", null));
    }
  }]);

  return MainContent;
}(React.Component);

var element = /*#__PURE__*/React.createElement(MainContent, null);
ReactDOM.render(element, document.getElementById('contents'));