module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaVersion: '2021',
      },
    },
    {
      files: ['src/operations/*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      parserOptions: {
        schema: './schema.graphql',
      },
      plugins: ['@graphql-eslint'],
      rules: {
        'prettier/prettier': 'error',
        '@graphql-eslint/avoid-duplicate-fields': 'error',
        '@graphql-eslint/avoid-operation-name-prefix': 'error',
        '@graphql-eslint/avoid-typename-prefix': 'error',
        // '@graphql-eslint/description-style': 'error',
        '@graphql-eslint/executable-definitions': 'error',
        '@graphql-eslint/fields-on-correct-type': 'error',
        '@graphql-eslint/fragments-on-composite-type': 'error',
        // '@graphql-eslint/input-name': 'error',
        '@graphql-eslint/known-argument-names': 'error',
        '@graphql-eslint/known-directives': 'error',
        '@graphql-eslint/known-fragment-names': 'error',
        '@graphql-eslint/known-type-names': 'error',
        '@graphql-eslint/lone-anonymous-operation': 'error',
        '@graphql-eslint/lone-schema-definition': 'error',
        '@graphql-eslint/naming-convention': 'error',
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/no-case-insensitive-enum-values-duplicates': 'error',
        '@graphql-eslint/no-deprecated': 'error',
        '@graphql-eslint/no-fragment-cycles': 'error',
        '@graphql-eslint/no-hashtag-description': 'error',
        '@graphql-eslint/no-operation-name-suffix': 'error',
        '@graphql-eslint/no-undefined-variables': 'error',
        '@graphql-eslint/no-unreachable-types': 'error',
        // '@graphql-eslint/no-unused-fields': 'error',
        // '@graphql-eslint/no-unused-fragments': 'error',
        '@graphql-eslint/no-unused-variables': 'error',
        '@graphql-eslint/one-field-subscriptions': 'error',
        '@graphql-eslint/overlapping-fields-can-be-merged': 'error',
        '@graphql-eslint/possible-fragment-spread': 'error',
        '@graphql-eslint/possible-type-extension': 'error',
        '@graphql-eslint/provided-required-arguments': 'error',
        '@graphql-eslint/require-deprecation-reason': 'error',
        // '@graphql-eslint/require-description': 'error',
        // '@graphql-eslint/require-id-when-available': 'error',
        '@graphql-eslint/scalar-leafs': 'error',
        // '@graphql-eslint/selection-set-depth': 'error',
        // '@graphql-eslint/strict-id-in-types': 'error',
        '@graphql-eslint/unique-argument-names': 'error',
        '@graphql-eslint/unique-directive-names': 'error',
        '@graphql-eslint/unique-directive-names-per-location': 'error',
        '@graphql-eslint/unique-enum-value-names': 'error',
        '@graphql-eslint/unique-field-definition-names': 'error',
        '@graphql-eslint/unique-fragment-name': 'error',
        '@graphql-eslint/unique-input-field-names': 'error',
        // '@graphql-eslint/unique-operation-name': 'error',
        '@graphql-eslint/unique-operation-types': 'error',
        '@graphql-eslint/unique-type-names': 'error',
        '@graphql-eslint/unique-variable-names': 'error',
        '@graphql-eslint/value-literals-of-correct-type': 'error',
        '@graphql-eslint/variables-are-input-types': 'error',
        '@graphql-eslint/variables-in-allowed-position': 'error',
      },
    },
  ],
}
