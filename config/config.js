//exportar por elemento
//exports.numero0=10;
//exports.numero1=11;// se puede ver desde otro archivo
//exportar por bloque
//module.exports=10;

//exportar objeto de configuracion 
//cargar modulo de turas

module.exports= {
    'IP': process.env.IP || '127.0.0.1',
    'PORT':process.env.PORT || 3000,
    'STATIC_PATH' : './static'
};