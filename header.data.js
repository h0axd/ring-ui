window.source = {
  "title": "Header",
  "url": "header.html",
  "type": "js",
  "content": "import React, {Children, Component} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport rerenderHOC from '../global/rerender-hoc';\n\nimport Tray from './tray';\nimport styles from './header.css';\n\n/**\n * @name Header\n * @category Components\n * @framework React\n * @constructor\n * @description Displays a configurable page header.\n * @example-file ./header.examples.html\n */\n\nconst wrapChild = child => (\n  <div className={styles.item}>\n    {child}\n  </div>\n);\n\nexport default class Header extends Component {\n  static propTypes = {\n    className: PropTypes.string,\n    children: PropTypes.node\n  };\n\n  render() {\n    const {children, className, ...restProps} = this.props;\n    const classes = classNames(styles.header, className);\n\n    return (\n      <div\n        {...restProps}\n        className={classes}\n      >\n        {Children.map(children, child => (\n          child && child.type === Tray ? child : wrapChild(child)\n        ))}\n      </div>\n    );\n  }\n}\n\nexport const RerenderableHeader = rerenderHOC(Header);\nexport {Tray};\nexport {default as TrayIcon} from './tray-icon';\nexport {default as Profile} from './profile';\nexport {default as SmartProfile} from './smart-profile';\nexport {default as Services} from './services';\nexport {default as SmartServices} from './smart-services';\n",
  "examples": [
    {
      "name": "Header",
      "url": "examples/header/header.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"header\"></div>\n<div class=\"page-content\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "css",
          "content": "\n/* override common styles */\n:root body {\n  margin: 0;\n  background: #e8e8e9;\n}\n\n:global(.page-content) {\n  background: #FFF;\n  padding: 32px;\n  height: 370px;\n}\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport {render} from 'react-dom';\nimport React from 'react';\n\nimport hubLogo from '@jetbrains/logos/hub/hub.svg';\nimport Icon, {DragIcon} from '@jetbrains/ring-ui/components/icon';\n\nimport Auth from '@jetbrains/ring-ui/components/auth/auth';\nimport showAuthDialog from '@jetbrains/ring-ui/components/auth-dialog-service/auth-dialog-service';\nimport Header, {Tray, TrayIcon, SmartProfile, SmartServices} from '@jetbrains/ring-ui/components/header/header';\nimport Link from '@jetbrains/ring-ui/components/link/link';\nimport Input from '@jetbrains/ring-ui/components/input/input';\nimport Button from '@jetbrains/ring-ui/components/button/button';\nimport Dropdown from '@jetbrains/ring-ui/components/dropdown/dropdown';\nimport PopupMenu from '@jetbrains/ring-ui/components/popup-menu/popup-menu';\n\nimport hubConfig from '@ring-ui/docs/components/hub-config';\n\nconst container = document.getElementById('header');\nconst auth = new Auth(hubConfig);\nauth.setAuthDialogService(showAuthDialog);\nauth.init();\n\nconst renderHeaderDemo = () => (\n  <Header>\n    <Link href=\"/\">\n      <Icon glyph={hubLogo} size={Icon.Size.Size48} />\n    </Link>\n    <Link active href=\"#\">Users</Link>\n    <Link href=\"#\">Groups</Link>\n    <Link href=\"#\">Spaces</Link>\n    <Link href=\"#\">Services</Link>\n    <Button>Create issue</Button>\n    <Tray>\n      <Input placeholder=\"search\" />\n      <Dropdown\n        anchor={({active}) => (\n          <TrayIcon\n            active={active}\n            glyph={DragIcon}\n          />\n        )}\n      >\n        <PopupMenu\n          closeOnSelect\n          data={[\n            {label: 'Test'},\n            {label: 'Test2'}\n          ]}\n        />\n      </Dropdown>\n      <SmartServices auth={auth} />\n      <SmartProfile\n        auth={auth}\n        hasUpdates\n      />\n    </Tray>\n  </Header>\n);\n\nrender(renderHeaderDemo(), container);\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Displays a configurable page header.",
  "attrs": {
    "name": "Header",
    "category": "Components",
    "framework": "React",
    "constructor": "",
    "description": "Displays a configurable page header.",
    "example-file": "./header.examples.html"
  }
};