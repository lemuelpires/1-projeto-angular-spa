import express from 'express';
import noticiaController from '../controllers/noticiaController';

const router = express.Router();

// Rotas para as notícias
router.post('/noticias', noticiaController.criarNoticia);
router.get('/noticias', noticiaController.obterTodasNoticias);

// Adicione mais rotas conforme necessário

export default router;
