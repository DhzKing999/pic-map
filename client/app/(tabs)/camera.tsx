import React, { useState } from 'react';
import { Image, View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { postImage } from '~/services/image-services';
import { useLocationStore } from '~/store/store';
import { Button } from '~/components/Button';
import Toast from 'react-native-toast-message';

export default function ImagePickerExample()
{
    const [image, setImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { coords } = useLocationStore();

    const launchCamera = async () =>
    {
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

    const uploadImage = async () =>
    {
        try
        {
            setIsLoading(true);
            // const data = new FormData();
            // //@ts-ignore
            // data.append('file', {
            //     uri: image,
            //     type: 'image/jpeg',
            //     name: 'image.jpg',
            // });
            // data.append('upload_preset', 'ml_default');
            // data.append('cloud_name', 'dzsl2h59g');
            // const response = await fetch(
            //     'https://api.cloudinary.com/v1_1/dzsl2h59g/image/upload',
            //     {
            //         method: 'POST',
            //         body: data,
            //         headers: {
            //             'Content-Type': 'multipart/form-data',
            //         },
            //     }
            // );
            // const res = await response.json();
            const apiResponse = await postImage({
                // url: res.secure_url,
                url: " dsdasdasdas",
                latitude: coords?.coords.latitude!,
                longitude: coords?.coords.longitude!,
            });
            Toast.show({
                type: 'success',
                text1: "Image Added",
            });
            //setImage('')

        } catch (error)
        {
            console.log(error);
        } finally
        {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Select Image  </Text>
            {image ? (
                <Image source={{ uri: image }} style={styles.image} />
            ) : (
                <View style={styles.imageContainer}>
                    <Text style={styles.placeholder}>No image selected</Text>
                </View>
            )}
            <View style={styles.buttonContainer}>
                <Button title="Launch Camera" onPress={launchCamera} />
                {isLoading ? <ActivityIndicator size="large" className='-mt-[20px]' color="orange" />
                    :
                    <Button
                        title="Upload Image"
                        onPress={uploadImage}
                        disabled={!image || isLoading}
                    />
                }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "orange"
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    placeholder: {
        color: 'orange',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
});