window.source = {
  "title": "Progress Bar",
  "url": "progress-bar.html",
  "type": "js",
  "content": "import React, {PureComponent} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport './progress-bar.scss';\n\n/**\n * @name Progress Bar\n * @category Components\n * @constructor\n * @description Displays the progress of a task (akin to HTML5 progress tag).\n * @extends {ReactComponent}\n * @example-file ./progress-bar.examples.html\n */\nexport default class ProgressBar extends PureComponent {\n  static propTypes = {\n    /**\n     * Dark background mode\n     * @type {boolean}\n     */\n    light: PropTypes.bool,\n\n    /**\n     * Sets the ring-progress-bar_global class to position the progress bar on top of the screen.\n     * Should be placed directly inside body, will be positioned right below .ring-header\n     * if placed adjacent to it.\n     * @type {boolean}\n     */\n    global: PropTypes.bool,\n\n    /**\n     * Custom class\n     * @type {string}\n     */\n    className: PropTypes.string,\n\n    /**\n     * A floating point number that specifies minimum completion rate for a task to be considered\n     * complete. Default value is 1.0.\n     * @type {number}\n     */\n    max: PropTypes.number,\n\n    /**\n     * A floating point number that specifies current task completion rate.\n     * @type {number}\n     */\n    value: PropTypes.number\n  };\n\n  static defaultProps = {\n    max: 1.0,\n    value: 0\n  };\n\n  /**\n   * @param {number} value The progress task value\n   * @param {number} max The maximum value\n   * @return {number} The progress task value in percents\n   * @private\n   */\n  static toPercent(value, max) {\n    const HUNDRED_PERCENT = 100;\n    const percents = (value * HUNDRED_PERCENT) / max;\n    return percents > HUNDRED_PERCENT ? HUNDRED_PERCENT : percents;\n  }\n\n  progressbarWrapperRef = el => {\n    this.progressbarWrapper = el;\n  };\n\n  progressbarRef = el => {\n    this.progressbar = el;\n  };\n\n  render() {\n    const {light, className, global, max, value, ...otherProps} = this.props;\n\n    const width = value ? `${ProgressBar.toPercent(value, max)}%` : null;\n    const classes = classNames({\n      'ring-progress-bar': true,\n      'ring-progress-bar_light': light,\n      'ring-progress-bar_global': global,\n      [className]: !!className\n    });\n\n    return (\n      <div\n        {...otherProps}\n        className={classes}\n        ref={this.progressbarWrapperRef}\n      >\n        <div\n          className=\"ring-progress-bar__i\"\n          ref={this.progressbarRef}\n          role=\"progressbar\"\n          aria-valuenow={value}\n          aria-valuemin={0}\n          aria-valuemax={max}\n          style={{width}}\n        />\n      </div>\n    );\n  }\n}\n",
  "examples": [
    {
      "name": "Progress Bar",
      "url": "examples/progress-bar/progress-bar.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div>\n  <div id='progress-bar' style=\"height: 25px; padding-top: 25px;\"></div>\n  <div id='progress-bar-black'\n    style=\"height: 25px; background: #000; padding-top: 25px;\"></div>\n  <div id='progress-bar-gray'\n    style=\"height: 25px; background: #F0F0F0; padding-top: 25px;\"></div>\n</div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport ProgressBar from '@jetbrains/ring-ui/components/progress-bar/progress-bar';\n\nlet value = 0;\n\nsetInterval(function updateProgress() {\n  value = value >= 1 ? 0 : value + 0.1;\n\n  render(\n    <ProgressBar value={value}/>,\n    document.getElementById('progress-bar')\n  );\n\n  render(\n    <ProgressBar value={value} light={true}/>,\n    document.getElementById('progress-bar-black')\n  );\n\n  render(\n    <ProgressBar value={value}/>,\n    document.getElementById('progress-bar-gray')\n  );\n}, 500);\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Displays the progress of a task (akin to HTML5 progress tag).",
  "attrs": {
    "name": "Progress Bar",
    "category": "Components",
    "constructor": "",
    "description": "Displays the progress of a task (akin to HTML5 progress tag).",
    "extends": "{ReactComponent}",
    "example-file": "./progress-bar.examples.html"
  }
};