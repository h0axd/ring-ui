window.source = {
  "title": "Checkbox",
  "url": "checkbox.html",
  "type": "js",
  "content": "import React, {PureComponent} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport {CheckIcon} from '../icon';\n\nimport './checkbox.scss';\n\n/**\n * @name Checkbox\n * @category Components\n * @constructor\n * @extends {ReactComponent}\n * @example-file ./checkbox.examples.html\n */\nexport default class Checkbox extends PureComponent {\n\n  static propTypes = {\n    name: PropTypes.string,\n    label: PropTypes.string,\n    className: PropTypes.string,\n    checked: PropTypes.bool,\n    disabled: PropTypes.bool,\n    onChange: PropTypes.func\n  };\n\n  state = {\n    checked: this.props.checked,\n    disabled: this.props.disabled\n  };\n\n  componentWillReceiveProps({checked, disabled}) {\n    if (checked !== undefined) {\n      this.setState({checked});\n    }\n\n    if (disabled !== undefined) {\n      this.setState({disabled});\n    }\n  }\n\n  inputChange = e => {\n    const newValue = e.target.checked;\n\n    this.setState({\n      checked: newValue\n    }, () => {\n      if (this.props.onChange) {\n        this.props.onChange(newValue);\n      }\n    });\n  };\n\n  inputRef = el => {\n    this.input = el;\n  };\n\n  render() {\n    const {label, ...restProps} = this.props;\n    const {checked, disabled} = this.state;\n\n    const classes = classNames(\n      'ring-checkbox__input',\n      this.props.className\n    );\n\n    return (\n      <label\n        className=\"ring-checkbox\"\n        data-test=\"ring-checkbox\"\n      >\n        <span className=\"ring-checkbox__input-wrapper\">\n          <input\n            {...restProps}\n            ref={this.inputRef}\n            disabled={disabled}\n            onChange={this.inputChange}\n            type=\"checkbox\"\n            className={classes}\n            checked={Boolean(checked)}\n          />\n          <span className=\"ring-checkbox__icon\">\n            {checked &&\n            (\n              <CheckIcon\n                className=\"ring-checkbox__icon__image\"\n                color=\"black\"\n                size={CheckIcon.Size.Size18}\n              />\n            )}\n          </span>\n        </span>\n        <span className=\"ring-checkbox__label\">{label}</span>\n      </label>\n    );\n  }\n}\n",
  "examples": [
    {
      "name": "Checkbox",
      "url": "examples/checkbox/checkbox.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<h1>Base Examples</h1>\n<div id=\"checkbox-base\">\n  <span id=\"checkbox\"></span>\n  <span id=\"checkbox-selected\"></span>\n  <span id=\"checkbox-disabled\"></span>\n</div>\n\n<h1>Examples with outer styles</h1>\n<div id=\"checkbox-additional\">\n  <div style=\"line-height: 60px\">\n    <span id=\"checkbox-in-large-line-height-div\"></span>\n    <span>This text should be aligned on same line with checkbox label</span>\n  </div>\n  <div style=\"line-height: 6px;\">\n    <span id=\"checkbox-in-small-line-height-div\"></span>\n    <span>This text should be aligned on same line with checkbox label</span>\n  </div>\n  <div style=\"line-height: 48px; font-size: 40px\">\n    <span id=\"checkbox-in-large-font-div\"></span>\n    <span>This text should be aligned on same line with checkbox label</span>\n  </div>\n  <div style=\"line-height: 6px; font-size: 4px\">\n    <span id=\"checkbox-in-small-font-div\"></span>\n    <span>This text should be aligned on same line with checkbox label</span>\n  </div>\n</div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport Checkbox from '@jetbrains/ring-ui/components/checkbox/checkbox';\n\nrender(<Checkbox/>, document.getElementById('checkbox'));\n\nrender(<Checkbox checked/>, document.getElementById('checkbox-selected'));\n\nrender(<Checkbox checked disabled label=\"This checkbox is disabled\"/>, document.getElementById('checkbox-disabled'));\n\nrender(<Checkbox checked label=\"This checkbox is inside a div with large line-height.\"/>, document.getElementById('checkbox-in-large-line-height-div'));\n\nrender(<Checkbox checked\n  label=\"This checkbox is inside a div with small line-height.\"\n/>, document.getElementById('checkbox-in-small-line-height-div'));\n\nrender(<Checkbox checked\n  label=\"This checkbox is inside a div with large font-size.\"\n/>, document.getElementById('checkbox-in-large-font-div'));\n\nrender(<Checkbox checked\n  label=\"This checkbox is inside a div with small font-size.\"\n/>, document.getElementById('checkbox-in-small-font-div'));\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "attrs": {
    "name": "Checkbox",
    "category": "Components",
    "constructor": "",
    "extends": "{ReactComponent}",
    "example-file": "./checkbox.examples.html"
  }
};