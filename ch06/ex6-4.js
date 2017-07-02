// 예제 6-4 _getForecastForCoords와 _getForecastForZip 함수 추가

const WEATHER_API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

//...

_getForecastForZip(zip) {
    // zip 코드를 저장한다
    AsyncStorage.setItem(STORAGE_KEY, zip)
	.then(() => console.log('Saved selection to disk: ' + zip))
	.catch((error) => console.log('AsyncStorage error: ' + error.message))
	.done();

    this._getForecast(
	`$(API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`);
}

_getForecastForCoords(lat, lon) {
    this._getForecast(
	`${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`);
}

_getForecast(url, cb) {
    fetch(url)
	.then((response) => response.json())
	.then((responseJSON) => {
	    this.setState({
		forecast: {
		    main: responseJSON.weather[0].main,
		    description: responseJSON.weather[0].description,
		    temp: responseJSON.main.temp
		}
	    });
	})
	.catch((error) => {
	    console.warn(error);
	});
}
