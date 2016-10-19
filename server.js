//cargando el modulo http
var http = require('http');
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
server.listen(3000,'127.0.0.1', function(){
    console.log(">server escuchando en "+ 
    "htt://127.0.0.1:3000/...");
});