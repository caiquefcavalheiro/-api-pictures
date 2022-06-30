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
        400,
        "Uma das chaves não foram passadas, titulo, imagem ou descricao"
      );
    }

    const respository = AppDataSource.getRepository(Picture);

    const findPicture = await respository.findOneBy({ titulo });
    if (findPicture) {
      throw new AppError(409, "Este título já está registrado!!");
    }

    const picture = new Picture();
    picture.titulo = titulo;
    picture.imagem = imagem;
    picture.descricao = descricao;

    const savePicture = await respository.save(picture);

    return savePicture;
  };

  async deletePicture(request: Request, response: Response) {
    const { id } = request.params;

    const repository = AppDataSource.getRepository(Picture);
    const picture = await repository.findOneBy({ id });
    if (picture) {
      await repository.delete(id);
      return `${picture.titulo} deletado do banco de dados`;
    } else {
      throw new AppError(404, `Não foi encontrado o id ${id}`);
    }
  }
}

export default new PictureService();
