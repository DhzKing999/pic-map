import { NextFunction, Request, Response } from "express";
import { ImageModel } from "../../models/image-model";

//cntroller for getting all images
export const getAllImageController = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const userId = res.locals.user
        const images = await ImageModel.find({ userId });
        res.json({
            success: true,
            data: images
        })
    } catch (error)
    {
        console.log(error)
        next(error);
    }
}