var wss = require("ws").Server;
var server = new wss({port:3000});
var clients = [];
var history = [];
server.on("connection", function(ws){
  if (history.length > 0) {
    history.forEach(function(msgz) {
      ws.send(msgz);
    })
  }
  clients.push(ws);
  clients.forEach(function(client){
    var servermsg = {name:"Server", newMessage:" Client connected!", color: "black"};
    var J_servermsg= JSON.stringify(servermsg);
    client.send(J_servermsg);

  })
    console.log(clients.length +" clients are in the room");

    ws.on("close", function(){
      var x = clients.indexOf(ws);
      clients.splice(x, 1);

      clients.forEach(function(client){
      var servermsg1 = {name:"Server", newMessage:"Someone just left!", color: "black"};
      var J_servermsg1= JSON.stringify(servermsg1);
      client.send(J_servermsg1);
   })

 });

    ws.on("message", function(msg){
      history.push(msg);
      console.log(msg);
      for(i=0; i<clients.length; i++){
        clients[i].send(msg);
      }

        var badword=JSON.parse(msg);
        var bad= badword.newMessage.trim();
        var badarry=bad.split(" ");
        badarry.forEach(function(word){
        if(word === "fuck" || word === "ass" || word === "shit" || word === "fucking"){
        var serverword = {name:"server", newMessage:"Watch your language, smartass!", color: "black"};
        var J_serverword= JSON.stringify(serverword);
        ws.send(J_serverword);
        ws.close();
        console.log("client typed cursing word") // show in the terminal console
      }
     })

    })
    });
