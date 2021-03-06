'use strict';

const path = require('path')

module.exports={
    entry: path.join(__dirname, 'src', 'index'),
    mode: 'production',
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/static/'
    },
}