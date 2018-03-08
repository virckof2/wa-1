var React = require('react');
var ReactDOM = require('react-dom');
// Using destructuring ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var Main = require('Main');
var Weather =require('Weather');
var About =require('About');
var Examples =require('Examples');

// Loading foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

// Loading styles
require('style!css!sass!CustomStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Weather}/>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

// app.jsx ** entry-point for webpack & route definition
//  -> Main  ** Main div container
//     -> Nav   ** Contains links to all children pages
//     -> children
//        -> Weather  ** Container, state management, and API
//        -> WeatherForm  ** Presentation, Uses handleSearch() to call
//                           the API and update the state in Weather
//        -> WeatherMessage  ** Presentation Uses props passed by Weather
//                           to display the result of the serach
//        -> OpenWeatherMap  ** Used inside of handleSearch to obtain
//                           temperature data via API
