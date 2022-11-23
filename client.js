const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const client = net.createConnection({
    host: IP,
    port: PORT
  });

  client.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('we are good to go.. connected to server.');


    // setInterval(()=>{
    //   client.write("Move: right");
    // }, 50);

    // setTimeout(() => {
    //  client.write("Move: left");
    // }, 50);

    // setTimeout(() => {
    //   client.write("Move: left");
    // }, 100);

    // setTimeout(() => {
    //   client.write("Move: left");
    // }, 150);

  });

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};

module.exports = { connect };