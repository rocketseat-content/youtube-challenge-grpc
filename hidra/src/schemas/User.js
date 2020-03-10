const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  email: String,
  username: String,
  password: String,
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();

  this.password = await bcrypt.hash(this.password, 8);
});

module.exports=  mongoose.model('User', userSchema);
