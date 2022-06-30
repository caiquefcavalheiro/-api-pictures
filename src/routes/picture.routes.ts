import { Router } from "express";

import pictureController from "../controllers/picture/picture.controller";

const routesPictures = Router();

routesPictures.get("/", pictureController.getPictures);
routesPictures.post("/", pictureController.postPictures);

export default routesPictures;
