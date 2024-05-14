import { View, Text, ScrollView, Image, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'

import AsyncStorage from '@react-native-async-storage/async-storage';

import FormFeild from '~/components/Form-Field'
import { Button } from '~/components/Button'
import { MapImage, PicImage } from '~/assets/images'
import { login } from '~/services/auth-services'

const SignIn = () =>
{
    const [form, setForm] = useState(
        {
            email: "dahalarjun404@gmail.com",
            password: "11111111"
        }
    )

    const [isSumbitting, setIsSubmitting] = useState(false)

    const submit = async () =>
    {
        setIsSubmitting(true)
        try
        {
            if (!(form.email && form.password))
            {
                alert("Please Fill Entire Fields")
            } else
            {
                const res = await login(form)
                if (res.user)
                {
                    await AsyncStorage.setItem('user-data', JSON.stringify(res.user));
                    await AsyncStorage.setItem('user-token', JSON.stringify(res.token));
                    router.replace('/(tabs)/map')
                }
            }
        } catch (error)
        {
            console.log(error)
        } finally
        {
            setIsSubmitting(false)
        }
    }



    return (

        <View className=' w-full h-screen px-4 my-6 justify-start bg-white p-6  '>
            <Text className='text-5xl  font-atop  text-secondary-100 '>PicMandu</Text>
            <Text className=" text-slate-400 font-bold pb-5 text-xl ">Login</Text>
            <Image source={MapImage} className=' size-40 mx-auto' />
            <View className=' mt-7'>
                <FormFeild
                    title="Email"
                    value={form.email}
                    handelChangeText={(e) => { setForm({ ...form, email: e }) }}
                    otherStyles="mt-6"
                    keyboardType="email-address"
                />
                <FormFeild
                    title="Password"
                    value={form.password}
                    handelChangeText={(e) => { setForm({ ...form, password: e }) }}
                    otherStyles="mt-7"
                />

            </View>
            {!isSumbitting && <Button
                title={"Login"}
                onPress={submit}
                className="mt-10"
                disabled={isSumbitting}
            />}

            {isSumbitting &&
                <ActivityIndicator className='mt-20' color={"orange"} />
            }



            <View className="flex pt-10 flex-row justify-center gap-x-2 items-center">
                <Text className=" text-lg text-center text-gray-100 font-pregular">
                    Don't Have an account ?
                </Text>
                <Link href={'/sign-up'} className=' text-secondary  -translate-y-1 text-lg'>Sign Up</Link>
            </View>


        </View>



    )
}

export default SignIn