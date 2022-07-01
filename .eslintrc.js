module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    semi: 0,
    quotes: 'off',
    'no-plusplus': 0,
    'no-lonely-if': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'import/extensions': [
      'error',
      'never',
      { '.ts': 'never', '.tsx': 'always' },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': 0,
    'no-promise-executor-return': 0,
    'implicit-arrow-linebreak': 0,
  },
}
