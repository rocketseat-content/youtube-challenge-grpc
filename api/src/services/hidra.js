const load = require('../pb/loader');

const HidraClient = load({
  serviceName: 'UserService',
  address: 'localhost:3334',
  fileName: 'hidra',
});

module.exports = HidraClient;
