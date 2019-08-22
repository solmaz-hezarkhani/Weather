import React from 'react';
import {connect} from 'react-redux';
//import moment from 'moment' ;

class WeatherList extends React.Component {
	
 	renderCurrentWeather () {

 		const {weathers} = this.props;

 		if (!weathers.list){
 	
 			return null;
 		}

 		 return (

		 	<div className="ui segment" style={{marginTop:'20px' , width:'400px'}}>
		 		<h2>Weather in {weathers.city.name},{weathers.city.country}</h2>
		 		<strong>Current tempeture: {weathers.list[0].main.temp}<span> &#8451;</span></strong><br />
		 		<strong>Min: {weathers.list[0].main.temp_min}<span> &#8451;</span></strong><br />
		 		<strong>Max: {weathers.list[0].main.temp_max}<span> &#8451;</span></strong><br />
		 		<strong>{weathers.list[0].weather[0].description}</strong><br />
		 		<img 
		 			src={`http://openweathermap.org/img/w/${weathers.list[0].weather[0].icon}.png`} 
		 			alt={weathers.list[0].weather[0].description}
		 		/>
		 	</div>	
		 );
	}

 	getDay = (dt) => {
		var moment = require('moment');
		return moment(dt).format('dddd')
	}
	removeTime = (dt) => {
		var moment = require('moment');
		return moment(dt).format('h:mm:ss a')
	}

	renderWeatherList () {
		if (!this.props.weathers.list){
 	
 			return null;
 		}

 		return  this.props.weathers.list.filter(weather => {return weather.dt_txt.substr(11,8)==='18:00:00'}).map(day=>{
 			return (
		 			
		 			<div className="ui huge horizontal list" key={day.dt}>
		 				<img 
					    		className="ui image" 
					    		src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
					    		alt={day.weather[0].description} 
					    	/>
		 				<div className="item" style={{width:'200px'}}>
					    	<div className="content">
					      		<div className="header">{this.getDay(day.dt_txt)}</div>
					      		
								Max:  {day.main.temp_max}<span> &#8451;</span><br />
								Min:  {day.main.temp_min}<span> &#8451;</span><br />
								{day.weather[0].description}<br />
					    	</div>
						</div>
					</div>
		 		)

 		})
 	}
		
	render(){
		console.log(this.props.weathers);
		if (this.props.weathers[0]==='err'){

			return <div className="ui red message" 
						style={{marginTop:'20px', width:'300px'}}>
						<strong>City or Country not found</strong>
					</div>
		}
		return (
			<div>
				{this.renderCurrentWeather()}
				{this.renderWeatherList()}
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		weathers: state.weather,
		city : state.city,
		country : state.country,
	};

};

export default connect(mapStateToProps)(WeatherList);