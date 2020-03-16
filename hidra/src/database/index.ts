import mongoose from 'mongoose';

// Iniciar conexão com o banco de dados.
mongoose.connect('mongodb://localhost:27017/hidra', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
