var React = require('react');


var WeatherMessage = ({temp, location}) => {

    return (    	
    	<h3 className="text-center">Temperature is <b>{temp}</b> centigrade in <b>{location}</b></h3>
    )
};

module.exports = WeatherMessage;
