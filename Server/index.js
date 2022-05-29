
const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url=='/')
   res.end("hello new server! This is ishita's server");
   else if(req.url=="/about")
   res.end("Hey! Go back to home page!!");
   else if(req.url=="/data"){
      fs.readFile(`${__dirname}/dataB.json`,"utf-8",(err,data)=>{
          console.log(data);
          const orgi= JSON.parse(data);

        //   res.end(data);
        res.end(orgi.profession);
      });
   }
   else{
       res.writeHead(404,{"Content-type":"text/html"});
       res.end("<h1> Error 404! Page not found</h1>")
   }

});
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port 8000 request");
});