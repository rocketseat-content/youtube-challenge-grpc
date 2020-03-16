import { PurchaseService } from 'protos';

import loadService from '../serviceLoader';

export default loadService<PurchaseService>({
  serviceName: 'PurchaseService',
  address: 'localhost:3335',
  fileName: 'nix',
});
