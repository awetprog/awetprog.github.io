setTimeout(()=> console.log('timeout'),0);
setImmediate(()=>console.log('immediate'));

var http= require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello from me");
    res.end();

}).listen(1010);
