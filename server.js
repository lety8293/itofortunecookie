//cargando el modulo http
var http = require('http');
//cargando la libreria de colores
var colors = require('colors');
//generando un tema
colors.setTheme({
silly:'rainbow',
input:'grey',
verbose:'cyan',
prompt:'grey',
info:'green',
data:'grey',
help:'cyan',
warn:['yellow','bWhite'],


});
//OBTENIENDO CONCIGURACIONES
//var modulo = require('./config/config');//cargar el modulo de numero poner ruta de paquete
//console.log(`> contenido del modulo=${modulo}`);
var config = require('./config/config');
var IP=config.IP;
var PORT =config.PORT;

//creando el server

var server = http.createServer(function(req,res){
    res.writeHead(
        200,
        {
            'content-Type':'text/plain',
            'Server':'Buho@0.0.0'
        }
    );
res.write('hola desde el server...');
res.end();
});
//poniendo a escuchar al server
server.listen(PORT,IP,function(){
    console.log(">server escuchando en ".info +
    `htt://${IP}:${PORT}/...` .info);
});
