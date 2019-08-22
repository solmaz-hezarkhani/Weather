import React from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../action';
import CountryList from './CountryList';

class SelectCity extends React.Component {

    state = {city:'', country:''};

	onFormSubmit = (event) =>{

		event.preventDefault();
		//this.setState({city:'', country:''});
	}

	onCityInputChange = (event) =>{
		this.setState({city: event.target.value});	
	}

	onSelect = (selectCountry) =>{
		this.setState({country:selectCountry});
	}
    
	renderList(){
	;
		return (

				<form className="ui form" onSubmit={this.onFormSubmit} >
				 	<div className="fields">
				    	<div className="field">
				      		<label>City</label>
				      		<input 
				      			value={this.state.city}
				      			type="text" 
				      			onChange={this.onCityInputChange}
				      		 />
				    	</div>
					    <div className="field">
					      	<label>Country</label>
					      	<CountryList onSelect={this.onSelect} />
					    </div>
					</div>

					<button 
						className="ui button" 
						style={{backgroundColor:'#882151', color:"#FFFFFF"}} 
						onClick={() => this.props.fetchWeather(this.state.city,this.state.country)}>
					  	Get Weather
					</button>
				</form>
		);
	}
	
	render(){
		return <div>{this.renderList()}</div>
	}

}
const mapStateToProps = (state) =>{
	return {
		weathers: state.weather,
	};
}
export default connect(mapStateToProps,{fetchWeather})(SelectCity);