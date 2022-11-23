const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.50.101',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('we are good to go.. connected to server.');
  });

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};

module.exports = { connect };