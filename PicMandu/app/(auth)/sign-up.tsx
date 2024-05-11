import { View, Text, ScrollView, Image, Alert, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'

import FormFeild from '~/components/Form-Field'
import { Button } from '~/components/Button'
import { MapImage, PicImage } from '~/assets/images'
import { Register, login } from '~/services/auth-services'

import Toast from 'react-native-toast-message'
const SignUp = () =>
{
    const [form, setForm] = useState(
        {
            username: "arzun",
            email: "dahalarjun404@gmail.com",
            password: "11111111"
        }
    )

    const [isSumbitting, setIsSubmitting] = useState(false)

    const submit = async () =>
    {
        setIsSubmitting(true)
        if (!(form.email && form.password))
        {
            return alert("Please Fill Entire Fields")
        } else
        {
            const res = await Register(form)
            if (res.success)
            {
                Toast.show({
                    type: 'success',
                    text1: "Account Created Successfully",
                });
                router.replace('/sign-in')
            }
            else
            {
                Toast.show({
                    type: 'error',
                    text1: res.error,
                });
            }
        }
        setIsSubmitting(false)
    }



    return (

        <View className=' w-full h-screen px-4 my-6 justify-start bg-white p-6  '>
            <Text className='text-5xl  font-atop  text-secondary-100 '>PicMandu</Text>
            <Text className=" text-slate-400 font-bold pb-5 text-xl ">Login</Text>
            <Image source={MapImage} className=' size-40 mx-auto' />
            <View className=' mt-7'>
                <FormFeild
                    title="UserName"
                    value={form.username}
                    handelChangeText={(e) => { setForm({ ...form, username: e }) }}
                    otherStyles="mt-7"
                />
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

export default SignUp