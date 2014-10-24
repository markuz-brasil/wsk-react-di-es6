"use strict"
import { main } from 'main'

import { React, less } from 'runtime'
import { readFileSync } from 'fs'

console.log(readFileSync('./LICENSE', 'utf8'))

var t0 = new Date

React.initializeTouchEvents(true)
React.renderComponent(main(), document.getElementById('react-app'));

var t1 = new Date
console.log(`*** first paint took: (${t1 - t0}ms) ***`)