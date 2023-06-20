const url = 'https://covid-193.p.rapidapi.com/countries';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};
const apiFetch = async() => {
    try {
    const response = await fetch(url, options);
    const result = await response.text();
        
    } catch (error) {
        
    }
}

module.exports= { apiFetch }