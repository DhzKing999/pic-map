import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample()
{
    const [image, setImage] = useState("");
    const launchCamera = async () =>
    {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled)
        {
            setImage(result.assets[0].uri);
        }
    };

    //upload the image to cloudinary 

    const uploadImage = async () =>
    {
        const data = new FormData();
        //@ts-ignore
        data.append('file', {
            uri: image,
            type: 'image/jpeg',
            name: 'image.jpg',
        });
        data.append('upload_preset', 'ml_default');
        data.append('cloud_name', 'dzsl2h59g');

        const response = await fetch('https://api.cloudinary.com/v1_1/dzsl2h59g/image/upload', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        const res = await response.json();
        console.log(res);
    };
    return (
        <View style={styles.container}>
            <Button title="Pick an image from camera roll" onPress={launchCamera} />
            <Button title="Upload image" onPress={uploadImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
});
