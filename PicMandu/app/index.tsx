import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PicImage } from '~/assets/images'
import { Button } from '~/components/Button'
import { Redirect, router } from 'expo-router'

import AsyncStorage from '@react-native-async-storage/async-storage'

const HomePage = () =>
{
    useEffect(() =>
    {
        const getData = async (): Promise<any | null> =>
        {
            try
            {
                const jsonValue = await AsyncStorage.getItem('user-data');
                if (jsonValue)
                {
                    router.replace('/(tabs)/map')
                } else
                {
                    console.log("NOt loffed in")
                }
            } catch (e)
            {
                console.log(e)
            }
        };
        getData()
    })


    return (
        <View className='flex-1 justify-evenly items-center bg-white'>
            <View className='items-center'>
                <Text className='text-5xl  font-atop  text-secondary-100 '>PicMandu</Text>
                <Text className='text-2xl font-pbold '>Capture moment in Map</Text>
            </View>
            <Image className='w-80 h-80 ' source={PicImage} />
            <Button title='Continue' className='px-20' onPress={() => router.replace('/sign-in')} />
        </View>
    )
}

export default HomePage