window.source = {
  "title": "Docked Panel Ng",
  "url": "docked-panel-ng.html",
  "type": "js",
  "content": "import angular from 'angular';\nimport 'dom4';\n\nimport scheduleRAF from '../global/schedule-raf';\nimport {getDocumentScrollTop, getWindowHeight} from '../global/dom';\n\nimport './docked-panel-ng.scss';\n\nconst scheduleScroll = scheduleRAF();\n\n/**\n * @name Docked Panel Ng\n * @category Legacy Angular\n * @tags Ring UI Language\n * @description Creates a panel docked at the bottom of the page.\n * @example\n   <example name=\"Docked Panel Ng\">\n     <file name=\"index.html\" disable-auto-size>\n      <div ng-app='DockedPanelExample'>\n        <div>\n          <textarea placeholder=\"Add description\" rows=\"70\" cols=\"100\"></textarea>\n        </div>\n        <div rg-panel rg-docked-panel rg-docked-panel-class=\"customCssClass\">\n          <rg-button mode=\"primary\">Save</rg-button>\n          <rg-button >Cancel</rg-button>\n        </div>\n        <br/>\n        <div>\n          <textarea placeholder=\"Add steps\" rows=\"10\" cols=\"50\"></textarea>\n        </div>\n      </div>\n     </file>\n     <file name=\"index.js\" webpack=\"true\">\n      import angular from 'angular';\n      import DockedPanelNG from '@jetbrains/ring-ui/components/docked-panel-ng/docked-panel-ng';\n      import PanelNG from '@jetbrains/ring-ui/components/panel-ng/panel-ng';\n      import ButtonNG from '@jetbrains/ring-ui/components/button-ng/button-ng';\n      angular.module('DockedPanelExample', [DockedPanelNG, ButtonNG, PanelNG]);\n     </file>\n   </example>\n */\n\nconst angularModule = angular.module('Ring.docked-panel', []);\n\nangularModule.directive('rgDockedPanel', function rgDockedPanelDirective($parse) {\n  return {\n    link: function link(scope, element, attrs) {\n      const TOGGLE_GAP = 8;\n      const CSS_CLASS_NAME = 'ring-docked-panel';\n      const DOCKED_CSS_CLASS_NAME = 'ring-docked-panel_fixed';\n      const dockedPanelClass = attrs.rgDockedPanelClass || '';\n      const config = attrs.rgDockedPanelConfig ? $parse(attrs.rgDockedPanelConfig)(scope) : null;\n      let initialPanelPos;\n      let isDocked;\n\n      /**\n       * Container\n       * @type {Element} panel\n       */\n      const panel = element[0];\n\n      panel.classList.add(CSS_CLASS_NAME);\n\n      function getYPosition(node) {\n        const clientRect = node.getBoundingClientRect();\n        return clientRect.top + clientRect.height + getDocumentScrollTop();\n      }\n\n      /**\n       * Save panel initial rects and left margin and container-node for further use\n       */\n      function saveInitialPos() {\n        initialPanelPos = getYPosition(panel);\n      }\n\n      function getInitialUndockedPosition() {\n        return (config || {}).container ? getYPosition(config.container) : initialPanelPos;\n      }\n\n      function onBeforeDock() {\n        if (config) {\n          if (config.beforeDock) {\n            scope.$eval(config.beforeDock(element));\n          }\n          if (config.className) {\n            panel.classList.add(config.className);\n          }\n        }\n      }\n\n      function onBeforeUndock() {\n        if (config) {\n          if (config.beforeUndock) {\n            scope.$eval(config.beforeUndock(element));\n          }\n          if (config.className) {\n            panel.classList.remove(config.className);\n          }\n        }\n      }\n\n      /**\n       * Docks the panel to the bottom of the page\n       */\n      function dock() {\n        onBeforeDock();\n\n        panel.classList.add(DOCKED_CSS_CLASS_NAME);\n        if (dockedPanelClass) {\n          panel.classList.add(dockedPanelClass);\n        }\n        isDocked = true;\n      }\n\n      function undock() {\n        onBeforeUndock();\n\n        panel.classList.remove(DOCKED_CSS_CLASS_NAME);\n        if (dockedPanelClass) {\n          panel.classList.remove(dockedPanelClass);\n        }\n        isDocked = false;\n      }\n\n      function onResize() {\n        if (config) {\n          if (config && config.onResize) {\n            scope.$eval(config.onResize(element, isDocked));\n          }\n        }\n      }\n\n      /**\n       * Check panel position\n       */\n      function checkPanelPosition() {\n        const currentPanelRect = panel.getBoundingClientRect();\n\n        if (currentPanelRect.top + currentPanelRect.height > getWindowHeight() && !isDocked) {\n          dock();\n        } else if (\n          isDocked &&\n          currentPanelRect.top + currentPanelRect.height +\n            getDocumentScrollTop() >= getInitialUndockedPosition() + TOGGLE_GAP\n        ) {\n          undock();\n        }\n      }\n\n      function init() {\n        const _onResize = () => {\n          checkPanelPosition();\n          onResize();\n        };\n        const scrollListener = () => scheduleScroll(checkPanelPosition);\n\n        /**\n         * Wait until all content on the page is loaded\n         */\n        scope.$applyAsync(() => {\n          window.addEventListener('scroll', scrollListener);\n          window.addEventListener('resize', _onResize);\n\n          scope.$on('$destroy', () => {\n            window.removeEventListener('scroll', scrollListener);\n            window.removeEventListener('resize', _onResize);\n          });\n\n          saveInitialPos();\n          checkPanelPosition();\n        });\n      }\n\n      init();\n    }\n  };\n});\n\nexport default angularModule.name;\n",
  "examples": [
    {
      "name": "Docked Panel Ng",
      "url": "examples/docked-panel-ng/docked-panel-ng.html",
      "disableAutoSize": true,
      "files": [
        {
          "type": "html",
          "content": "\n<div ng-app='DockedPanelExample'>\n  <div>\n    <textarea placeholder=\"Add description\" rows=\"70\" cols=\"100\"></textarea>\n  </div>\n  <div rg-panel rg-docked-panel rg-docked-panel-class=\"customCssClass\">\n    <rg-button mode=\"primary\">Save</rg-button>\n    <rg-button >Cancel</rg-button>\n  </div>\n  <br/>\n  <div>\n    <textarea placeholder=\"Add steps\" rows=\"10\" cols=\"50\"></textarea>\n  </div>\n</div>\n     ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport angular from 'angular';\nimport DockedPanelNG from '@jetbrains/ring-ui/components/docked-panel-ng/docked-panel-ng';\nimport PanelNG from '@jetbrains/ring-ui/components/panel-ng/panel-ng';\nimport ButtonNG from '@jetbrains/ring-ui/components/button-ng/button-ng';\nangular.module('DockedPanelExample', [DockedPanelNG, ButtonNG, PanelNG]);\n     ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Creates a panel docked at the bottom of the page.",
  "attrs": {
    "name": "Docked Panel Ng",
    "category": "Legacy Angular",
    "tags": "Ring UI Language",
    "description": "Creates a panel docked at the bottom of the page.",
    "example": "   <example name=\"Docked Panel Ng\">\n     <file name=\"index.html\" disable-auto-size>\n      <div ng-app='DockedPanelExample'>\n        <div>\n          <textarea placeholder=\"Add description\" rows=\"70\" cols=\"100\"></textarea>\n        </div>\n        <div rg-panel rg-docked-panel rg-docked-panel-class=\"customCssClass\">\n          <rg-button mode=\"primary\">Save</rg-button>\n          <rg-button >Cancel</rg-button>\n        </div>\n        <br/>\n        <div>\n          <textarea placeholder=\"Add steps\" rows=\"10\" cols=\"50\"></textarea>\n        </div>\n      </div>\n     </file>\n     <file name=\"index.js\" webpack=\"true\">\n      import angular from 'angular';\n      import DockedPanelNG from '@jetbrains/ring-ui/components/docked-panel-ng/docked-panel-ng';\n      import PanelNG from '@jetbrains/ring-ui/components/panel-ng/panel-ng';\n      import ButtonNG from '@jetbrains/ring-ui/components/button-ng/button-ng';\n      angular.module('DockedPanelExample', [DockedPanelNG, ButtonNG, PanelNG]);\n     </file>\n   </example>"
  }
};