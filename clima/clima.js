const axios = require('axios');

const getClima = async(lat,lon)=>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=01c0d668e9e177d98d81be10aa2ee4b6&lang=es&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}