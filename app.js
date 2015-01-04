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

function loadInfo (file) {
	info = YAML.load(file)
	console.log("\n" + file +"\n")
	console.log(JSON.stringify(info,undefined,2));
	return info
}

app.get('/', function (req, res) {
  res.render('carousel.jade', { 
  	mainInfo : loadInfo ( __dirname + '/client/content/main.yml'),
  	flavorInfo : loadInfo ( __dirname + '/client/content/flavors.yml'),
  	pathToAssets : '/bower_components/bootstrap',
	pathToSelectedTemplateWithinBootstrap : '/stylesheets',
	pathToImages : '/content/img'
   }
  )
})

console.log("Listening on port 3000...")
app.listen(3000)