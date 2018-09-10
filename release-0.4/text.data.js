window.source = {
  "title": "Text",
  "url": "text.html",
  "type": "js",
  "content": "import React, {Component} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport styles from './text.css';\n\n/**\n * @name Text\n * @category Components\n * @framework React\n * @constructor\n * @description A component for rendering text content.\n * @example\n   <example name=\"Text\">\n     <file name=\"index.html\">\n       <div id=\"text\"></div>\n     </file>\n\n     <file name=\"index.js\">\n       import React, {Component} from 'react';\n       import {render} from 'react-dom';\n       import Text from '@jetbrains/ring-ui/components/text/text';\n       import Group from '@jetbrains/ring-ui/components/group/group';\n\n       class TextDemo extends Component {\n         render() {\n           return (\n             <div>\n               <Group>\n                 <Text>Text</Text>\n                 <Text comment>with a comment</Text>\n                 <Text info>and an info message</Text>\n               </Group>\n             </div>\n           );\n         }\n       }\n\n       render(<TextDemo />, document.getElementById('text'));\n     </file>\n   </example>\n */\n\nexport default class Text extends Component {\n  static propTypes = {\n    children: PropTypes.node,\n    comment: PropTypes.bool,\n    info: PropTypes.bool,\n    className: PropTypes.string\n  };\n\n  render() {\n    const {children, className, comment, info, ...restProps} = this.props;\n    const classes = classNames(styles.text, className, {\n      [styles.comment]: comment,\n      [styles.info]: info\n    });\n\n    return (\n      <span className={classes} {...restProps}>{children}</span>\n    );\n  }\n}\n",
  "examples": [
    {
      "name": "Text",
      "url": "examples/text/text.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"text\"></div>\n     ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React, {Component} from 'react';\nimport {render} from 'react-dom';\nimport Text from '@jetbrains/ring-ui/components/text/text';\nimport Group from '@jetbrains/ring-ui/components/group/group';\n\nclass TextDemo extends Component {\n  render() {\n    return (\n      <div>\n        <Group>\n          <Text>Text</Text>\n          <Text comment>with a comment</Text>\n          <Text info>and an info message</Text>\n        </Group>\n      </div>\n    );\n  }\n}\n\nrender(<TextDemo />, document.getElementById('text'));\n     ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "A component for rendering text content.",
  "attrs": {
    "name": "Text",
    "category": "Components",
    "framework": "React",
    "constructor": "",
    "description": "A component for rendering text content.",
    "example": "   <example name=\"Text\">\n     <file name=\"index.html\">\n       <div id=\"text\"></div>\n     </file>\n\n     <file name=\"index.js\">\n       import React, {Component} from 'react';\n       import {render} from 'react-dom';\n       import Text from '@jetbrains/ring-ui/components/text/text';\n       import Group from '@jetbrains/ring-ui/components/group/group';\n\n       class TextDemo extends Component {\n         render() {\n           return (\n             <div>\n               <Group>\n                 <Text>Text</Text>\n                 <Text comment>with a comment</Text>\n                 <Text info>and an info message</Text>\n               </Group>\n             </div>\n           );\n         }\n       }\n\n       render(<TextDemo />, document.getElementById('text'));\n     </file>\n   </example>"
  }
};