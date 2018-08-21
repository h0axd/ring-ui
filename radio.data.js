window.source = {
  "title": "Radio",
  "url": "radio.html",
  "type": "js",
  "content": "import React, {Children, Component} from 'react';\nimport PropTypes from 'prop-types';\n\nimport getUID from '../global/get-uid';\n\nimport RadioItem from './radio__item';\n\n/**\n * @name Radio\n * @category Components\n * @constructor\n * @description Displays a radio button. Adopted from [react-radio-group](https://github.com/chenglou/react-radio-group).\n * @example\n   <example name=\"Radio button\">\n     <file name=\"index.html\">\n       <div id=\"container\"></div>\n     </file>\n\n     <file name=\"index.js\" webpack=\"true\">\n       import {render} from 'react-dom';\n       import React from 'react';\n\n       import Radio from '@jetbrains/ring-ui/components/radio/radio';\n       import RadioItem from '@jetbrains/ring-ui/components/radio/radio__item';\n\n       const container = document.getElementById('container');\n       const radio = value => (\n         <div>\n           <span>Selected: {value}</span>\n           <Radio onChange={newValue => render(radio(newValue), container)}>\n             <RadioItem value=\"one\">One</RadioItem>\n             <RadioItem value=\"two\">Two</RadioItem>\n             <RadioItem value=\"three\">Three</RadioItem>\n           </Radio>\n         </div>\n       );\n\n       render(radio('one'), container);\n     </file>\n   </example>\n */\n\nexport default class Radio extends Component {\n  static propTypes = {\n    name: PropTypes.string,\n    value: PropTypes.oneOfType([\n      PropTypes.string,\n      PropTypes.number,\n      PropTypes.bool\n    ]),\n    onChange: PropTypes.func,\n    children: PropTypes.node.isRequired\n  };\n\n  static childContextTypes = {\n    ringRadioGroup: PropTypes.object\n  };\n\n  static Item = RadioItem;\n\n  constructor(...args) {\n    super(...args);\n\n    this.uid = getUID('ring-radio-');\n  }\n\n  getChildContext() {\n    const name = this.uid;\n    const {value, onChange} = this.props;\n\n    return {\n      ringRadioGroup: {name, value, onChange}\n    };\n  }\n\n  render() {\n    const {value, onChange, children, ...restProps} = this.props; // eslint-disable-line no-unused-vars\n    if (Children.count(children) === 1 && typeof children === 'object') {\n      return children;\n      // Autowrapping of text and array children\n    } else {\n      return <div {...restProps}>{children}</div>;\n    }\n  }\n}\n\n",
  "examples": [
    {
      "name": "Radio button",
      "url": "examples/radio/radio-button.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"container\"></div>\n     ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport {render} from 'react-dom';\nimport React from 'react';\n\nimport Radio from '@jetbrains/ring-ui/components/radio/radio';\nimport RadioItem from '@jetbrains/ring-ui/components/radio/radio__item';\n\nconst container = document.getElementById('container');\nconst radio = value => (\n  <div>\n    <span>Selected: {value}</span>\n    <Radio onChange={newValue => render(radio(newValue), container)}>\n      <RadioItem value=\"one\">One</RadioItem>\n      <RadioItem value=\"two\">Two</RadioItem>\n      <RadioItem value=\"three\">Three</RadioItem>\n    </Radio>\n  </div>\n);\n\nrender(radio('one'), container);\n     ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Displays a radio button. Adopted from [react-radio-group](https://github.com/chenglou/react-radio-group).",
  "attrs": {
    "name": "Radio",
    "category": "Components",
    "constructor": "",
    "description": "Displays a radio button. Adopted from [react-radio-group](https://github.com/chenglou/react-radio-group).",
    "example": "   <example name=\"Radio button\">\n     <file name=\"index.html\">\n       <div id=\"container\"></div>\n     </file>\n\n     <file name=\"index.js\" webpack=\"true\">\n       import {render} from 'react-dom';\n       import React from 'react';\n\n       import Radio from '@jetbrains/ring-ui/components/radio/radio';\n       import RadioItem from '@jetbrains/ring-ui/components/radio/radio__item';\n\n       const container = document.getElementById('container');\n       const radio = value => (\n         <div>\n           <span>Selected: {value}</span>\n           <Radio onChange={newValue => render(radio(newValue), container)}>\n             <RadioItem value=\"one\">One</RadioItem>\n             <RadioItem value=\"two\">Two</RadioItem>\n             <RadioItem value=\"three\">Three</RadioItem>\n           </Radio>\n         </div>\n       );\n\n       render(radio('one'), container);\n     </file>\n   </example>"
  }
};