var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

// Container component, manages the state of WeatherForm and WeatherMessage
var Weather = React.createClass({
  // Creates defeault values for the state variables
  getInitialState : function(){
    return {
        isLoading : false,
        errorMessage: undefined,
        location: undefined,
        temp: undefined
    }
  },

  // It is called when presentational components want to update the state
  // see below <WeatherForm onSearch={this.handleSearch}/>
  handleSearch : function(location){

    // We need to keep the 'this' variable in 'that' because it is out
    // of scope the promise then() function.
    var that = this;

    this.setState({
      isLoading:true,
      errorMessage: undefined
    });

    // Callls the API given a location and updates the state
    openWeatherMap.getTemp(location).then(
        // Resolve case: change the state
        function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        },
        // Reject case
        function(e){
          that.setState({
            isLoading: false,
            errorMessage: e.message
          });
        }
    );
  },

  // This helps us to get parameters from the URI so the
  // component can be render with them.
  // Used by (implicitely) by the search bar in Nav with redirections
  componentDidMount: function (){
    var location = this.props.location.query.location;

    if(location && location.length>0){
      this.handleSearch(location);
      // Clears the URI from parameters
      window.location.hash ="#/";
    }
  },

  // This helps us to get parameters from the URI so the
  // component can be render with them. This function deals with the case
  // when the component is already rendered and the URI query is modified.
  componentWillReceiveProps: function (newProps){
    var location = newProps.location.query.location;

    if(location && location.length>0){
      this.handleSearch(location);
      // Clears the URI from parameters
      window.location.hash ="#/";
    }
  },

  // When the state variables change react will automatically render()
  // DOM elements that deppend on them, in this case, temp and location
  // are passed into WeatherMessage using JSX
  render: function(){
    var {isLoading, temp, location, errorMessage} = this.state;

    // This function selectively renders a component depending on the
    // state of the API call
    function renderMessage(){
      if(isLoading){
        return <h2 className="text-center">Fetching weather...</h2>
      }
      else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    // If there is an error after the call to open weather handleSearch
    // Will change the state of error message and the modal will open
    function renderError(){
      if(typeof errorMessage === 'string'){
        return <ErrorModal message={errorMessage}/>;
      }
    }

    return (
      <div>
        <h2 className="text-center page-title">Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
