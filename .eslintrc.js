module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*"],
  plugins: [`prettier`, `import`],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: `module`,
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
    rules: {
      'arrow-body-style': `off`,
      'object-shorthand': [`error`, `properties`],
      'prefer-arrow-callback': [
        `error`,
        { allowNamedFunctions: true, allowUnboundThis: true },
      ],
      'prefer-destructuring': `off`, // I like it, but not that much...
      'sort-imports': `off`,
      'new-cap': `off`,
      'no-invalid-this': `off`,
      'no-class-assign': `error`,
      'no-duplicate-imports': `error`,
      'no-restricted-exports': `off`,
      'no-restricted-imports': `off`,
      'no-useless-computed-key': `error`,
      'no-useless-constructor': `error`,
      'no-useless-rename': `error`,
      'no-var': `error`,
      'prefer-const': `error`,
      'prefer-numeric-literals': `error`,
      'prefer-rest-params': `error`,
      'prefer-spread': `error`,
      'prefer-template': `error`,
      'require-yield': `error`,
      'symbol-description': `error`,
      'constructor-super': `error`,
      'no-const-assign': `error`,
      'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
      'no-dupe-class-members': `error`,
      'no-new-symbol': `error`,
      'no-this-before-super': `error`,
      'no-unsafe-optional-chaining': `error`,
      'no-unused-expressions': `off`,
      'no-unused-vars': [
        `error`,
        {
          varsIgnorePattern: `^_`,
          argsIgnorePattern: `^_`,
          ignoreRestSiblings: true,
        },
      ],
      'valid-typeof': `off`,
      'require-jsdoc': `off`,
      'valid-jsdoc': `off`,
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'sibling',
            'parent',
            'index',
            'object',
          ],
          'newlines-between': 'always-and-inside-groups',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          bracketSpacing: true,
          embeddedLanguageFormatting: 'auto',
          endOfLine: 'lf',
          htmlWhitespaceSensitivity: 'css',
          insertPragma: false,
          jsxBracketSameLine: false,
          jsxSingleQuote: false,
          printWidth: 80,
          proseWrap: 'always',
          quoteProps: 'as-needed',
          requirePragma: false,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          useTabs: false,
        },
      ],
  },
  overrides: [
    {
      files: [`**/*.ts`],
      parser: `@typescript-eslint/parser`,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: `module`,
      },
      plugins: [`@typescript-eslint/eslint-plugin`],
      extends: [`plugin:@angular-eslint/recommended`,
      `plugin:@angular-eslint/template/process-inline-templates`,
      `eslint:recommended`,
      `plugin:@typescript-eslint/recommended`,
      `plugin:@typescript-eslint/recommended-requiring-type-checking`,
      `plugin:prettier/recommended`],
      rules: {
        '@typescript-eslint/no-invalid-this': `error`,
        'no-var': `error`,
        'prefer-const': `error`,
        'prefer-rest-params': `error`,
        'prefer-spread': `error`,
        'no-duplicate-imports': `off`,
        '@typescript-eslint/no-duplicate-imports': `error`,
        'no-useless-constructor': `off`,
        '@typescript-eslint/no-useless-constructor': `error`,
        'constructor-super': `off`,
        'no-const-assign': `off`,
        'no-new-symbol': `off`,
        'no-this-before-super': `off`,
        'no-dupe-class-members': `off`,
        '@typescript-eslint/no-dupe-class-members': `off`,
        '@typescript-eslint/no-unused-expressions': `error`,
        '@typescript-eslint/no-unused-vars': [
          `error`,
          {
            varsIgnorePattern: `^_`,
            argsIgnorePattern: `^_`,
            ignoreRestSiblings: true,
          },
        ],
        '@angular-eslint/component-selector': [
          `error`,
          {
            type: `element`,
            prefix: `app`,
            style: `kebab-case`
          }
        ],
        "@angular-eslint/directive-selector": [
          `error`,
          {
            type: `attribute`,
            prefix: `app`,
            style: `camelCase`
          }
        ],
        '@typescript-eslint/explicit-module-boundary-types': [
          `warn`,
          {
            allowArgumentsExplicitlyTypedAsAny: true,
          },
        ],
        '@typescript-eslint/no-empty-function': `off`,
        '@typescript-eslint/no-explicit-any': `off`,
        '@typescript-eslint/ban-types': [
          `error`,
          {
            extendDefaults: true,
            types: {
              '{}': {
                fixWith: `Record<string, unknown>`,
              },
              object: {
                fixWith: `Record<string, unknown>`,
              },
            },
          },
        ],
        camelcase: `off`,
        '@typescript-eslint/naming-convention': [
          `error`,
          {
            selector: `default`,
            format: [`camelCase`],
          },
          {
            selector: `variable`,
            format: [`camelCase`, `UPPER_CASE`, `PascalCase`],
            leadingUnderscore: `allowSingleOrDouble`,
            trailingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `function`,
            format: [`camelCase`, `PascalCase`],
            leadingUnderscore: `allow`,
          },
          {
            selector: `parameter`,
            format: [`camelCase`, `PascalCase`, `snake_case`],
            leadingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `enumMember`,
            format: [`camelCase`, `UPPER_CASE`, `PascalCase`],
          },
          {
            selector: `typeLike`,
            format: [`PascalCase`],
          },
          {
            selector: `typeAlias`,
            format: [`camelCase`, `PascalCase`],
          },
          {
            selector: `property`,
            format: [`PascalCase`, `UPPER_CASE`, `camelCase`, `snake_case`],
            leadingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `objectLiteralProperty`,
            format: [`PascalCase`, `UPPER_CASE`, `camelCase`, `snake_case`],
            leadingUnderscore: `allowSingleOrDouble`,
            trailingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `enum`,
            format: [`PascalCase`, `UPPER_CASE`],
          },
          {
            selector: `method`,
            format: [`PascalCase`, `camelCase`],
            leadingUnderscore: `allowSingleOrDouble`,
          },
        ]
      }
    },

    {
      files: ["*.html"],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
      ],
      "rules": {    "@angular-eslint/template/conditional-complexity": [
        "error", { "maxComplexity": 4 }],
      "@angular-eslint/template/cyclomatic-complexity": [
        "error", { "maxComplexity": 5 }],
      "@angular-eslint/template/no-duplicate-attributes": "error",
      "@angular-eslint/template/use-track-by-function": "error"}
    },
    {
      "files": ["*.html"],
      "excludedFiles": ["*inline-template-*.component.html"],
      "extends": ["plugin:prettier/recommended"],
      "rules": {
        "prettier/prettier": ["error", { "parser": "angular" }]
      }
    }
  ]
}

