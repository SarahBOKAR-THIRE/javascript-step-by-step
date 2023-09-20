'use strict'

import { resolve } from 'path'
// eslint-disable-next-line no-undef
import autoprefixer from 'autoprefixer'
// eslint-disable-next-line no-undef
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const mode = 'development'
export const entry = './src/index.js'
export const output = {
  filename: 'main.js',
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, 'dist')
}
export const devServer = {
  // eslint-disable-next-line no-undef
  static: resolve(__dirname, 'dist'),
  port: 8080,
  hot: true
}
export const plugins = [
  new HtmlWebpackPlugin({ template: './index.html' })
]
export const module = {
  rules: [
    {
      test: /\.(scss)$/,
      use: [
        {
          // Adds CSS to the DOM by injecting a `<style>` tag
          loader: 'style-loader'
        },
        {
          // Interprets `@import` and `url()` like `import/require()` and will resolve them
          loader: 'css-loader'
        },
        {
          // Loader for webpack to process CSS with PostCSS
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                autoprefixer
              ]
            }
          }
        },
        {
          // Loads a SASS/SCSS file and compiles it to CSS
          loader: 'sass-loader'
        }
      ]
    }
  ]
}