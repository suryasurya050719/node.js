const http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/pplain'});
res.write('wellcome my server');
res.end('thank you');

}).listen(9000);