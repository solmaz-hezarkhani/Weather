import React from 'react';
import SelectCity from './SelectCity';

import WeatherList from './WeatherList';

const App = () => {
	return (
			<div className="ui container"  >
				<h2 style={{marginTop:'20px', color:'#882151'}}>Current weather and forecasts in your city</h2>
				<div ><SelectCity /></div>
				<div><WeatherList /></div>
			</div>

		

	) 
};

export default App;