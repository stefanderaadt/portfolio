'use strict';

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');
const isDev = process.env.NODE_ENV === 'development';

const webpackConfig = {
    entry: {
        index: helpers.root('src', 'index')
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue$: isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
            '@': helpers.root('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [helpers.root('src')]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [helpers.root('src')]
            },
            {
                test: /\.css$/,
                use: [isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader, { loader: 'css-loader', options: { sourceMap: isDev } }]
            },
            {
                test: /\.scss$/,
                use: [isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader, { loader: 'css-loader', options: { sourceMap: isDev } }, { loader: 'sass-loader', options: { sourceMap: isDev } }]
            },
            {
                test: /\.sass$/,
                use: [isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader, { loader: 'css-loader', options: { sourceMap: isDev } }, { loader: 'sass-loader', options: { sourceMap: isDev } }]
            },
            {
                test: /\.woff(2)?(\?[a-z0-9]+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(png|svg|jpg|gif|eot|woff|ttf)(\?[a-z0-9]+)?$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [new VueLoaderPlugin(), new HtmlPlugin({ template: `public/index.html`, chunksSortMode: 'dependency' }), new CopyWebpackPlugin([{ from: 'public' }])]
};

module.exports = webpackConfig;
