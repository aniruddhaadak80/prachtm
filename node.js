var http = require("http");
http.createServer(function(req,res){
res.write("I love you");
res.end();
}).listen(8080);