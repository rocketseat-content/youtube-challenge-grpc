import grpc from 'grpc';

import './database';
import implementation from './implementation';
import loadProto from 'protos/dist/loader';

const proto = loadProto('nix');
const server = new grpc.Server();

server.addService(proto['PurchaseService'].service, implementation);
server.bind('0.0.0.0:3335', grpc.ServerCredentials.createInsecure());
server.start();
