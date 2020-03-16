import mongoose, { Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface IUser extends Document {
  id: string;
  email: string;
  username: string;
  password: string;
  compareHash: (hash: string) => Promise<boolean>;
}

export interface IUserModel extends Model<IUser> {
  generateToken: (id: string) => string;
}

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: String,
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) next();

  (this as IUser).password = await bcrypt.hash((this as IUser).password, 8);
});

UserSchema.methods = {
  compareHash(hash: string) {
    return bcrypt.compare(hash, this.password);
  },
};

UserSchema.statics = {
  generateToken(id: string) {
    return jwt.sign({ id }, 'Rodz & Higo', {
      expiresIn: '7d',
    });
  },
};

export default mongoose.model<IUser, IUserModel>('User', UserSchema);
