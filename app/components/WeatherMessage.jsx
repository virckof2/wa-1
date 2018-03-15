var React = require('react');

// Calssic react component
//-----------------------------------------
var WeatherMessage = React.createClass({
  render: function(){
    return (
      <div>
         <h2 className="text-center">It's {this.props.temp}C in {this.props.location}.</h2>
      </div>
    );
  }
});

var WeatherMessage = React.createClass({
  render: function(){
    return (
      <div>
         <h2 className="text-center">It's {this.props.temp}C in {this.props.location}.</h2>
      </div>
    );
  }
});


Using stateless functional components but now with arrow functions
-----------------------------------------
var WeatherMessage = (props) =>{
  return(
    <div>
      <h2>It's {props.temp}C in {props.location}</h2>
    </div>
  );
};


Using stateless functional components but now with arrow functions and
accesing the props variable with ES6 destructuring
-----------------------------------------
var WeatherMessage = ({temp, location}) =>{
  return(
    <div>
      <h2 className="text-center">It's {temp}C in {location}.</h2>
    </div>
  );
};

module.exports = WeatherMessage;
