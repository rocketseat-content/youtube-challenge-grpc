const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const User = require('./models/User');

module.exports = {
  async getUserById(call, callback) {
    const { id } = call.request;

    const user = await User.findById(id);

    if (!user) {
      return callback(null, { error: 'User not found' });
    }

    return callback(null, {
      user: { ...user.toObject(), id: user._id, password: undefined },
    });
  },

  async registerUser(call, callback) {
    const { email, username, password } = call.request.user;

    const user = await User.create({ email, username, password });

    return callback(null, { user: { ...user.toObject(), id: user._id } });
  },

  async loginUser(call, callback) {
    const { email, password } = call.request.user;

    const user = await User.findOne({ email });

    if (!user) {
      return callback(null, { error: 'User not found' });
    }

    if (!(await user.compareHash(password))) {
      return callback(null, { error: 'Invalid password' });
    }

    const token = User.generateToken(user);

    return callback(null, {
      token,
    });
  },
  async authenticate(call, callback) {
    const { token: fullToken } = call.request;

    if (!fullToken) {
      callback(null, { error: 'No token provided' });
    }

    const parts = fullToken.split(' ');

    if (!parts.length === 2) {
      return callback(null, { error: 'Token error' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return callback(null, { error: 'Token malformatted' });
    }

    try {
      const decoded = await promisify(jwt.verify)(token, 'Rodz & Higo');

      const user = await User.findById(decoded.id);

      return callback(null, { user: { ...user.toObject(), id: user._id } });
    } catch (err) {
      return callback(null, { error: 'Token invalid' });
    }
  },
};
