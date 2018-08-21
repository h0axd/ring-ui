window.source = {
  "title": "Island Legacy",
  "url": "island-legacy.html",
  "type": "js",
  "content": "import React, {PureComponent} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport './island-legacy.scss';\n\n/**\n * @name Island Legacy\n * @category Components\n * @description Displays an island.\n * @example-file ./island-legacy.examples.html\n */\n\nexport default class Island extends PureComponent {\n  static propTypes = {\n    className: PropTypes.string,\n    children: PropTypes.node\n  };\n\n  render() {\n    const {children, className, ...restProps} = this.props;\n    const classes = classNames('ring-island', className);\n\n    return (\n      <div\n        {...restProps}\n        className={classes}\n      >\n        {children}\n      </div>\n    );\n  }\n}\n\nexport {default as Header} from './header-legacy';\nexport {default as Content} from './content-legacy';\n",
  "examples": [
    {
      "name": "Island in React",
      "url": "examples/island-legacy/island-in-react.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"island\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport {render} from 'react-dom';\nimport React from 'react';\nimport Island, {Header, Content} from '@jetbrains/ring-ui/components/island/island';\n\nconst renderIslandDemo = () => (\n  <Island>\n    <Header>Title</Header>\n    <Content>Content</Content>\n  </Island>\n);\n\nrender(renderIslandDemo(), document.getElementById('island'));\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Island in HTML/CSS",
      "url": "examples/island-legacy/island-in-html-css.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div>\n  <div class=\"ring-island\">\n    <div class=\"ring-island__content\">Content</div>\n  </div>\n</div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport '@jetbrains/ring-ui/components/island-legacy/island-legacy.scss';\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Island with a header",
      "url": "examples/island-legacy/island-with-a-header.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div>\n  <div class=\"ring-island\">\n    <div class=\"ring-island__header\">\n      <span class=\"ring-island__title\">Title</span>\n    </div>\n    <div class=\"ring-island__content\">Content</div>\n  </div>\n</div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport '@jetbrains/ring-ui/components/island-legacy/island-legacy.scss';\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Island with a header and buttons",
      "url": "examples/island-legacy/island-with-a-header-and-buttons.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div>\n  <div class=\"ring-island\">\n    <div class=\"ring-island__header\">\n      <span class=\"ring-island__title\">Title</span>\n      <span class=\"ring-island__header-button\">Button1</span>\n      <span class=\"ring-island__header-button\">Button2</span>\n    </div>\n    <div class=\"ring-island__content\">Content</div>\n  </div>\n</div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport '@jetbrains/ring-ui/components/island-legacy/island-legacy.scss';\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Displays an island.",
  "attrs": {
    "name": "Island Legacy",
    "category": "Components",
    "description": "Displays an island.",
    "example-file": "./island-legacy.examples.html"
  }
};