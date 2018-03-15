var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit : function(e){
    e.preventDefault();
    var location = this.refs.location.value;

    if(location.length>0){
      this.refs.location.value='';
      this.props.onSearch(location);
    }
    {something}
    {something}
    {something}
  }
});

module.exports = WeatherForm;
