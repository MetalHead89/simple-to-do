import withNuxt from './.nuxt/eslint.config.mjs'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default withNuxt(
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/js/arrow-parens': ['error', 'as-needed'],
      '@stylistic/js/comma-dangle': ['error', 'never'],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/semi': ['error', 'never'],
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never'
      }],
      'vue/max-len': ['error', {
        code: 120,
        ignoreHTMLTextContents: true,
        ignoreStrings: true
      }],
      'vue/html-self-closing': ['error', {
        html: {
          normal: 'never',
          void: 'always'
        }
      }]
    }
  }
)
