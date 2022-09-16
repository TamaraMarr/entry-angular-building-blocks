'use strict';
module.exports = {
  customSyntax: "postcss-scss",
  ignoreAtRules: [ "else" ],
  extends: "stylelint-config-property-sort-order-smacss",
  plugins: [
    "stylelint-scss",
    "stylelint-use-nesting",
    "stylelint-selector-no-empty",
    "stylelint-group-selectors",
    "stylelint-max-lines",
    "stylelint-declaration-block-no-ignored-properties"
  ],
  rules: {
    "alpha-value-notation": "number",
    "annotation-no-unknown": true,
    "at-rule-allowed-list": [ "use", "for", "if", "else", "include", "extend", "return", "error", "each", "mixin", "function", "keyframes", "font-face", "forward", "at-root" ],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": null,
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-newline-before": "never-single-line",
    "block-opening-brace-space-before": "always",
    "block-no-empty": true,
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "color-function-notation": "modern",
    "color-hex-case": "upper",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "custom-property-empty-line-before": "always",
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-no-important": true,
    "declaration-property-max-values": {},
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "font-weight-notation": "numeric",
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "never-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "function-no-unknown": null,
    "function-parentheses-newline-inside": "never-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "hue-degree-notation": "number",
    "import-notation": "string",
    "indentation": "tab",
    "keyframe-block-no-duplicate-selectors": true,
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-line-length": [
      135,
      { "ignore": [ "comments" ] }
    ],
    "max-nesting-depth": 3,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-allowed-list": [ "min-width", "-ms-high-contrast" ],
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "never-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always",
    "media-query-list-comma-space-before": "never",
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-first-line": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-unknown-animations": true,
    "number-max-precision": 2,
    "number-no-trailing-zeros": true,
    "number-leading-zero": "never",
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always",
      { "except": [ "after-single-line-comment", "first-nested" ] }
    ],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "always",
    "selector-attribute-operator-space-before": "always",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-list-comma-space-after": "always",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 0,
    "selector-max-combinators": 2,
    "selector-max-compound-selectors": 3,
    "selector-max-empty-lines": 0,
    "selector-max-id": 0,
    "selector-max-pseudo-class": 1,
    "selector-max-type": 2,
    "selector-max-universal": 0,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": [
      true,
      { "ignorePseudoElements": [ "host", "ng-deep" ] }
    ],
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "single",
    "time-min-milliseconds": 100,
    "unit-allowed-list": [ "px", "%", "em", "rem", "vw", "deg", "ms", "s" ],
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "never-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-no-vendor-prefix": true,
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "never-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "never",
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-function-named-arguments": [
      "never",
      { "ignoreFunctions": [ "color.adjust" ] }
    ],
    "scss/at-if-closing-brace-newline-after": null,
    "scss/at-if-closing-brace-space-after": null,
    "scss/at-if-no-null": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension": "never",
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/comment-no-empty": true,
    "scss/function-no-unknown": [
      true,
      { "ignoreFunctions": ["/^-/"] }
    ],
    "scss/function-quote-no-quoted-strings-inside": true,
    "scss/function-unquote-no-unquoted-strings-inside": true,
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,
    "scss/partial-no-import": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/selector-no-union-class-name": true,
    "scss/no-duplicate-dollar-variables": true,
    "scss/no-duplicate-mixins": true,
    "scss/no-global-function-names": true,
    "scss/declaration-nested-properties": [
      "always",
      { "except": [ "only-of-namespace" ] }
    ],
    "scss/at-rule-no-unknown": [
      true,
      { "ignoreAtRules": [ "use" ] }
    ],
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/stylelint-group-selectors": true,
    "plugin/stylelint-selector-no-empty": true,
    "csstools/use-nesting": "always",
    "pitcher/max-lines": 135
  }
};
