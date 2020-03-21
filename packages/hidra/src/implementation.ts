import { handleUnaryCall } from 'grpc';

import {
  IUser,
  IGetUserByIdRequest,
  IUserResponse,
  IRegisterUserRequest,
  ILoginUserRequest,
  ILoginResponse,
  IAuthenticationRequest,
} from '@protos';

import User from './models/User';

interface UserService {
  getUserById: handleUnaryCall<IGetUserByIdRequest, IUserResponse>;
  registerUser: handleUnaryCall<IRegisterUserRequest, IUserResponse>;
  loginUser: handleUnaryCall<ILoginUserRequest, ILoginResponse>;
  authenticate: handleUnaryCall<IAuthenticationRequest, IUserResponse>;
}

const implementation: UserService = {
  async getUserById(call, callback) {
    const { id } = call.request;

    const user = await User.findById(id).select('-password'); // Excluding user password

    if (!user) {
      return callback(null, { error: 'User not found' });
    }

    return callback(null, {
      user,
    });
  },

  async registerUser(call, callback) {
    const { email, username, password } = call.request.user as IUser;

    try {
      const user = await User.create({ email, username, password });

      return callback(null, { user });
    } catch (error) {
      return callback(null, {
        error:
          error.code === 11000
            ? 'User already exists (name or e-mail)'
            : 'Unknown error',
      });
    }
  },

  async loginUser(call, callback) {
    const { email, password } = call.request.user as IUser;

    const user = await User.findOne({ email });

    if (!user) {
      return callback(null, { error: 'User not found' });
    }

    if (!(await user.compareHash(password as string))) {
      return callback(null, { error: 'Invalid password' });
    }

    const token = User.generateToken(user.id);

    return callback(null, {
      token,
    });
  },

  async authenticate(call, callback) {
    const { token: fullToken } = call.request;

    if (!fullToken) {
      return callback(null, { error: 'No token provided' });
    }

    const parts = fullToken.split(' ');

    if (parts.length !== 2) {
      return callback(null, { error: 'Token error' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return callback(null, { error: 'Malformatted token' });
    }

    try {
      const decoded = await User.verifyToken(token);

      const user = await User.findById(decoded.id);

      return callback(null, { user });
    } catch (err) {
      return callback(null, { error: 'Invalid token' });
    }
  },
};

export default implementation;
