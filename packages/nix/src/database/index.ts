import mongoose from 'mongoose';

const {
  MONGO_USER: user,
  MONGO_PASS: pass,
  MONGO_ADDRESS: address = 'localhost:27017',
} = process.env;

const beforeAddress = user && pass ? `${user}:${pass}@` : '';

// Iniciar conexão com o banco de dados.
mongoose.connect(`mongodb://${beforeAddress}${address}/nix`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
