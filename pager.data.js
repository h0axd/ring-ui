window.source = {
  "title": "Pager",
  "url": "pager.html",
  "type": "js",
  "content": "/**\n * @name Pager\n * @category Components\n * @framework React\n * @extends {ReactComponent}\n * @description The pager.\n * @example-file ./pager.examples.html\n */\n\n/* eslint-disable react/jsx-no-literals */\n/* eslint-disable no-magic-numbers */\n\nimport React, {PureComponent} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport Button from '../button/button';\nimport ButtonGroup from '../button-group/button-group';\nimport ButtonToolbar from '../button-toolbar/button-toolbar';\nimport Select from '../select/select';\nimport memoize from '../global/memoize';\n\nimport '../link/link.scss';\nimport style from './pager.css';\n\nexport default class Pager extends PureComponent {\n  static propTypes = {\n    total: PropTypes.number.isRequired,\n    currentPage: PropTypes.number,\n    pageSize: PropTypes.number,\n    pageSizes: PropTypes.arrayOf(PropTypes.number),\n    visiblePagesLimit: PropTypes.number,\n    disablePageSizeSelector: PropTypes.bool,\n    onPageChange: PropTypes.func.isRequired,\n    onPageSizeChange: PropTypes.func,\n    className: PropTypes.string,\n    translations: PropTypes.object\n  };\n\n  static defaultProps = {\n    currentPage: 1,\n    pageSize: 50,\n    pageSizes: [20, 50, 100],\n    visiblePagesLimit: 7,\n    disablePageSizeSelector: false,\n    translations: {\n      perPage: 'per page',\n      firstPage: 'First page',\n      lastPage: 'Last page',\n      nextPage: 'next page',\n      previousPage: 'previous'\n    },\n    onPageSizeChange: () => {}\n  };\n\n  getSelectOptions() {\n    const {pageSize, pageSizes} = this.props;\n    const data = pageSizes.map(size => ({key: size, label: `${size} ${this.props.translations.perPage}`}));\n    const selected = data.find(it => it.key === pageSize);\n    return {selected, data};\n  }\n\n  getTotal() {\n    const {total, pageSize} = this.props;\n    return Math.ceil(total / pageSize);\n  }\n\n  handlePageSizeChange = item => {\n    this.props.onPageSizeChange(item.key);\n  };\n\n  handlePrevClick = () => {\n    const {currentPage, onPageChange} = this.props;\n    if (currentPage !== 1) {\n      onPageChange(currentPage - 1);\n    }\n  };\n\n  handleNextClick = () => {\n    const {currentPage, onPageChange} = this.props;\n    if (currentPage !== this.getTotal()) {\n      onPageChange(currentPage + 1);\n    }\n  };\n\n  handlePageChange = memoize(i => () => this.props.onPageChange(i));\n\n  render() {\n    const {currentPage, visiblePagesLimit, className} = this.props;\n    const totalPages = this.getTotal();\n\n    let start;\n    let end;\n\n    if (totalPages < visiblePagesLimit + 6) {\n      start = 1;\n      end = totalPages;\n    } else {\n      const leftHalfFrameSize = Math.ceil(visiblePagesLimit / 2) - 1;\n      const rightHalfFrameSize = visiblePagesLimit - leftHalfFrameSize - 1;\n\n      start = currentPage - leftHalfFrameSize;\n      end = currentPage + rightHalfFrameSize;\n\n      if (start < 1) {\n        const tail = 1 - start;\n        start += tail;\n        end += tail;\n      }\n\n      if (end > totalPages) {\n        const tail = end - totalPages;\n        start -= tail;\n        end -= tail;\n      }\n\n      if (start < 1) {\n        start += 1 - start;\n      }\n    }\n\n    const selectOptions = this.getSelectOptions();\n\n    const classes = classNames(style.pager, className);\n\n    const prevLinkClasses = classNames({\n      'ring-link': currentPage !== 1,\n      [style.link]: true,\n      [style.linkDisabled]: currentPage === 1\n    });\n\n    const nextLinkClasses = classNames({\n      'ring-link': currentPage !== totalPages,\n      [style.link]: true,\n      [style.linkDisabled]: currentPage === totalPages\n    });\n\n    const getPageSizeSelector = () => {\n      if (this.props.disablePageSizeSelector) {\n        return null;\n      } else {\n        return (\n          <div\n            data-test=\"ring-pager-page-size-selector\"\n            style={{float: 'right'}}\n          >\n            <Select\n              data={selectOptions.data}\n              selected={selectOptions.selected}\n              onSelect={this.handlePageSizeChange}\n            />\n          </div>\n        );\n      }\n    };\n\n    const getPager = () => {\n      if (totalPages < 2) {\n        return null;\n      }\n\n      const buttons = [];\n      for (let i = start; i <= end; i++) {\n        const button = (\n          <Button\n            key={i}\n            active={i === currentPage}\n            onClick={this.handlePageChange(i)}\n          >{i}</Button>\n        );\n\n        buttons.push(button);\n      }\n\n      return (\n        <div>\n          <div className={style.links}>\n            <span\n              className={prevLinkClasses}\n              onClick={this.handlePrevClick}\n            >← {this.props.translations.previousPage}</span>\n\n            <span\n              className={nextLinkClasses}\n              onClick={this.handleNextClick}\n            >{this.props.translations.nextPage} →</span>\n          </div>\n\n          <ButtonToolbar>\n            {start > 1 &&\n              (\n                <ButtonGroup>\n                  <Button onClick={this.handlePageChange(1)}>\n                    {this.props.translations.firstPage}\n                  </Button>\n                </ButtonGroup>\n              )\n            }\n\n            <ButtonGroup>\n              {start > 1 ? <Button onClick={this.handlePageChange(start - 1)}>...</Button> : ''}\n\n              {buttons}\n\n              {end < totalPages\n                ? <Button onClick={this.handlePageChange(end + 1)}>...</Button>\n                : ''}\n            </ButtonGroup>\n\n            {end < totalPages &&\n              (\n                <ButtonGroup>\n                  <Button onClick={this.handlePageChange(totalPages)}>\n                    {this.props.translations.lastPage}\n                  </Button>\n                </ButtonGroup>\n              )\n            }\n          </ButtonToolbar>\n\n          {getPageSizeSelector()}\n        </div>\n      );\n    };\n\n    return (\n      <div data-test=\"ring-pager\" className={classes}>\n        {totalPages > 1\n          ? getPager()\n          : getPageSizeSelector()\n        }\n      </div>\n    );\n  }\n}\n",
  "examples": [
    {
      "name": "Pager",
      "url": "examples/pager/pager.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"pager\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React, {Component, createElement} from 'react';\nimport {render} from 'react-dom';\nimport Pager from '@jetbrains/ring-ui/components/pager/pager';\n\nclass Example extends Component {\n  state = {\n    total: 750,\n    currentPage: 1\n  }\n\n  render() {\n    const {total, currentPage} = this.state;\n    return (\n      <Pager\n        total={total}\n        currentPage={currentPage}\n        disablePageSizeSelector\n        onPageChange={currentPage => this.setState({currentPage})}\n      />\n    );\n  }\n}\n\nrender(createElement(Example, {}), document.getElementById('pager'));\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Pager with a custom frame size",
      "url": "examples/pager/pager-with-a-custom-frame-size.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"pager\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React, {Component, createElement} from 'react';\nimport {render} from 'react-dom';\nimport Pager from '@jetbrains/ring-ui/components/pager/pager';\n\nclass Example extends Component {\n  state = {\n    total: 750,\n    currentPage: 1\n  }\n\n  render() {\n    const {total, currentPage} = this.state;\n    return (\n      <Pager\n        total={total}\n        currentPage={currentPage}\n        visiblePagesLimit={3}\n        disablePageSizeSelector\n        onPageChange={currentPage => this.setState({currentPage})}\n      />\n    );\n  }\n}\n\nrender(createElement(Example, {}), document.getElementById('pager'));\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Pager with a custom frame size #2",
      "url": "examples/pager/pager-with-a-custom-frame-size-2.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"pager\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React, {Component, createElement} from 'react';\nimport {render} from 'react-dom';\nimport Pager from '@jetbrains/ring-ui/components/pager/pager';\n\nclass Example extends Component {\n  state = {\n    total: 250,\n    currentPage: 1\n  }\n\n  render() {\n    const {total, currentPage} = this.state;\n    return (\n      <Pager\n        total={total}\n        currentPage={currentPage}\n        visiblePagesLimit={5}\n        disablePageSizeSelector\n        onPageChange={currentPage => this.setState({currentPage})}\n      />\n    );\n  }\n}\n\nrender(createElement(Example, {}), document.getElementById('pager'));\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Pager with a custom frame size #3",
      "url": "examples/pager/pager-with-a-custom-frame-size-3.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"pager\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React, {Component, createElement} from 'react';\nimport {render} from 'react-dom';\nimport Pager from '@jetbrains/ring-ui/components/pager/pager';\n\nclass Example extends Component {\n  state = {\n    total: 400,\n    currentPage: 1\n  }\n\n  render() {\n    const {total, currentPage} = this.state;\n    return (\n      <Pager\n        total={total}\n        currentPage={currentPage}\n        visiblePagesLimit={5}\n        disablePageSizeSelector\n        onPageChange={currentPage => this.setState({currentPage})}\n      />\n    );\n  }\n}\n\nrender(createElement(Example, {}), document.getElementById('pager'));\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Pager with a page size selector",
      "url": "examples/pager/pager-with-a-page-size-selector.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"pager\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React, {Component, createElement} from 'react';\nimport {render} from 'react-dom';\nimport Pager from '@jetbrains/ring-ui/components/pager/pager';\n\nclass Example extends Component {\n  state = {\n    total: 300,\n    currentPage: 1,\n    pageSize: 50\n  }\n\n  render() {\n    const {total, currentPage, pageSize} = this.state;\n    return (\n      <Pager\n        total={total}\n        currentPage={currentPage}\n        pageSize={pageSize}\n        onPageChange={currentPage => this.setState({currentPage})}\n        onPageSizeChange={pageSize => this.setState({pageSize})}\n      />\n    );\n  }\n}\n\nrender(createElement(Example, {}), document.getElementById('pager'));\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "The pager.",
  "attrs": {
    "name": "Pager",
    "category": "Components",
    "framework": "React",
    "extends": "{ReactComponent}",
    "description": "The pager.",
    "example-file": "./pager.examples.html"
  }
};