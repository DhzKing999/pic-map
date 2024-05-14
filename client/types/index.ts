type Coordinates = {
    accuracy: number;
    latitude: number;
    longitude: number;
};

export type LocationDataType = {
    coords: Coordinates;
};

export interface ImageType
{
    __v: number;
    _id: string;
    createdAt: string;
    latitude: string;
    longitude: string;
    url: string;
    userId: string;
}
