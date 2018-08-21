window.source = {
  "title": "Loader Inline Ng",
  "url": "loader-inline-ng.html",
  "type": "js",
  "content": "import angular from 'angular';\nimport '../loader-inline/loader-inline.scss';\n\n/**\n * @name Loader Inline Ng\n * @category Legacy Angular Components\n * @framework Angular\n * @constructor\n * @description Wraps markup for loader-inline component.\n * @example\n    <example name=\"Loader Inline Ng\">\n      <file name=\"index.html\">\n        <div ng-app=\"TestApp\" ng-strict-di>\n          <rg-loader-inline></rg-loader-inline>\n        </div>\n      </file>\n      <file name=\"index.js\">\n        import angular from 'angular';\n        import LoaderInline from  '@jetbrains/ring-ui/components/loader-inline-ng/loader-inline-ng';\n\n        angular.module('TestApp', [LoaderInline]);\n      </file>\n  </example>\n */\n\n\nconst angularModule = angular.module('Ring.loader-inline', []);\n\nangularModule.\n  component('rgLoaderInline', {\n    // eslint-disable-next-line import/no-commonjs\n    template: require('./loader-inline-ng.html')\n  });\n\nexport default angularModule.name;\n",
  "examples": [
    {
      "name": "Loader Inline Ng",
      "url": "examples/loader-inline-ng/loader-inline-ng.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div ng-app=\"TestApp\" ng-strict-di>\n  <rg-loader-inline></rg-loader-inline>\n</div>\n      ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport angular from 'angular';\nimport LoaderInline from  '@jetbrains/ring-ui/components/loader-inline-ng/loader-inline-ng';\n\nangular.module('TestApp', [LoaderInline]);\n      ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Wraps markup for loader-inline component.",
  "attrs": {
    "name": "Loader Inline Ng",
    "category": "Legacy Angular Components",
    "framework": "Angular",
    "constructor": "",
    "description": "Wraps markup for loader-inline component.",
    "example": "    <example name=\"Loader Inline Ng\">\n      <file name=\"index.html\">\n        <div ng-app=\"TestApp\" ng-strict-di>\n          <rg-loader-inline></rg-loader-inline>\n        </div>\n      </file>\n      <file name=\"index.js\">\n        import angular from 'angular';\n        import LoaderInline from  '@jetbrains/ring-ui/components/loader-inline-ng/loader-inline-ng';\n\n        angular.module('TestApp', [LoaderInline]);\n      </file>\n  </example>"
  }
};