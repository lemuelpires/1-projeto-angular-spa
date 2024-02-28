const Noticia = require('../models/noticia');

// Criar uma nova notícia
const criarNoticia = async (req, res) => {
  try {
    const novaNoticia = await Noticia.create(req.body);
    res.status(201).json(novaNoticia);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a notícia' });
  }
};

// Obter todas as notícias
const obterTodasNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.find();
    res.status(200).json(noticias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter notícias' });
  }
};

module.exports = {
  criarNoticia,
  obterTodasNoticias,
};
