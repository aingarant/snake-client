const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.50.101',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // return conn;

  conn.on('data', (data) => {
    console.log(data.toString());
  });


};



console.log("Connecting ...");
connect();

