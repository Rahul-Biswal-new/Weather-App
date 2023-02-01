const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2541a96c6dmsh2f1a4b585ae54e1p17a4c9jsn618affeb9d29',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

