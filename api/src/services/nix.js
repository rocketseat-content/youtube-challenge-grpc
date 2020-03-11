const load = require('../pb/loader');

const NixClient = load({
  serviceName: 'PurchaseService',
  address: 'localhost:3335',
  fileName: 'nix',
});

module.exports = NixClient;
