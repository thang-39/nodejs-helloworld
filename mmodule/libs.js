function showNotify() {
  console.log('Hello Module');
}

const hostname = "127.0.0.1";
const port = 3000;

// module.exports.show = showNotify;
// module.exports.hostname = hostname;
// module.exports.port = port;

module.exports = {
  show: function () {
    console.log('Hello Module 123');
  },
  hostname: hostname,
  port: port
}