// bring in the Express module
var express = require('express');
// create a new instance of express
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public directory"
app.use(express.static('public'));

// ** Routes ** //
// Set up the home page
app.get('/',function(request,response){
	// respond with my quote
	var data ={
    title: "Welcome to Site.",
    content: "My art work site. "
  };
// Render the template using this data
res.render("page.handlebars", data);
});

app.get("/about",function(req,res){
	// set up the content
	var data = {
		 pageTitle: "To check more of my art",
		 pageContent: "Please check my portfolio at behance.net/blackmeteor"
	};
	// render the template
	res.render("page.handlebars", data);
});

app.get("/information",function(req,res){
	var data = {
		 pageTitle: "another page of my art",
		 pageContent: "www.facebook.com/BlackMeteorDesign"
	};
	res.render("page.handlebars",data);
});

// 404 Not found catch-all handler
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 server error handler
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

// Start the server. Listen for traffic on port 3000
app.listen(3000, function () {
	// Print out a message to the console
  	console.log('Listening on port 3000!');
});
