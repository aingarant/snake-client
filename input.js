const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (input) {
  if (input === '\u0003') process.exit();
  if (input === 'u') connect.write("Move: up");
  if (input === 'd') connect.write("Move: down");
  if (input === 'l') connect.write("Move: left");
  if (input === 'r') connect.write("Move: right");
};

module.exports = setupInput;