window.source = {
  "title": "Button",
  "url": "button.html",
  "type": "js",
  "content": "import React, {PureComponent} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport Icon from '../icon/icon';\nimport './button.scss';\n\nconst DEFAULT_ICON_SIZE = Icon.Size.Size16;\n\n/**\n * @name Button\n * @category Components\n * @constructor\n * @description Provides styled buttons.\n * @extends {PureComponent}\n * @example-file ./button.examples.html\n */\nexport default class Button extends PureComponent {\n  static propTypes = {\n    active: PropTypes.bool,\n    blue: PropTypes.bool,\n    danger: PropTypes.bool,\n    delayed: PropTypes.bool,\n    loader: PropTypes.bool,\n    primary: PropTypes.bool,\n    short: PropTypes.bool,\n    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),\n    iconSize: PropTypes.number,\n\n    className: PropTypes.string,\n    children: PropTypes.node\n  };\n\n  render() {\n    const {\n      // Modifiers\n      active,\n      blue,\n      danger,\n      delayed,\n      loader,\n      primary,\n      short,\n\n      // Props\n      icon,\n      iconSize,\n      className,\n      children,\n      ...props\n    } = this.props;\n\n    const classes = classNames(\n      'ring-button',\n      className, {\n        'ring-button_default': !blue && !primary,\n        'ring-button_active': active,\n        'ring-button_blue': blue,\n        'ring-button_danger': danger,\n        'ring-button_delayed': delayed,\n        'ring-button_icon': icon,\n        'ring-button_loader': loader,\n        'ring-button_primary': primary,\n        'ring-button_short': short\n      }\n    );\n\n    return (\n      <button\n        type=\"button\"\n        {...props}\n        className={classes}\n        tabIndex={loader ? -1 : 0}\n      >\n        <span className=\"ring-button__content\">\n          {children}\n          {icon && (\n            <span className=\"ring-button__icon\">\n              <Icon\n                glyph={icon}\n                size={iconSize || DEFAULT_ICON_SIZE}\n              />\n            </span>\n          )}\n        </span>\n\n        <span className=\"ring-button__loader\"/>\n      </button>\n    );\n  }\n}\n",
  "examples": [
    {
      "name": "Button",
      "url": "examples/button/button.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "css",
          "content": "\nbutton {\n  margin-right: 8px !important;\n  margin-bottom: 8px !important;\n}\n  ",
          "showCode": true
        },
        {
          "type": "html",
          "content": "\n<div id=\"buttons\">\n  <span id=\"button\"></span><span id=\"button-icon\"></span><span\n  id=\"button-short\"></span>\n</div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport Button from '@jetbrains/ring-ui/components/button/button';\nimport {CaretDownIcon} from '@jetbrains/ring-ui/components/icon';\n\nrender(<Button>Button default</Button>, document.getElementById('button'));\n\nrender(\n  <Button icon={CaretDownIcon}>Button icon</Button>, document.getElementById('button-icon')\n);\n\nrender(\n  <Button short={true}>...</Button>, document.getElementById('button-short')\n);\n\nvar container = document.getElementById('buttons');\n['active', 'blue', 'danger', 'delayed', 'loader',\n  'primary'].forEach(modifier => {\n  var node = document.createElement('span');\n  container.appendChild(node);\n\n  render(<Button {...{[modifier]: true}}>{'Button ' + modifier}</Button>, node);\n});\n\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Provides styled buttons.",
  "attrs": {
    "name": "Button",
    "category": "Components",
    "constructor": "",
    "description": "Provides styled buttons.",
    "extends": "{PureComponent}",
    "example-file": "./button.examples.html"
  }
};