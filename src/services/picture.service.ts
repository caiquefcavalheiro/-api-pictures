import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Picture } from "../entities/picture.entity";
import { AppError } from "../errors/appError";

class PictureService {
  getData = async () => {
    const respository = AppDataSource.getRepository(Picture);

    const pictures = await respository.find();

    return pictures;
  };

  postPicture = async (request: Request, response: Response) => {
    const { titulo, imagem, descricao } = request.body;

    if (!titulo || !imagem || !descricao) {
      throw new AppError(
        404,
        "Uma das chaves não foram passadas, titulo, imagem ou descricao"
      );
    }
    const respository = AppDataSource.getRepository(Picture);

    const picture = new Picture();
    picture.titulo = titulo;
    picture.imagem = imagem;
    picture.descricao = descricao;

    const savePicture = await respository.save(picture);

    return savePicture;
  };
}

export default new PictureService();
