const apiService = ()=>{
    return fetch(`https://api.meteo.lt/v1/places/kaunas/forecasts/long-term`)
    .then(response => response.json())
}

export default apiService