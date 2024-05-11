import { View, Text, TextInput, TouchableOpacity, Image, ViewStyle, TextInputProps } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';


interface FormFieldProps extends TextInputProps
{
    title: string;
    value: string;
    handelChangeText: (text: string) => void;
    otherStyles?: string;
    placeholder?: string;

}


const FormFeild = (
    {
        title,
        value,
        handelChangeText,
        otherStyles,
        placeholder,
        ...props
    }: FormFieldProps
) =>
{
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={` space-y-2  mt-7 ${otherStyles}}`}>
            <Text className=" text-base text-gray-600 font-pmedium">
                {title}
            </Text>
            <View className="w-full border-2 h-14 px-4 border-gray-400 flex-row rounded-full focus:border-secondary items-center ">
                <TextInput
                    className="flex-1 text-base  text-black font-psemibold px-4"
                    value={value}
                    placeholder={placeholder}
                    onChangeText={handelChangeText}
                    placeholderTextColor={'gray'}
                    secureTextEntry={title === 'Password' && !showPassword}
                />
                {title === "Password" &&
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {/* <Image
                            resizeMode='contain'
                            className={" w-6 h-6"}
                            source={!showPassword ? icons.eye : icons.eyeHide} /> */}
                        <FontAwesome name='eye' />
                        <FontAwesome6 name='eye-slash' />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default FormFeild