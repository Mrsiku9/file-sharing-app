import express from "express";
import upload from "../utils/utils.js"

import {uploadImage} from '../controller/uploadimage-controller.js'
import { getImageLink } from "../controller/uploadimage-controller.js";

const route = express.Router()

route.post('/upload',upload.single('files'), uploadImage)
route.get('/file/:fileId',getImageLink)

export default route;   