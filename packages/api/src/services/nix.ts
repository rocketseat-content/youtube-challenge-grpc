import { PurchaseService } from '@protos';

import loadService from '../serviceLoader';

export default loadService<PurchaseService>({
  serviceName: 'PurchaseService',
  address: process.env.NIX_ADDRESS || 'localhost:3335',
  fileName: 'nix',
});
