var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=e482328e12cc6f5993b54d5c0388bfef&units=metric';

module.exports = {
  getTemp: function(location){
    var ecodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${ecodedLocation}`;

    // In this case we are nesting promises, whatever is returnes by 'then'
    // is a promise by itself. We implement inside the 'then' here a pretreat-
    // ment of the primise: a simple 'return' will be routed to the resolve
    // function of the caller and 'throw new Error' will be sent to the reject
    return axios.get(requestUrl).then(
      function(response){
        if(response.data.cod && response.data.message){
          throw new Error("Unable to fetch weather for that location.");
        }
        else{
          return response.data.main.temp;
        }
      },
      function(response){
        throw new Error("Unable to fetch weather for that location.");
      });
  }
}
