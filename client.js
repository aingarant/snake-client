const net = require("net");

const connect = function () {
  const client = net.createConnection({
    host: '192.168.50.101',
    port: 50541
  });

  client.setEncoding("utf8");

  client.on('connect', () => {
    console.log('we are good to go.. connected to server.');
    client.write("Name: AT");
  });

  client.on('data', (data) => {
    console.log(data.toString());
  });

  return client;
};

module.exports = { connect };