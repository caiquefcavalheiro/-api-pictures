import { Request, Response } from "express";
import pictureService from "../../services/picture.service";

class PictureController {
  async getPictures(request: Request, response: Response) {
    const data = await pictureService.getData();
    return response.status(200).json(data);
  }

  async postPictures(request: Request, response: Response) {
    const picture = await pictureService.postPicture(request, response);
  }
}

export default new PictureController();
