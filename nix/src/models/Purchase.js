const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  userId: String,
  title: String,
  value: Number,
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
