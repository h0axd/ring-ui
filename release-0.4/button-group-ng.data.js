window.source = {
  "title": "Button Group Ng",
  "url": "button-group-ng.html",
  "type": "js",
  "content": "import angular from 'angular';\nimport 'dom4';\n\nimport {getStyles} from '../global/dom';\nimport '../button-group/button-group.scss';\n\n/**\n * @name Button Group Ng\n * @category Legacy Angular Components\n * @description Provides an Angular wrapper for Button Group.\n * @example\n   <example name=\"Button Group Ng\">\n    <file name=\"index.html\">\n      <div ng-app=\"test\" ng-strict-di>\n        <div class=\"ring-button-group\" rg-button-group>\n          <rg-button>Button 1</rg-button>\n          <rg-button>Button 1</rg-button>\n        </div>\n      </div>\n    </file>\n    <file name=\"index.js\">\n      import angular from 'angular';\n      import ButtonNg from '@jetbrains/ring-ui/components/button-ng/button-ng';\n      import ButtonGroupNg from '@jetbrains/ring-ui/components/button-group-ng/button-group-ng';\n\n      angular.module('test', [ButtonNg, ButtonGroupNg]);\n    </file>\n   </example>\n */\n\nconst CLASSNAME_FIRST = 'ring-button-group__first';\nconst CLASSNAME_LAST = 'ring-button-group__last';\nconst CLASSNAME_GROUP = 'ring-button-group';\n\nconst angularModule = angular.module('Ring.button-group', []);\n\nfunction rgButtonGroup() {\n  return {\n    restrict: 'A',\n    link: function link($scope, iElement) {\n      const element = iElement[0];\n      const children = Array.from(element.children);\n\n      const classList = element.classList;\n      if (!classList.contains(CLASSNAME_GROUP)) {\n        classList.add(CLASSNAME_GROUP);\n      }\n\n      // For $watchCollection it should be Array, not jQuery collection\n      $scope.$watchCollection(\n        () => children.filter(node => getStyles(node).display !== 'none'),\n        (newVisible, oldVisible) => {\n          if (oldVisible && oldVisible.length) {\n            oldVisible[0].classList.remove(CLASSNAME_FIRST);\n            oldVisible[oldVisible.length - 1].classList.remove(CLASSNAME_LAST);\n          }\n\n          if (newVisible && newVisible.length) {\n            newVisible[0].classList.add(CLASSNAME_FIRST);\n            newVisible[newVisible.length - 1].classList.add(CLASSNAME_LAST);\n          }\n        }\n      );\n    }\n  };\n}\n\nangularModule.directive('rgButtonGroup', rgButtonGroup);\n\nexport default angularModule.name;\n",
  "examples": [
    {
      "name": "Button Group Ng",
      "url": "examples/button-group-ng/button-group-ng.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div ng-app=\"test\" ng-strict-di>\n  <div class=\"ring-button-group\" rg-button-group>\n    <rg-button>Button 1</rg-button>\n    <rg-button>Button 1</rg-button>\n  </div>\n</div>\n    ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport angular from 'angular';\nimport ButtonNg from '@jetbrains/ring-ui/components/button-ng/button-ng';\nimport ButtonGroupNg from '@jetbrains/ring-ui/components/button-group-ng/button-group-ng';\n\nangular.module('test', [ButtonNg, ButtonGroupNg]);\n    ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Provides an Angular wrapper for Button Group.",
  "attrs": {
    "name": "Button Group Ng",
    "category": "Legacy Angular Components",
    "description": "Provides an Angular wrapper for Button Group.",
    "example": "   <example name=\"Button Group Ng\">\n    <file name=\"index.html\">\n      <div ng-app=\"test\" ng-strict-di>\n        <div class=\"ring-button-group\" rg-button-group>\n          <rg-button>Button 1</rg-button>\n          <rg-button>Button 1</rg-button>\n        </div>\n      </div>\n    </file>\n    <file name=\"index.js\">\n      import angular from 'angular';\n      import ButtonNg from '@jetbrains/ring-ui/components/button-ng/button-ng';\n      import ButtonGroupNg from '@jetbrains/ring-ui/components/button-group-ng/button-group-ng';\n\n      angular.module('test', [ButtonNg, ButtonGroupNg]);\n    </file>\n   </example>"
  }
};