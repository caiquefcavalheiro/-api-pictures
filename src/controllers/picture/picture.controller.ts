import { Request, Response } from "express";
import pictureService from "../../services/picture.service";

class PictureController {
  async getPictures(request: Request, response: Response) {
    const data = await pictureService.getData();
    return response.status(200).json(data);
  }

  async postPictures(request: Request, response: Response) {
    const picture = await pictureService.postPicture(request, response);
    return response.status(201).json(picture);
  }

  async deletePictures(request: Request, response: Response) {
    const deletePicture = await pictureService.deletePicture(request, response);
    return response.status(200).json(deletePicture);
  }
}

export default new PictureController();
