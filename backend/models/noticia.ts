import mongoose, { Document } from 'mongoose';

interface NoticiaModel extends Document {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  data: Date;
  link: string;
}

const noticiaSchema = new mongoose.Schema<NoticiaModel>({
  id: { type: Number, required: true },
  imagem: { type: String, required: true },
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  data: { type: Date, default: Date.now },
  link: { type: String, required: true },
});

const Noticia = mongoose.model<NoticiaModel>('Noticia', noticiaSchema);

export default Noticia;

