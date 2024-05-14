import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageType } from "~/types";

const baseUrl = 'http://192.168.1.80:4000/api/v1';

export const postImage = async ({ url, latitude, longitude }: { url: string, latitude: number, longitude: number }) =>
{
    try
    {
        // Retrieve token from AsyncStorage
        const token = await AsyncStorage.getItem('user-token');
        console.log(token)
        const bodyy = JSON.stringify({ url, latitude, longitude });
        console.log(bodyy)
        const response = await fetch(`${baseUrl}/image`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ url, latitude, longitude }),
        });
        const data = await response.json();
        return data;
    } catch (error)
    {
        return error;
    }
};


export const getImage = async (): Promise<ImageType[] | any> =>
{
    try
    {
        // Retrieve token from AsyncStorage
        const token = await AsyncStorage.getItem('user-token');
        const response = await fetch(`${baseUrl}/image`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data.data;
    } catch (error)
    {
        return error;
    }
}