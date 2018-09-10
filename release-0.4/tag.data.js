window.source = {
  "title": "Tag",
  "url": "tag.html",
  "type": "js",
  "content": "import React, {PureComponent} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport Icon, {CloseIcon} from '../icon';\n\nimport './tag.scss';\n\n/**\n * @name Tag\n * @category Components\n * @description Displays a tag.\n * @example-file ./tag.examples.html\n */\n\nexport default class Tag extends PureComponent {\n  static propTypes = {\n    onRemove: PropTypes.func,\n    onClick: PropTypes.func,\n    rgTagIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),\n    icon: PropTypes.string,\n    avatar: PropTypes.string,\n    rgTagTitle: PropTypes.string,\n    readOnly: PropTypes.bool,\n    disabled: PropTypes.bool,\n    focused: PropTypes.bool,\n\n    children: PropTypes.node,\n    className: PropTypes.string\n  };\n\n  static defaultProps = {\n    onRemove: () => {},\n    onClick: () => {},\n    readOnly: false,\n    disabled: false,\n    focused: false\n  };\n\n  state = {\n    focused: false\n  };\n\n  componentWillReceiveProps(props) {\n    this.updateStateFromProps(props);\n  }\n\n  componentDidUpdate() {\n    if (this.state.focused) {\n      this.tagNode.focus();\n    }\n  }\n\n  componentWillUnmount() {\n    this.setDocumentClickListener(false);\n    this.setState({focused: false});\n  }\n\n  onDocumentClick = event => {\n    if (this.tagNode) {\n      this.setState({focused: this.tagNode === event.target});\n    }\n  };\n\n  setDocumentClickListener(setListener) {\n    if (setListener) {\n      document.addEventListener('click', this.onDocumentClick);\n    } else {\n      document.removeEventListener('click', this.onDocumentClick);\n    }\n  }\n\n  updateStateFromProps(props) {\n    this.setState({focused: props.focused});\n    this.setDocumentClickListener(props.focused);\n  }\n\n  tagRef = el => {\n    this.tagNode = el;\n  };\n\n  renderCustomIcon() {\n    if (this.props.rgTagIcon) {\n      return (\n        <Icon\n          className=\"ring-tag__ring-icon\"\n          title={this.props.rgTagTitle}\n          glyph={this.props.rgTagIcon}\n          size={Icon.Size.Size12}\n        />\n      );\n    }\n    return null;\n  }\n\n  _renderImageElement(avatarSrc) {\n    const classes = classNames([\n      {\n        'ring-tag__custom-icon': this.props.icon\n      },\n      {\n        'ring-tag__avatar-icon': avatarSrc\n      }\n    ]);\n    return (\n      <img\n        className={classes}\n        src={avatarSrc || this.props.icon}\n      />\n    );\n  }\n\n  renderImage() {\n    if (this.props.icon && !this.props.avatar) {\n      return this._renderImageElement();\n    }\n    return null;\n  }\n\n  renderAvatar() {\n    if (this.props.avatar) {\n      return (\n        <span\n          className=\"ring-tag__avatar-container\"\n        >\n          {this._renderImageElement(this.props.avatar)}\n        </span>\n      );\n    }\n    return null;\n  }\n\n  renderRemoveIcon() {\n    if (!this.props.readOnly) {\n      return (\n        <CloseIcon\n          data-test=\"ring-tag-remove\"\n          className=\"ring-tag__remove ring-link\"\n          onClick={this.props.onRemove}\n          size={CloseIcon.Size.Size14}\n        />\n      );\n    }\n    return null;\n  }\n\n  render() {\n    const classes = classNames(\n      'ring-js-shortcuts',\n      'ring-tag',\n      {\n        'ring-tag_focused': this.state.focused,\n        'ring-tag_disabled': this.props.disabled\n      },\n      this.props.className\n    );\n\n    return (\n      <span\n        data-test=\"ring-tag\"\n        tabIndex=\"0\"\n        className={classes}\n        ref={this.tagRef}\n        onClick={this.props.onClick}\n      >\n        {this.renderAvatar()}\n        {this.renderCustomIcon()}\n        {this.renderImage()}\n        <span>{this.props.children}</span>\n        {this.renderRemoveIcon()}\n      </span>);\n  }\n}\n",
  "examples": [
    {
      "name": "Tag",
      "url": "examples/tag/tag.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"tags\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport {render} from 'react-dom';\nimport React from 'react';\nimport {CheckmarkIcon} from '@jetbrains/ring-ui/components/icon';\n\nimport Tag from '@jetbrains/ring-ui/components/tag/tag';\nimport hubConfig from '@ring-ui/docs/components/hub-config';\n\nconst url = `${hubConfig.serverUri}/api/rest/avatar/default?username=Jet%20Brains`\nconst renderBadgeDemo = () => (\n  <span>\n    <Tag>Simple</Tag>\n    <Tag readOnly>Read-only</Tag>\n    <Tag rgTagIcon={CheckmarkIcon} rgTagTitle=\"I am an icon title\">With icon title</Tag>\n    <Tag avatar={url} rgTagTitle=\"Tags with image\" readOnly>With avatar</Tag>\n  </span>\n);\n\nrender(renderBadgeDemo(), document.getElementById('tags'));\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Displays a tag.",
  "attrs": {
    "name": "Tag",
    "category": "Components",
    "description": "Displays a tag.",
    "example-file": "./tag.examples.html"
  }
};