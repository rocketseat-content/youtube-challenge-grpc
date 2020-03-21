import grpc from 'grpc';
import { promisify } from 'util';

import { loadProto } from '@services/protos';

interface IGRPCMethod {
  (): void;
  originalName: string;
}

interface ILoadServiceDTO {
  serviceName: string;
  fileName: string;
  address: string;
  credentials?: grpc.ChannelCredentials;
}

export default function loadService<ServiceType extends protobuf.rpc.Service>({
  serviceName,
  fileName,
  address,
  credentials = grpc.credentials.createInsecure(),
}: ILoadServiceDTO) {
  const proto = loadProto(fileName);

  const client = new (proto[serviceName] as any)(address, credentials);

  // Promisify all client methods
  (Object.entries(client.__proto__) as [[string, IGRPCMethod]]).map(
    ([prop, value]) => {
      if (value.originalName !== undefined) {
        client[prop] = promisify(value);
      }
    }
  );

  return client as ServiceType;
}
