import { UserService } from 'protos';

import loadService from '../serviceLoader';

export default loadService<UserService>({
  serviceName: 'UserService',
  address: 'localhost:3334',
  fileName: 'hidra',
});
