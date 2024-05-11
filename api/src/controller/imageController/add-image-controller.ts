

import { NextFunction, Request, Response } from "express";
import { ImageModel } from "../../models/image-model";


export const addImageController = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const userId = res.locals.user
        const { url, longitude, latitude } = req.body
        console.log(req.body)
        const newImage = await ImageModel.create({ url, longitude, latitude, userId })
        res.json({
            success: true,
            message: "image added successfully",
            data: newImage
        })
    } catch (error)
    {
        next(error);
    }
};