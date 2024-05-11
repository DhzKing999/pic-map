import { Schema, model } from "mongoose";
import { ImageModelType } from "../types/image-types";


const ImageModelSchema = new Schema<ImageModelType>({
    url: { type: String, required: true},
    latitude:{type:String, required:true},
    longitude:{type:String, required:true},
    createdAt:{type:Date, default:Date.now},
    userId:{type:Schema.Types.ObjectId,ref:'UserTable'}
});



export const ImageModel = model<ImageModelType>('ImageTable', ImageModelSchema);
