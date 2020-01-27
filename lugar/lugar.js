const axios = require('axios');

const getLugarLongitudLatitud = async (direccion)=>{
    const encodeURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        timeout: 1000,
        headers: {'X-RapidAPI-Key': '84df9ad463msh0067b43f2d63205p12f79fjsnd94c3060a080'}
      });
    
    const respuesta = await instance.get();

    if(respuesta.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = respuesta.data.Results[0];
    const lugar = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        lugar,lat,lon
    }
}

module.exports = {
    getLugarLongitudLatitud
}