const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const protoConfig = require('../config/proto');

const hidraDef = protoLoader.loadSync(
  path.resolve(__dirname, '..', 'pb', 'hidra.proto'),
  protoConfig
);

const hidra = grpc.loadPackageDefinition(hidraDef);

const hidraClient = new hidra.UserService(
  'localhost:3334',
  grpc.credentials.createInsecure()
);

module.exports = hidraClient;
