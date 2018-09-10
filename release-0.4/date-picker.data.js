window.source = {
  "title": "Date Picker",
  "url": "date-picker.html",
  "type": "js",
  "content": "import React, {Component} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport rerenderHOC from '../global/rerender-hoc';\n\nimport {\n  CalendarIcon,\n  CloseIcon\n} from '../icon';\n\nimport Popup from '../popup/popup';\nimport Button from '../button/button';\n\nimport DatePopup from './date-popup';\nimport {dateType, parseDate} from './consts';\nimport styles from './date-picker.css';\n\n/**\n * @name Date Picker\n * @category Components\n * @framework React\n * @constructor\n * @description Allows picking a date or a date range. Uses [moment.js](http://momentjs.com/) under the hood. You may want to either [bundle only the needed locales](https://webpack.js.org/plugins/context-replacement-plugin/#newcontentresource-newcontentrecursive-newcontentregexp) or even to [ignore all of them](https://webpack.js.org/plugins/ignore-plugin/#ignore-moment-locales).\n * @example-file ./date-picker.examples.html\n */\n\nexport default class DatePicker extends Component {\n  static defaultProps = {\n    className: '',\n    date: null,\n    range: false,\n    from: null,\n    to: null,\n    clear: false,\n    displayFormat: 'D MMM YYYY',\n    displayMonthFormat: 'D MMM',\n    displayDayFormat: 'D',\n    inputFormat: 'D MMMM YYYY',\n    datePlaceholder: 'Select a date',\n    rangePlaceholder: 'Select a date range',\n    onChange() {}\n  };\n\n  static propTypes = {\n    className: PropTypes.string,\n    popupClassName: PropTypes.string,\n    date: dateType,\n    range: PropTypes.bool,\n    from: dateType,\n    to: dateType,\n    clear: PropTypes.bool,\n    displayFormat: PropTypes.string,\n    displayMonthFormat: PropTypes.string,\n    displayDayFormat: PropTypes.string,\n    inputFormat: PropTypes.string,\n    datePlaceholder: PropTypes.string,\n    rangePlaceholder: PropTypes.string,\n    onChange: PropTypes.func\n  };\n\n  state = {\n    showPopup: false\n  };\n\n  togglePopup = () => {\n    this.setState(({showPopup}) => ({\n      showPopup: !showPopup\n    }));\n  };\n\n  hidePopup = () => {\n    this.setState({\n      showPopup: false\n    });\n  };\n\n  clear = e => {\n    e.stopPropagation();\n    this.props.onChange(\n      this.props.range\n        ? {from: null, to: null}\n        : null\n    );\n  };\n\n  render() {\n    const {\n      className,\n      popupClassName,\n      displayMonthFormat,\n      displayDayFormat,\n      datePlaceholder,\n      rangePlaceholder,\n      clear,\n      ...datePopupProps\n    } = this.props;\n\n    const {\n      range,\n      displayFormat,\n      inputFormat\n    } = datePopupProps;\n\n    const classes = classNames(\n      styles.container,\n      className\n    );\n\n    const displayClasses = classNames(\n      styles.displayDate,\n      {[styles.displayRange]: range}\n    );\n\n    const parse = text => parseDate(\n      text,\n      inputFormat,\n      displayFormat\n    );\n\n    const date = parse(this.props.date);\n    const from = parse(this.props.from);\n    const to = parse(this.props.to);\n\n    let text;\n    if (!range) {\n      text = date ? date.format(displayFormat) : datePlaceholder;\n    } else if (!from && !to) {\n      text = rangePlaceholder;\n    } else if (!to) {\n      text = `${from.format(displayFormat)} —`;\n    } else if (!from) {\n      text = `— ${to.format(displayFormat)}`;\n    } else if (!from.isSame(to, 'year')) {\n      text = `${from.format(displayFormat)} — ${to.format(displayFormat)}`;\n    } else if (!from.isSame(to, 'month')) {\n      text = `${from.format(displayMonthFormat)} — ${to.format(displayFormat)}`;\n    } else if (!from.isSame(to, 'day')) {\n      text = `${from.format(displayDayFormat)} — ${to.format(displayFormat)}`;\n    } else {\n      text = `${to.format(displayFormat)}`;\n    }\n\n    return (\n      <div className={classes}>\n        <Button\n          onClick={this.togglePopup}\n          icon={CalendarIcon}\n          iconSize={17}\n          className={styles.datePicker}\n          data-test=\"ring-date-picker\"\n        >\n          <span\n            className={displayClasses}\n          >\n            {text}\n          </span>\n        </Button>\n        {clear && (date || from || to) && (\n          <CloseIcon\n            className={styles.clear}\n            size={CloseIcon.Size.Size14}\n            onClick={this.clear}\n          />\n        )}\n        <Popup\n          hidden={!this.state.showPopup}\n          onCloseAttempt={this.hidePopup}\n          dontCloseOnAnchorClick\n          keepMounted\n          className={popupClassName}\n        >\n          <DatePopup\n            {...datePopupProps}\n            onComplete={this.hidePopup}\n          />\n        </Popup>\n      </div>\n    );\n  }\n}\n\nexport const RerenderableDatePicker = rerenderHOC(DatePicker);\n\n",
  "examples": [
    {
      "name": "Date picker (single date)",
      "url": "examples/date-picker/date-picker-single-date.html",
      "disableAutoSize": true,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"date-picker\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport {render} from 'react-dom';\nimport React, {Component} from 'react';\n\nimport DatePicker from '@jetbrains/ring-ui/components/date-picker/date-picker';\n\nconst container = document.getElementById('date-picker');\n\nclass DatePickerExample extends Component {\n  state = {date: '20.09.14'};\n\n  handleChange = date => this.setState({date});\n\n  render() {\n    return (\n      <div>\n        <DatePicker\n          date={this.state.date}\n          onChange={this.handleChange}\n        />\n      </div>\n    );\n  }\n}\n\nrender(<DatePickerExample />, container);\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Date picker (range)",
      "url": "examples/date-picker/date-picker-range.html",
      "disableAutoSize": true,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"date-picker\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport {render} from 'react-dom';\nimport React, {Component} from 'react';\n\nimport DatePicker from '@jetbrains/ring-ui/components/date-picker/date-picker';\n\nconst container = document.getElementById('date-picker');\n\nclass DatePickerExample extends Component {\n  state = {\n    from: '20 January 2015',\n    to: '7 February 2015'\n  };\n\n  handleChange = range => this.setState(range);\n\n  render() {\n    return (\n      <div>\n        <DatePicker\n          {...this.state}\n          onChange={this.handleChange}\n          range\n        />\n      </div>\n    );\n  }\n}\n\nrender(<DatePickerExample />, container);\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Date picker (clearable)",
      "url": "examples/date-picker/date-picker-clearable.html",
      "disableAutoSize": true,
      "files": [
        {
          "type": "html",
          "content": "\n<div id=\"date-picker\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport {render} from 'react-dom';\nimport React, {Component} from 'react';\n\nimport DatePicker from '@jetbrains/ring-ui/components/date-picker/date-picker';\n\nconst container = document.getElementById('date-picker');\n\nclass DatePickerExample extends Component {\n  state = {date: '20.09.14'};\n\n  handleChange = date => this.setState({date});\n\n  render() {\n    return (\n      <div>\n        <DatePicker\n          date={this.state.date}\n          onChange={this.handleChange}\n          clear\n        />\n      </div>\n    );\n  }\n}\n\nrender(<DatePickerExample />, container);\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Allows picking a date or a date range. Uses [moment.js](http://momentjs.com/) under the hood. You may want to either [bundle only the needed locales](https://webpack.js.org/plugins/context-replacement-plugin/#newcontentresource-newcontentrecursive-newcontentregexp) or even to [ignore all of them](https://webpack.js.org/plugins/ignore-plugin/#ignore-moment-locales).",
  "attrs": {
    "name": "Date Picker",
    "category": "Components",
    "framework": "React",
    "constructor": "",
    "description": "Allows picking a date or a date range. Uses [moment.js](http://momentjs.com/) under the hood. You may want to either [bundle only the needed locales](https://webpack.js.org/plugins/context-replacement-plugin/#newcontentresource-newcontentrecursive-newcontentregexp) or even to [ignore all of them](https://webpack.js.org/plugins/ignore-plugin/#ignore-moment-locales).",
    "example-file": "./date-picker.examples.html"
  }
};