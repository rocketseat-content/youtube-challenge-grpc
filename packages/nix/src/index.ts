import grpc from 'grpc';

import './database';
import implementation from './implementation';
import { loadProto } from '@services/protos';

const proto = loadProto('nix');
const server = new grpc.Server();

server.addService((proto['PurchaseService'] as any).service, implementation);
server.bind('0.0.0.0:3335', grpc.ServerCredentials.createInsecure());
server.start();
