/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    indent: [
      1,
      2,
      {
        ignoredNodes: ['TemplateLiteral'],
      },
    ],
    'max-len': [1, { code: 120 }],
    'no-empty-pattern': 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'object-curly-spacing': [1, 'always'],
    'prefer-template': 1,
    'space-before-function-paren': ['error', 'never'],
    quotes: [1, 'single'],
    semi: ['error', 'always'],
    'template-curly-spacing': 'off',
    'vue/comment-directive': 'off',
    'vue/html-indent': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attributes-order': [
      'warn',
      {
        alphabetical: true,
      },
    ],
  },
};
