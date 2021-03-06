module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: ['./dist/**', './demo/dist/**', './node_modules/**'],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    // SCSS @ Rules
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // Selector List
    'selector-list-comma-newline-after': 'always-multi-line',

    // Order
    'order/order': [
      'dollar-variables',
      'at-variables',
      'less-mixins',
      'custom-properties',
      'declarations',
      'at-rules',
      'rules'
    ],
    'order/properties-alphabetical-order': true,

    // SUITCSS Pattern
    'plugin/selector-bem-pattern': {
      componentName: '^[A-Z][A-Za-z]+$',
      componentSelectors: {
        initial:
          '^(.{componentName}(-{1,2}[a-z][A-Za-z]+)*|&)(.is-[a-z][A-Za-z]+)?$',
        combined:
          '^(.{componentName}(-{1,2}[a-z][A-Za-z]+)*|&)(.is-[a-z][A-Za-z]+)?$'
      },
      utilitySelectors: '^\\.util-[A-Za-z]+$'
    }
  }
}
