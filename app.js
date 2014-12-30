/*
 * Module dependencies
 */
var express = require('express'),
	YAML = require('yamljs')
  
var app = express()

app.set('views', __dirname + '/client/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(express.static(__dirname + '/client'))

function loadInfo (dir) {
	file = dir + ("/main.yml")
	info = YAML.load(file)
	console.log("\n" + dir +"\n")
	console.log(JSON.stringify(info,undefined,2));
	return info
}

app.get('/', function (req, res) {
  res.render('carousel.jade', { 
  	info : loadInfo ( __dirname + '/client/content'),
  	pathToAssets : '/bower_components/bootstrap',
	pathToSelectedTemplateWithinBootstrap : '/stylesheets',
	pathToImages : '/content/img'
   }
  )
})

console.log("Listening on port 3000...")
app.listen(3000)