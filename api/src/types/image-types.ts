import { Document, Schema } from "mongoose";

export interface ImageModelType extends Document
{
    url: string;
    latitude: string;
    longitude: string;
    createdAt: Date;
    userId: Schema.Types.ObjectId
}
