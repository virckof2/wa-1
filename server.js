var express = require('express');

// Create our app
var app = express();

// This variable is for heroku (process.env.PORT)
// by default 3000 for local deployment
const PORT = process.env.PORT || 3000;

// This middleware redirects all https requests to http.
// We do this when we deploy on heroku because of the openweather api which
// only communicates through http
app.use(function (req, res, next){
    if(req.headers['x-forwarded-proto'] === 'https'){
      res.redirect('http://' + req.hostname + req.url);
    }
    else{
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port '+ PORT);
});
