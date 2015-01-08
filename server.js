var http = require("http");
var fs=require("fs");

var server = http.createServer(function(request,response){
  path = request.url;
  console.log(request.url);

  if(path === "/" ){
    fs.readFile("aboutme.html",function(err,data){
      response.end(data.toString());
    });
}
  else if (path === "/favicon.ico"){
    fs.readFile("favicon.ico",function(err,data){
      response.end(data);
    });
  }
  else if (path === "/aboutme.html"){
    fs.readFile("aboutme.html",function(err,data){
      response.end(data.toString());
    });
    }

  else if(path === "/contact.html"){
    fs.readFile("contact.html",function(err,data){
      var text = data.toString();
      response.end(text);
    });
  }
  else if(path === "/skills.html"){
    fs.readFile("skills.html",function(err,data){
      var text = data.toString();
      response.end(text);
    });
  }
  else if(path === "/work.html"){
      fs.readFile("work.html",function(err,data){
        var text = data.toString();
        response.end(text);
      });
    }

    else if(path === "/canvas1.html"){
      fs.readFile("canvas1.html",function(err,data){
        var text = data.toString();
        response.end(text);
      });
    }
    else if(path === "/calculator.html"){
      fs.readFile("calculator.html",function(err,data){
        var text = data.toString();
        response.end(text);
      });
    }

    else if(path === "/chat_app/chat.html"){
      fs.readFile("chat.html",function(err,data){
        var text = data.toString();
        response.end(text);
      });
    }

    // else if(path === "/chat_app/chat_server.js"){
    //   fs.readFile("chat_server.js",function(err,data){
    //     var text = data.toString();
    //     response.end(data);
    //   });
    // }

    else if(path === "/chat_app/user.js"){
      fs.readFile("user.js",function(err,data){
        var text = data.toString();
        response.end(text);
      });
    }
});
server.listen(8080);
