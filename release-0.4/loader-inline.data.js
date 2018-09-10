window.source = {
  "title": "Loader Inline",
  "url": "loader-inline.html",
  "type": "js",
  "content": "import React, {PureComponent} from 'react';\nimport classNames from 'classnames';\nimport PropTypes from 'prop-types';\n\nimport './loader-inline.scss';\n\n/**\n * @name Loader Inline\n * @category Components\n * @constructor\n * @description Displays a small animated loader, shown inline with text. Use case: contextual loading animation.\n * @extends {ReactComponent}\n * @example\n   <example name=\"Inline loader\">\n     <file name=\"index.html\">\n        <span>some text on top</span>\n        <div>before <span id=\"loader-inline\"></span> some text after</div>\n        <div>some text under loader</div>\n     </file>\n\n     <file name=\"index.js\" webpack=\"true\">\n       import React from 'react';\n       import {render} from 'react-dom';\n       import Loader from '@jetbrains/ring-ui/components/loader-inline/loader-inline';\n\n       render(<Loader/>, document.getElementById('loader-inline'));\n     </file>\n   </example>\n    <example name=\"Inline loader without React\">\n     <file name=\"index.html\">\n       <div class=\"ring-loader-inline\">\n         <div class=\"ring-loader-inline__ball\"></div>\n         <div class=\"ring-loader-inline__ball ring-loader-inline__ball_second\"></div>\n         <div class=\"ring-loader-inline__ball ring-loader-inline__ball_third\"></div>\n       </div>\n     </file>\n      <file name=\"index.js\" webpack=\"true\">\n        import '@jetbrains/ring-ui/components/loader-inline/loader-inline';\n      </file>\n   </example>\n */\n\nexport default class LoaderInline extends PureComponent {\n  static propTypes = {\n    className: PropTypes.string\n  };\n\n  render() {\n    const classes = classNames(\n      'ring-loader-inline',\n      this.props.className\n    );\n\n    return (\n      <div\n        {...this.props}\n        className={classes}\n      >\n        <div className=\"ring-loader-inline__ball\"/>\n        <div className=\"ring-loader-inline__ball ring-loader-inline__ball_second\"/>\n        <div className=\"ring-loader-inline__ball ring-loader-inline__ball_third\"/>\n      </div>\n    );\n  }\n}\n",
  "examples": [
    {
      "name": "Inline loader",
      "url": "examples/loader-inline/inline-loader.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<span>some text on top</span>\n<div>before <span id=\"loader-inline\"></span> some text after</div>\n<div>some text under loader</div>\n     ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport Loader from '@jetbrains/ring-ui/components/loader-inline/loader-inline';\n\nrender(<Loader/>, document.getElementById('loader-inline'));\n     ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Inline loader without React",
      "url": "examples/loader-inline/inline-loader-without-react.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div class=\"ring-loader-inline\">\n  <div class=\"ring-loader-inline__ball\"></div>\n  <div class=\"ring-loader-inline__ball ring-loader-inline__ball_second\"></div>\n  <div class=\"ring-loader-inline__ball ring-loader-inline__ball_third\"></div>\n</div>\n     ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport '@jetbrains/ring-ui/components/loader-inline/loader-inline';\n      ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Displays a small animated loader, shown inline with text. Use case: contextual loading animation.",
  "attrs": {
    "name": "Loader Inline",
    "category": "Components",
    "constructor": "",
    "description": "Displays a small animated loader, shown inline with text. Use case: contextual loading animation.",
    "extends": "{ReactComponent}",
    "example": "   <example name=\"Inline loader\">\n     <file name=\"index.html\">\n        <span>some text on top</span>\n        <div>before <span id=\"loader-inline\"></span> some text after</div>\n        <div>some text under loader</div>\n     </file>\n\n     <file name=\"index.js\" webpack=\"true\">\n       import React from 'react';\n       import {render} from 'react-dom';\n       import Loader from '@jetbrains/ring-ui/components/loader-inline/loader-inline';\n\n       render(<Loader/>, document.getElementById('loader-inline'));\n     </file>\n   </example>\n    <example name=\"Inline loader without React\">\n     <file name=\"index.html\">\n       <div class=\"ring-loader-inline\">\n         <div class=\"ring-loader-inline__ball\"></div>\n         <div class=\"ring-loader-inline__ball ring-loader-inline__ball_second\"></div>\n         <div class=\"ring-loader-inline__ball ring-loader-inline__ball_third\"></div>\n       </div>\n     </file>\n      <file name=\"index.js\" webpack=\"true\">\n        import '@jetbrains/ring-ui/components/loader-inline/loader-inline';\n      </file>\n   </example>"
  }
};