import { jsdom } from 'jsdom'

global.document = jsdom('<!doctype html><html><body><div id="app"></div></body></html>', {
  url: 'http://localhost'
})
global.window = document.defaultView
global.window.Reflect = require('core-js/es7/reflect')
global.navigator = global.window.navigator
