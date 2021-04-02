module.exports = {
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-only-tests/no-only-tests': 'error',
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': 'error',
    'curly': [
      2,
      'all'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-multi-spaces': 'error',
    'comma-dangle': 'error',
    'no-var': 'error',
    'no-extra-semi': 'error',
    'key-spacing': [
      'error',
      {
        'beforeColon': false
      }
    ],
    'no-spaced-func': 'error',
    'space-infix-ops': [
      'error',
      {
        'int32Hint': false
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ]
  }
};
