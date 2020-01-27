const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let direccion = argv.direccion;

const getInfo = async (direccion)=>{
    try {
        const data = await lugar.getLugarLongitudLatitud(direccion);
        const temperatura = await clima.getClima(data.lat,data.lon);
        return `La Temperatura de ${data.lugar} es ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion};`
    }
}

getInfo(direccion).then(resp => { console.log(resp); });


// lugar: 'Lima, Peru', lat: '-5.710000', lon: '-79.279999'