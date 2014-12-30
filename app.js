/*
 * Module dependencies
 */
var express = require('express')
  
var app = express()

app.set('views', __dirname + '/client/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(express.static(__dirname + '/client'))

app.get('/', function (req, res) {
  res.render('carousel',
  { pathToAssets : '/bower_components/bootstrap',
  pathToSelectedTemplateWithinBootstrap : '/stylesheets',
  pathToImages : '/img'
   }
  )
})

console.log("Listening on port 3000...")
app.listen(3000)