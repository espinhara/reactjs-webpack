'use strict'
let React = require( 'react')
let ReactDOM = require( 'react-dom')
const Title = require( './app')


ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)