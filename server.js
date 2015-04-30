var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response) {
    console.log(request.url);
    if (request.url === "/") {
        fs.readFile("me.html", function(err, data) {
            response.end(data.toString());
        });
    } 
        else if(request.url === "/canvas1.html"){
      fs.readFile("canvas1.html",function(err,data){
        response.end(data.toString());
      });
    }
    else if(request.url === "/calculator.html"){
      fs.readFile("calculator.html",function(err,data){
        response.end(data.toString());
      });
    }

    else if(request.url === "/chat_app/chat.html"){
      fs.readFile("chat.html",function(err,data){
        response.end(data.toString());
      });
    }
    else {
        fs.readFile(request.url.slice(1), function(err, data) {
            response.end(data);
        });
    }
});
server.listen(3000);
console.log("Listening on Port 3000");



//   else if (path === "/favicon.ico"){
//     fs.readFile("favicon.ico",function(err,data){
//       response.end(data);
//     });
//   }
