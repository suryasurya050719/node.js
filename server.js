const http =require('http');
const port = 3000;
const myServer =(req,res)=>{

    res.write('hello surya')
    res.end('wellcome server ')
}

const server = http.createServer(myServer)

server.listen =(port,(err)=>{
    if(err);{
    return( console.log('somthing happen'))
    }
    console.log('server is listening on ',$,{port})
}
)