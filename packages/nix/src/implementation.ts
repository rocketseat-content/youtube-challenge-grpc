import { handleUnaryCall } from 'grpc';
import { isValidObjectId } from 'mongoose';

import {
  IPurchase,
  IGetPurchaseByIdRequest,
  IPurchaseResponse,
  IListPurchasesRequest,
  IListPurchasesResponse,
  IHandlePurchaseRequest,
} from '@protos';

import Purchase from './models/Purchase';

interface PurchaseService {
  getPurchaseById: handleUnaryCall<IGetPurchaseByIdRequest, IPurchaseResponse>;
  listPurchases: handleUnaryCall<IListPurchasesRequest, IListPurchasesResponse>;
  handlePurchase: handleUnaryCall<IHandlePurchaseRequest, IPurchaseResponse>;
}

const implementation: PurchaseService = {
  async getPurchaseById(call, callback) {
    const { id } = call.request;

    if (!isValidObjectId(id))
      return callback(null, { error: 'Malformatted Object ID' });

    const purchase = await Purchase.findById(id);

    if (!purchase)
      return callback(null, {
        error: 'Purchase not found',
      });

    return callback(null, { purchase });
  },
  async listPurchases(call, callback) {
    const { userId } = call.request;

    if (!userId)
      return callback(null, {
        error: 'User ID not provided',
      });

    const purchases = await Purchase.find({ userId });

    if (!purchases)
      return callback(null, {
        error: 'Unknown error',
      });

    return callback(null, { purchases });
  },
  async handlePurchase(call, callback) {
    const { title, userId, value } = call.request.purchase as IPurchase;

    const purchase = await Purchase.create({ title, value, userId });

    return callback(null, {
      purchase,
    });
  },
};

export default implementation;
