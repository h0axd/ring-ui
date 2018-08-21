window.source = {
  "title": "Input",
  "url": "input.html",
  "type": "js",
  "content": "import React, {PureComponent} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport ieCompatibleInputHOC from './ie-compatible-hoc';\nimport './input.scss';\n\n/**\n * @name Input\n * @category Components\n * @constructor\n * @description Text input fields of varying size.\n * @extends {ReactComponent}\n * @example-file ./input.examples.html\n */\nclass Input extends PureComponent {\n  static propTypes = {\n    multiline: PropTypes.bool,\n    className: PropTypes.string,\n    inputRef: PropTypes.func,\n    active: PropTypes.bool,\n    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),\n    valid: PropTypes.bool,\n    material: PropTypes.bool,\n    shortcuts: PropTypes.bool\n  };\n\n  render() {\n    const {className, inputRef, active, error, material, valid, multiline, shortcuts, ...props} = this.props; // eslint-disable-line no-unused-vars, max-len\n    const classes = classNames('ring-input', className, {\n      'ring-input_active': active,\n      'ring-input_correct': valid,\n      'ring-input_error': error,\n      'ring-input_material': material\n    });\n\n    return multiline ? (\n      <textarea\n        ref={inputRef}\n        {...props}\n        className={classes}\n      />\n    ) : (\n      <input\n        ref={inputRef}\n        {...props}\n        className={classes}\n      />\n    );\n  }\n}\n\nexport default ieCompatibleInputHOC(Input);\n",
  "examples": [
    {
      "name": "Input",
      "url": "examples/input/input.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"input\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport Input from '@jetbrains/ring-ui/components/input/input';\n\nrender(\n  <Input/>,\n  document.getElementById('input')\n);\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Input sizes",
      "url": "examples/input/input-sizes.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div style=\"width: 600px\">\n  <div class=\"input-control-wrapper\">\n    <input type=\"number\" class=\"ring-input\">\n    <div class=\"ring-error-bubble active\">No modifiers (full-width)</div>\n  </div>\n  <div class=\"input-control-wrapper\">\n    <input type=\"number\" class=\"ring-input ring-input-size_xs\">\n    <div class=\"ring-error-bubble active\">Extra-short</div>\n  </div>\n  <div class=\"input-control-wrapper\">\n    <input type=\"number\" class=\"ring-input ring-input-size_s\">\n    <div class=\"ring-error-bubble active\">Short</div>\n  </div>\n  <div class=\"input-control-wrapper\">\n    <input type=\"number\" class=\"ring-input ring-input-size_md\">\n    <div class=\"ring-error-bubble active\">Medium</div>\n  </div>\n  <div class=\"input-control-wrapper\">\n    <input type=\"number\" class=\"ring-input ring-input-size_l\">\n    <div class=\"ring-error-bubble active\">Long</div>\n  </div>\n</div>\n  ",
          "showCode": true
        },
        {
          "type": "css",
          "content": "\n:global(.input-control-wrapper) {\n  position: relative;\n  margin: 16px;\n}\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport '@jetbrains/ring-ui/components/input/input.scss';\nimport '@jetbrains/ring-ui/components/input-size/input-size.scss';\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Textarea sizes",
      "url": "examples/input/textarea-sizes.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div style=\"width: 600px\">\n  <div class=\"input-control-wrapper\">\n    <textarea class=\"ring-input\"></textarea>\n    <div class=\"ring-error-bubble active\">No modifiers (full-width)</div>\n  </div>\n  <div class=\"input-control-wrapper\">\n    <textarea class=\"ring-input ring-input-size_xs\"></textarea>\n    <div class=\"ring-error-bubble active\">Extra-short</div>\n  </div>\n  <div class=\"input-control-wrapper\">\n    <textarea class=\"ring-input ring-input-size_s\"></textarea>\n    <div class=\"ring-error-bubble active\">Short</div>\n  </div>\n  <div class=\"input-control-wrapper\">\n    <textarea class=\"ring-input ring-input-size_md\"></textarea>\n    <div class=\"ring-error-bubble active\">Medium</div>\n  </div>\n  <div class=\"input-control-wrapper\">\n    <textarea class=\"ring-input ring-input-size_l\"></textarea>\n    <div class=\"ring-error-bubble active\">Long</div>\n  </div>\n</div>\n  ",
          "showCode": true
        },
        {
          "type": "css",
          "content": "\n:global(.input-control-wrapper) {\n  position: relative;\n  margin: 16px;\n}\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport '@jetbrains/ring-ui/components/input/input.scss';\nimport '@jetbrains/ring-ui/components/input-size/input-size.scss';\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Text input fields of varying size.",
  "attrs": {
    "name": "Input",
    "category": "Components",
    "constructor": "",
    "description": "Text input fields of varying size.",
    "extends": "{ReactComponent}",
    "example-file": "./input.examples.html"
  }
};