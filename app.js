/*
 * Module dependencies
 */
var express = require('express'),
	YAML = require('yamljs')
  
var app = express()
var mainInfo = loadInfo ( __dirname + '/client/content/main.yml');
var flavorInfo = loadInfo ( __dirname + '/client/content/flavors.yml');
var pressInfo = loadInfo ( __dirname + '/client/content/press.yml');

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

var render = function (req, res, template) {
  	res.render(template, { 
  	_mainInfo : mainInfo,
  	_flavorInfo : flavorInfo,
  	_pressInfo : pressInfo,
  	pathToAssets : '/bower_components/bootstrap',
	pathToSelectedTemplateWithinBootstrap : '/stylesheets',
	pathToImages : '/content/img'
	})
}

app.get('/', function (req, res) { 
	render (req, res, "index.jade")
})

app.get('/about', function (req, res) { 
	render (req, res, "about.jade")
})

app.get('/flavors', function (req, res) { 
	render (req, res, "flavors.jade")
})

app.get('/order', function (req, res) { 
	render (req, res, "order.jade")
})

app.get('/events', function (req, res) { 
	render (req, res, "events.jade")
})

app.get('/press', function (req, res) { 
	render (req, res, "press.jade")
})


console.log("Listening on port 3000...")
app.listen(3000)