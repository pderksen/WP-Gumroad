/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gumroad_block_block_js__ = __webpack_require__(/*! ./gumroad-block/block.js */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ndW1yb2FkLWJsb2NrL2Jsb2NrLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!************************************!*\
  !*** ./src/gumroad-block/block.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * BLOCK: gumroad-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar Component = wp.element.Component;\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    RichText = _wp$editor.RichText;\nvar _wp$components = wp.components,\n    SelectControl = _wp$components.SelectControl,\n    PanelBody = _wp$components.PanelBody;\n\n\nvar gumURL = 'https://gum.co/';\nvar defaultID = 'DviQY';\n\nvar GumControls = function (_Component) {\n  _inherits(GumControls, _Component);\n\n  function GumControls(props) {\n    _classCallCheck(this, GumControls);\n\n    return _possibleConstructorReturn(this, (GumControls.__proto__ || Object.getPrototypeOf(GumControls)).apply(this, arguments));\n  }\n\n  _createClass(GumControls, [{\n    key: 'compose_url',\n    value: function compose_url(value) {\n      if (value == '') {\n        return gumURL + defaultID;\n      }\n      return gumURL + value;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var typeOptions = [{ value: 'none', label: __('Link') }, { value: 'overlay', label: __('Overlay') }, { value: 'embed', label: __('Embed') }];\n\n      var buttonOptions = [{ value: '', label: __('Link') }, { value: 'gumroad-button', label: __('Button') }];\n\n      var wantedOptions = [{ value: '', label: __('unwanted') }, { value: 'true', label: __('Wanted') }];\n\n      var _props = this.props,\n          setAttributes = _props.setAttributes,\n          _props$attributes = _props.attributes,\n          id = _props$attributes.id,\n          type = _props$attributes.type,\n          button = _props$attributes.button,\n          classes = _props$attributes.classes,\n          wanted = _props$attributes.wanted,\n          url = _props$attributes.url;\n\n\n      return wp.element.createElement(\n        InspectorControls,\n        { key: 'GumControls' },\n        wp.element.createElement(\n          PanelBody,\n          null,\n          wp.element.createElement(\n            'label',\n            null,\n            'Product ID:'\n          ),\n          wp.element.createElement(RichText, {\n            tagName: 'div',\n            placeholder: __(defaultID),\n            value: id,\n            onChange: function onChange(value) {\n              setAttributes({ id: value });\n              setAttributes({ url: _this2.compose_url(value) });\n            }\n          }),\n          wp.element.createElement('br', null),\n          wp.element.createElement(SelectControl, {\n            label: __('Behavior Type'),\n            description: __('Set the type of Gumroad link behavior: Link, Overlay, or Embed.'),\n            options: typeOptions,\n            value: type,\n            onChange: function onChange(value) {\n              return setAttributes({ type: value });\n            }\n          }),\n          wp.element.createElement(SelectControl, {\n            label: __('Button?'),\n            description: __('Make the link a button.'),\n            options: buttonOptions,\n            value: button,\n            onChange: function onChange(value) {\n              return setAttributes({ button: value });\n            }\n          }),\n          wp.element.createElement(SelectControl, {\n            label: __('Wanted?'),\n            description: __('Is this product immediately wanted?'),\n            options: wantedOptions,\n            value: wanted,\n            onChange: function onChange(value) {\n              return setAttributes({ wanted: value });\n            }\n          }),\n          wp.element.createElement(\n            'label',\n            null,\n            'Classes:'\n          ),\n          wp.element.createElement(RichText, {\n            tagName: 'div',\n            placeholder: __('Add extra classes to your link.'),\n            value: classes,\n            onChange: function onChange(value) {\n              return setAttributes({ classes: value });\n            }\n          }),\n          wp.element.createElement('br', null)\n        )\n      );\n    }\n  }]);\n\n  return GumControls;\n}(Component);\n\n;\n\nvar EditBlockContent = function (_Component2) {\n  _inherits(EditBlockContent, _Component2);\n\n  function EditBlockContent() {\n    _classCallCheck(this, EditBlockContent);\n\n    return _possibleConstructorReturn(this, (EditBlockContent.__proto__ || Object.getPrototypeOf(EditBlockContent)).apply(this, arguments));\n  }\n\n  _createClass(EditBlockContent, [{\n    key: 'render',\n    value: function render() {\n      var _props2 = this.props,\n          _props2$attributes = _props2.attributes,\n          id = _props2$attributes.id,\n          text = _props2$attributes.text,\n          type = _props2$attributes.type,\n          url = _props2$attributes.url,\n          button = _props2$attributes.button,\n          classes = _props2$attributes.classes,\n          wanted = _props2$attributes.wanted,\n          setAttributes = _props2.setAttributes;\n\n\n      return [wp.element.createElement(GumControls, Object.assign({ setAttributes: setAttributes }, this.props)), wp.element.createElement(\n        'div',\n        { id: 'gumroad-block', className: 'gumroad-block' },\n        wp.element.createElement(RichText, {\n          tagName: 'div',\n          placeholder: __('I want this!'),\n          keepPlaceholderOnFocus: true,\n          className: 'gumroad-block-link',\n          value: text,\n          onChange: function onChange(value) {\n            return setAttributes({ text: value });\n          }\n        })\n      )];\n    }\n  }]);\n\n  return EditBlockContent;\n}(Component);\n\n;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('gumroad/gumroad-block', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('Gumroad Block'), // Block title.\n  icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('gumroad-block')],\n  attributes: {\n    id: {\n      type: 'string',\n      default: ''\n    },\n    type: {\n      type: 'string',\n      default: 'none'\n    },\n    classes: {\n      type: 'string',\n      default: ''\n    },\n    text: {\n      type: 'string',\n      default: 'I want this!'\n    },\n    wanted: {\n      type: 'string',\n      default: ''\n    },\n    button: {\n      type: 'string',\n      default: 'false'\n    },\n    url: {\n      type: 'string',\n      default: ''\n    }\n  },\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   *\n   * The \"edit\" property must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   */\n  edit: EditBlockContent,\n\n  /**\n   * The save function defines the way in which the different attributes should be combined\n   * into the final markup, which is then serialized by Gutenberg into post_content.\n   *\n   * The \"save\" property must be specified and must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   */\n  save: function save(props) {\n    var _props$attributes2 = props.attributes,\n        id = _props$attributes2.id,\n        type = _props$attributes2.type,\n        classes = _props$attributes2.classes,\n        text = _props$attributes2.text,\n        wanted = _props$attributes2.wanted,\n        button = _props$attributes2.button,\n        url = _props$attributes2.url;\n\n\n    var urlString = '';\n    urlString = url;\n\n    if (wanted == 'true') {\n      urlString = urlString + '?wanted=true';\n    }\n    console.log('id: ', id);\n    if (type == 'embed') {\n\n      return (// return if link behavior normal\n        // <div\n        // className={\"gumroad-product-embed \" + classes}\n        // data-gumroad-product-id={\"\" + id + \"\"}\n        // ></div>\n        wp.element.createElement('div', { 'class': 'gumroad-product-embed', 'data-gumroad-product-id': \"\" + id + \"\" })\n      );\n    } else if (type == 'overlay') {\n      return (// return if link behavior normal\n        wp.element.createElement(\n          'a',\n          {\n            href: urlString,\n            className: \" \" + classes + \" \" + button + \" \"\n          },\n          text && !!text.length && wp.element.createElement(RichText.Content, {\n            value: text\n          })\n        )\n      );\n    } else {\n      return (// return if link behavior normal\n        wp.element.createElement(\n          'a',\n          {\n            href: '#',\n            className: \" \" + classes + \" \" + button + \" \",\n            onClick: \"window.open('\" + urlString + \"', '_blank')\"\n          },\n          text && !!text.length && wp.element.createElement(RichText.Content, {\n            value: text\n          })\n        )\n      );\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ndW1yb2FkLWJsb2NrL2Jsb2NrLmpzP2VmOTUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIEJMT0NLOiBndW1yb2FkLWJsb2NrXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciBDb21wb25lbnQgPSB3cC5lbGVtZW50LkNvbXBvbmVudDtcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dDtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgU2VsZWN0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlNlbGVjdENvbnRyb2wsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5O1xuXG5cbnZhciBndW1VUkwgPSAnaHR0cHM6Ly9ndW0uY28vJztcbnZhciBkZWZhdWx0SUQgPSAnRHZpUVknO1xuXG52YXIgR3VtQ29udHJvbHMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR3VtQ29udHJvbHMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEd1bUNvbnRyb2xzKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEd1bUNvbnRyb2xzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR3VtQ29udHJvbHMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHdW1Db250cm9scykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEd1bUNvbnRyb2xzLCBbe1xuICAgIGtleTogJ2NvbXBvc2VfdXJsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9zZV91cmwodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PSAnJykge1xuICAgICAgICByZXR1cm4gZ3VtVVJMICsgZGVmYXVsdElEO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGd1bVVSTCArIHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdHlwZU9wdGlvbnMgPSBbeyB2YWx1ZTogJ25vbmUnLCBsYWJlbDogX18oJ0xpbmsnKSB9LCB7IHZhbHVlOiAnb3ZlcmxheScsIGxhYmVsOiBfXygnT3ZlcmxheScpIH0sIHsgdmFsdWU6ICdlbWJlZCcsIGxhYmVsOiBfXygnRW1iZWQnKSB9XTtcblxuICAgICAgdmFyIGJ1dHRvbk9wdGlvbnMgPSBbeyB2YWx1ZTogJycsIGxhYmVsOiBfXygnTGluaycpIH0sIHsgdmFsdWU6ICdndW1yb2FkLWJ1dHRvbicsIGxhYmVsOiBfXygnQnV0dG9uJykgfV07XG5cbiAgICAgIHZhciB3YW50ZWRPcHRpb25zID0gW3sgdmFsdWU6ICcnLCBsYWJlbDogX18oJ3Vud2FudGVkJykgfSwgeyB2YWx1ZTogJ3RydWUnLCBsYWJlbDogX18oJ1dhbnRlZCcpIH1dO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzZXRBdHRyaWJ1dGVzID0gX3Byb3BzLnNldEF0dHJpYnV0ZXMsXG4gICAgICAgICAgX3Byb3BzJGF0dHJpYnV0ZXMgPSBfcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgICBpZCA9IF9wcm9wcyRhdHRyaWJ1dGVzLmlkLFxuICAgICAgICAgIHR5cGUgPSBfcHJvcHMkYXR0cmlidXRlcy50eXBlLFxuICAgICAgICAgIGJ1dHRvbiA9IF9wcm9wcyRhdHRyaWJ1dGVzLmJ1dHRvbixcbiAgICAgICAgICBjbGFzc2VzID0gX3Byb3BzJGF0dHJpYnV0ZXMuY2xhc3NlcyxcbiAgICAgICAgICB3YW50ZWQgPSBfcHJvcHMkYXR0cmlidXRlcy53YW50ZWQsXG4gICAgICAgICAgdXJsID0gX3Byb3BzJGF0dHJpYnV0ZXMudXJsO1xuXG5cbiAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEluc3BlY3RvckNvbnRyb2xzLFxuICAgICAgICB7IGtleTogJ0d1bUNvbnRyb2xzJyB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgUGFuZWxCb2R5LFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAnUHJvZHVjdCBJRDonXG4gICAgICAgICAgKSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF9fKGRlZmF1bHRJRCksXG4gICAgICAgICAgICB2YWx1ZTogaWQsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGlkOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHVybDogX3RoaXMyLmNvbXBvc2VfdXJsKHZhbHVlKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcbiAgICAgICAgICAgIGxhYmVsOiBfXygnQmVoYXZpb3IgVHlwZScpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IF9fKCdTZXQgdGhlIHR5cGUgb2YgR3Vtcm9hZCBsaW5rIGJlaGF2aW9yOiBMaW5rLCBPdmVybGF5LCBvciBFbWJlZC4nKSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHR5cGVPcHRpb25zLFxuICAgICAgICAgICAgdmFsdWU6IHR5cGUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0eXBlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuICAgICAgICAgICAgbGFiZWw6IF9fKCdCdXR0b24/JyksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogX18oJ01ha2UgdGhlIGxpbmsgYSBidXR0b24uJyksXG4gICAgICAgICAgICBvcHRpb25zOiBidXR0b25PcHRpb25zLFxuICAgICAgICAgICAgdmFsdWU6IGJ1dHRvbixcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJ1dHRvbjogdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcbiAgICAgICAgICAgIGxhYmVsOiBfXygnV2FudGVkPycpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IF9fKCdJcyB0aGlzIHByb2R1Y3QgaW1tZWRpYXRlbHkgd2FudGVkPycpLFxuICAgICAgICAgICAgb3B0aW9uczogd2FudGVkT3B0aW9ucyxcbiAgICAgICAgICAgIHZhbHVlOiB3YW50ZWQsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB3YW50ZWQ6IHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ0NsYXNzZXM6J1xuICAgICAgICAgICksXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfXygnQWRkIGV4dHJhIGNsYXNzZXMgdG8geW91ciBsaW5rLicpLFxuICAgICAgICAgICAgdmFsdWU6IGNsYXNzZXMsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBjbGFzc2VzOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR3VtQ29udHJvbHM7XG59KENvbXBvbmVudCk7XG5cbjtcblxudmFyIEVkaXRCbG9ja0NvbnRlbnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKEVkaXRCbG9ja0NvbnRlbnQsIF9Db21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBFZGl0QmxvY2tDb250ZW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFZGl0QmxvY2tDb250ZW50KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRWRpdEJsb2NrQ29udGVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVkaXRCbG9ja0NvbnRlbnQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFZGl0QmxvY2tDb250ZW50LCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBfcHJvcHMyJGF0dHJpYnV0ZXMgPSBfcHJvcHMyLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgaWQgPSBfcHJvcHMyJGF0dHJpYnV0ZXMuaWQsXG4gICAgICAgICAgdGV4dCA9IF9wcm9wczIkYXR0cmlidXRlcy50ZXh0LFxuICAgICAgICAgIHR5cGUgPSBfcHJvcHMyJGF0dHJpYnV0ZXMudHlwZSxcbiAgICAgICAgICB1cmwgPSBfcHJvcHMyJGF0dHJpYnV0ZXMudXJsLFxuICAgICAgICAgIGJ1dHRvbiA9IF9wcm9wczIkYXR0cmlidXRlcy5idXR0b24sXG4gICAgICAgICAgY2xhc3NlcyA9IF9wcm9wczIkYXR0cmlidXRlcy5jbGFzc2VzLFxuICAgICAgICAgIHdhbnRlZCA9IF9wcm9wczIkYXR0cmlidXRlcy53YW50ZWQsXG4gICAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9wcm9wczIuc2V0QXR0cmlidXRlcztcblxuXG4gICAgICByZXR1cm4gW3dwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChHdW1Db250cm9scywgT2JqZWN0LmFzc2lnbih7IHNldEF0dHJpYnV0ZXM6IHNldEF0dHJpYnV0ZXMgfSwgdGhpcy5wcm9wcykpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGlkOiAnZ3Vtcm9hZC1ibG9jaycsIGNsYXNzTmFtZTogJ2d1bXJvYWQtYmxvY2snIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBfXygnSSB3YW50IHRoaXMhJyksXG4gICAgICAgICAga2VlcFBsYWNlaG9sZGVyT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICBjbGFzc05hbWU6ICdndW1yb2FkLWJsb2NrLWxpbmsnLFxuICAgICAgICAgIHZhbHVlOiB0ZXh0LFxuICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0ZXh0OiB2YWx1ZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRWRpdEJsb2NrQ29udGVudDtcbn0oQ29tcG9uZW50KTtcblxuO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2d1bXJvYWQvZ3Vtcm9hZC1ibG9jaycsIHtcbiAgLy8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG4gIHRpdGxlOiBfXygnR3Vtcm9hZCBCbG9jaycpLCAvLyBCbG9jayB0aXRsZS5cbiAgaWNvbjogJ3NoaWVsZCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cbiAgY2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cbiAga2V5d29yZHM6IFtfXygnZ3Vtcm9hZC1ibG9jaycpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdub25lJ1xuICAgIH0sXG4gICAgY2xhc3Nlczoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnSSB3YW50IHRoaXMhJ1xuICAgIH0sXG4gICAgd2FudGVkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJ1xuICAgIH0sXG4gICAgdXJsOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgICpcbiAgICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAgKi9cbiAgZWRpdDogRWRpdEJsb2NrQ29udGVudCxcblxuICAvKipcbiAgICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAgKlxuICAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAgKi9cbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHZhciBfcHJvcHMkYXR0cmlidXRlczIgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICBpZCA9IF9wcm9wcyRhdHRyaWJ1dGVzMi5pZCxcbiAgICAgICAgdHlwZSA9IF9wcm9wcyRhdHRyaWJ1dGVzMi50eXBlLFxuICAgICAgICBjbGFzc2VzID0gX3Byb3BzJGF0dHJpYnV0ZXMyLmNsYXNzZXMsXG4gICAgICAgIHRleHQgPSBfcHJvcHMkYXR0cmlidXRlczIudGV4dCxcbiAgICAgICAgd2FudGVkID0gX3Byb3BzJGF0dHJpYnV0ZXMyLndhbnRlZCxcbiAgICAgICAgYnV0dG9uID0gX3Byb3BzJGF0dHJpYnV0ZXMyLmJ1dHRvbixcbiAgICAgICAgdXJsID0gX3Byb3BzJGF0dHJpYnV0ZXMyLnVybDtcblxuXG4gICAgdmFyIHVybFN0cmluZyA9ICcnO1xuICAgIHVybFN0cmluZyA9IHVybDtcblxuICAgIGlmICh3YW50ZWQgPT0gJ3RydWUnKSB7XG4gICAgICB1cmxTdHJpbmcgPSB1cmxTdHJpbmcgKyAnP3dhbnRlZD10cnVlJztcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2lkOiAnLCBpZCk7XG4gICAgaWYgKHR5cGUgPT0gJ2VtYmVkJykge1xuXG4gICAgICByZXR1cm4gKC8vIHJldHVybiBpZiBsaW5rIGJlaGF2aW9yIG5vcm1hbFxuICAgICAgICAvLyA8ZGl2XG4gICAgICAgIC8vIGNsYXNzTmFtZT17XCJndW1yb2FkLXByb2R1Y3QtZW1iZWQgXCIgKyBjbGFzc2VzfVxuICAgICAgICAvLyBkYXRhLWd1bXJvYWQtcHJvZHVjdC1pZD17XCJcIiArIGlkICsgXCJcIn1cbiAgICAgICAgLy8gPjwvZGl2PlxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzJzogJ2d1bXJvYWQtcHJvZHVjdC1lbWJlZCcsICdkYXRhLWd1bXJvYWQtcHJvZHVjdC1pZCc6IFwiXCIgKyBpZCArIFwiXCIgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdvdmVybGF5Jykge1xuICAgICAgcmV0dXJuICgvLyByZXR1cm4gaWYgbGluayBiZWhhdmlvciBub3JtYWxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdhJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBocmVmOiB1cmxTdHJpbmcsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiIFwiICsgY2xhc3NlcyArIFwiIFwiICsgYnV0dG9uICsgXCIgXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQgJiYgISF0ZXh0Lmxlbmd0aCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwge1xuICAgICAgICAgICAgdmFsdWU6IHRleHRcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKC8vIHJldHVybiBpZiBsaW5rIGJlaGF2aW9yIG5vcm1hbFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2EnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhyZWY6ICcjJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCIgXCIgKyBjbGFzc2VzICsgXCIgXCIgKyBidXR0b24gKyBcIiBcIixcbiAgICAgICAgICAgIG9uQ2xpY2s6IFwid2luZG93Lm9wZW4oJ1wiICsgdXJsU3RyaW5nICsgXCInLCAnX2JsYW5rJylcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dCAmJiAhIXRleHQubGVuZ3RoICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG4gICAgICAgICAgICB2YWx1ZTogdGV4dFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ndW1yb2FkLWJsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./src/gumroad-block/style.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ndW1yb2FkLWJsb2NrL3N0eWxlLnNjc3M/MDRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2d1bXJvYWQtYmxvY2svc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************!*\
  !*** ./src/gumroad-block/editor.scss ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ndW1yb2FkLWJsb2NrL2VkaXRvci5zY3NzPzE5ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ndW1yb2FkLWJsb2NrL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);