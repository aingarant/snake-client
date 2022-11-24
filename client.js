const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('we are good to go.. connected to server.');
  });

  conn.write("Name: ATH");

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};

module.exports = { connect };