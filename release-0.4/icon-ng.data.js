window.source = {
  "title": "Icon Ng",
  "url": "icon-ng.html",
  "type": "js",
  "content": "import angular from 'angular';\nimport 'dom4';\n\nimport {resolveRelativeURL} from '../global/url';\nimport {Color, Size} from '../icon/icon__constants';\nimport '../icon/icon.scss';\n\n/**\n * @name Icon Ng\n * @category Legacy Angular Components\n * @description Provides an Angular wrapper for Icon.\n * @example\n    <example name=\"Icon Ng\">\n      <file name=\"index.html\">\n        <div ng-app=\"TestApp\" ng-strict-di ng-controller=\"testCtrl\">\n          <rg-icon glyph=\"{{icon}}\" size=\"14\"></rg-icon>\n          <rg-icon glyph=\"{{icon}}\"></rg-icon>\n          <rg-icon glyph=\"{{icon}}\" color=\"ORANGE\"></rg-icon>\n          <rg-icon glyph=\"{{icon}}\" color=\"{{'BLUE'}}\" loading=\"true\"></rg-icon>\n          <rg-icon glyph=\"{{icon}}\" size=\"64\"></rg-icon>\n          <rg-icon glyph=\"{{error}}\" height=\"80\" width=\"100\"></rg-icon>\n        </div>\n      </file>\n    <file name=\"index.js\" webpack=\"true\">\n      import angular from 'angular';\n      import IconNG from '@jetbrains/ring-ui/components/icon-ng/icon-ng';\n      import ButtonNG from '@jetbrains/ring-ui/components/button-ng/button-ng';\n      import {CheckmarkIcon, WarningIcon} from '@jetbrains/ring-ui/components/icon';\n\n      angular.module('TestApp', [ButtonNG, IconNG]).controller('testCtrl', function($scope) {\n        $scope.icon = CheckmarkIcon;\n        $scope.error = WarningIcon;\n      });\n    </file>\n  </example>\n */\n\nconst angularModule = angular.module('Ring.icon', []);\nconst CLASS_PREFIX = 'ring-icon_';\nconst LOADING_CLASS = `${CLASS_PREFIX}loading`;\nconst DEFAULT_SIZE = Size.Size32;\n\nangularModule.directive('rgIcon', function rgIconDirective() {\n  return {\n    restrict: 'E',\n    scope: {\n      glyph: '@',\n      loading: '=?',\n      color: '@?',\n      size: '@?',\n      height: '@?',\n      width: '@?'\n    },\n    template: require('./icon-ng.html'),\n    controller: $scope => {\n      $scope.$watch('glyph', value => {\n        $scope.glyphPath = resolveRelativeURL(value);\n      });\n    },\n    link: function link(scope, iElement, iAttrs) {\n      iAttrs.$addClass('ring-icon');\n\n      scope.$watch('loading', value => {\n        if (value) {\n          iAttrs.$addClass(LOADING_CLASS);\n        } else {\n          iAttrs.$removeClass(LOADING_CLASS);\n        }\n      });\n\n      scope.$watch(\n        () => scope.color && Color[scope.color] && CLASS_PREFIX + Color[scope.color],\n        (colorClass, prevColorClass) => {\n          if (colorClass) {\n            iAttrs.$addClass(colorClass);\n\n            // Remove previous class, but don't remove initial one\n            if (prevColorClass && prevColorClass !== colorClass) {\n              iAttrs.$removeClass(prevColorClass);\n            }\n          }\n        }\n      );\n\n      scope.$watchGroup(['size', 'width', 'height'], ([size, width, height]) => {\n        if (!width && !height) {\n          const sizeString = `${size || DEFAULT_SIZE}px`;\n          scope.style = {\n            width: sizeString,\n            height: sizeString\n          };\n          return;\n        }\n\n        scope.style = {};\n        if (width) {\n          scope.style.width = `${width}px`;\n        }\n        if (height) {\n          scope.style.height = `${height}px`;\n        }\n      });\n    }\n  };\n});\n\nexport default angularModule.name;\n",
  "examples": [
    {
      "name": "Icon Ng",
      "url": "examples/icon-ng/icon-ng.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div ng-app=\"TestApp\" ng-strict-di ng-controller=\"testCtrl\">\n  <rg-icon glyph=\"{{icon}}\" size=\"14\"></rg-icon>\n  <rg-icon glyph=\"{{icon}}\"></rg-icon>\n  <rg-icon glyph=\"{{icon}}\" color=\"ORANGE\"></rg-icon>\n  <rg-icon glyph=\"{{icon}}\" color=\"{{'BLUE'}}\" loading=\"true\"></rg-icon>\n  <rg-icon glyph=\"{{icon}}\" size=\"64\"></rg-icon>\n  <rg-icon glyph=\"{{error}}\" height=\"80\" width=\"100\"></rg-icon>\n</div>\n      ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport angular from 'angular';\nimport IconNG from '@jetbrains/ring-ui/components/icon-ng/icon-ng';\nimport ButtonNG from '@jetbrains/ring-ui/components/button-ng/button-ng';\nimport {CheckmarkIcon, WarningIcon} from '@jetbrains/ring-ui/components/icon';\n\nangular.module('TestApp', [ButtonNG, IconNG]).controller('testCtrl', function($scope) {\n  $scope.icon = CheckmarkIcon;\n  $scope.error = WarningIcon;\n});\n    ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Provides an Angular wrapper for Icon.",
  "attrs": {
    "name": "Icon Ng",
    "category": "Legacy Angular Components",
    "description": "Provides an Angular wrapper for Icon.",
    "example": "    <example name=\"Icon Ng\">\n      <file name=\"index.html\">\n        <div ng-app=\"TestApp\" ng-strict-di ng-controller=\"testCtrl\">\n          <rg-icon glyph=\"{{icon}}\" size=\"14\"></rg-icon>\n          <rg-icon glyph=\"{{icon}}\"></rg-icon>\n          <rg-icon glyph=\"{{icon}}\" color=\"ORANGE\"></rg-icon>\n          <rg-icon glyph=\"{{icon}}\" color=\"{{'BLUE'}}\" loading=\"true\"></rg-icon>\n          <rg-icon glyph=\"{{icon}}\" size=\"64\"></rg-icon>\n          <rg-icon glyph=\"{{error}}\" height=\"80\" width=\"100\"></rg-icon>\n        </div>\n      </file>\n    <file name=\"index.js\" webpack=\"true\">\n      import angular from 'angular';\n      import IconNG from '@jetbrains/ring-ui/components/icon-ng/icon-ng';\n      import ButtonNG from '@jetbrains/ring-ui/components/button-ng/button-ng';\n      import {CheckmarkIcon, WarningIcon} from '@jetbrains/ring-ui/components/icon';\n\n      angular.module('TestApp', [ButtonNG, IconNG]).controller('testCtrl', function($scope) {\n        $scope.icon = CheckmarkIcon;\n        $scope.error = WarningIcon;\n      });\n    </file>\n  </example>"
  }
};