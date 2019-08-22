
import weathermap from '../apis/weathermap';

const KEY_ID='a7164f520f0bf491999fc06a9c2a8cdb';

export const fetchWeather = (city,country) => async dispatch => {

	try{
		const response = await weathermap.get(`/data/2.5/forecast?q=${city},${country}&APPID=${KEY_ID}&units=metric`);
		
		dispatch({ type: 'FETCH-WEATHER', payload: response.data});
	
	} catch (error){

		dispatch({type:'ERROR', payload: ['err']});
	}
		 
}
//