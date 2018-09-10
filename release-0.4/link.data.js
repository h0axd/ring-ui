window.source = {
  "title": "Link",
  "url": "link.html",
  "type": "js",
  "content": "import React, {Component} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport styles from './link.css';\n\n/**\n * @name Link\n * @category Components\n * @constructor\n * @description Displays a link.\n * @extends {ReactComponent}\n * @example-file ./link.examples.html\n */\n\nexport function linkHOC(ComposedComponent) {\n  const isTag = typeof ComposedComponent === 'string';\n\n  return class Link extends Component {\n    static propTypes = {\n      className: PropTypes.string,\n      active: PropTypes.bool,\n      inherit: PropTypes.bool,\n      pseudo: PropTypes.bool,\n      hover: PropTypes.bool\n    };\n\n    render() {\n      const {active, inherit, pseudo, hover, className, ...props} = this.props;\n      const classes = classNames(styles.link, className, {\n        [styles.active]: active,\n        [styles.inherit]: inherit,\n        [styles.pseudo]: pseudo,\n        [styles.hover]: hover\n      });\n\n      if (!isTag && !props.activeClassName) {\n        props.activeClassName = styles.active;\n      }\n\n      return (\n        <ComposedComponent\n          {...props}\n          className={classes}\n        />\n      );\n    }\n  };\n}\n\nexport default linkHOC('a');\n",
  "examples": [
    {
      "name": "Link",
      "url": "examples/link/link.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"link\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React, {Component} from 'react';\nimport {render} from 'react-dom';\nimport classNames from 'classnames';\nimport Link, {linkHOC} from '@jetbrains/ring-ui/components/link/link';\n\nclass CustomComponent extends Component {\n  render() {\n    const {active, activeClassName, className,...props} = this.props;\n    const classes = classNames(className, {\n      [activeClassName]: active\n    });\n    return (\n      <a\n        {...props}\n        className={className}\n      />\n    );\n  }\n}\n\nconst CustomLink = linkHOC(CustomComponent);\nclass LinkDemo extends Component {\n  render() {\n    return (\n     <div style={{display: 'flex', flexDirection: 'column'}}>\n       <Link href=\"#hash\">Ordinary link</Link>\n       <Link href=\"#hash\" active>Active link (inherits color)</Link>\n       <Link href=\"#hash\" pseudo>Pseudo link (no underline on hover)</Link>\n       <CustomLink href=\"#hash\">Custom link component</CustomLink>\n       <CustomLink href=\"#hash\" active>Active custom link component</CustomLink>\n     </div>\n    );\n  }\n}\nrender(<LinkDemo />, document.getElementById('link'));\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Displays a link.",
  "attrs": {
    "name": "Link",
    "category": "Components",
    "constructor": "",
    "description": "Displays a link.",
    "extends": "{ReactComponent}",
    "example-file": "./link.examples.html"
  }
};