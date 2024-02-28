import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/seu-banco-de-dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB com sucesso!');
});
