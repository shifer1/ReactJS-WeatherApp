var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			location: 'Tehran',
			temp: 10,
			loader: false
		}		
	},
	handleSearch: function (location) {
		var that = this;

		this.setState({loader:true});
		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp:temp,
				loader: false
			});
		}, function (errorMessage) {
			that.setState({loader:false});
			alert(errorMessage);
		});
	},
  render: function(){
  	//ES6 destructuring
  	var {loader, temp, location} = this.state;

  	 function renderMessage(){

  		if(loader){
  			return <img src={'asset/loader-orange.gif'} alt="" className="img-responsive " style={{margin:'0 auto'}}/>;
  		} else if (temp && location) {
			return <WeatherMessage temp={temp} location={location} />;
  		}
  	}

    return (    	
    	<div>
    	<WeatherForm onSearch={this.handleSearch}/>
    	{renderMessage()}    
    	</div>
    )
  }
});

module.exports = Weather;
