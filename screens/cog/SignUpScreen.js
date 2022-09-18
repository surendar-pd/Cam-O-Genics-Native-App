<<<<<<< HEAD
import { View, Text, TextInput, TouchableOpacity, Alert, Modal, Pressable } from 'react-native'
import React ,{useState, useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
=======
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
>>>>>>> 4d30c8e3e7ac240a1ec4ce432ba48a0c4369b26b
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios'
import server from '../../utils/axios';
import config from '../../config'


const SignUpScreen = () => {

<<<<<<< HEAD
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
=======
    const navigation = useNavigation()

>>>>>>> 4d30c8e3e7ac240a1ec4ce432ba48a0c4369b26b

    const [input, setInput] = useState({
        fullName: "",
        cogcId: "",
        email: '',
        password: '',
    })

    const handleChange = (prop) => (value) => {
        setInput((prevInput) => {
            return { ...prevInput, [prop]: value }
        })
        setError("")
    };

    const [error, setError] = useState("");
    console.log(error)
    const handleCogSignup = async () => {
        try {
            const res = await server({ url: '/api/auth/signup/cog', method: 'post', data: { ...input } })
            console.log(res.data);
            navigation.navigate("Lottie",{msg:"Account created successfuly",nav:"Home"})
        } catch (err) {
            const { data } = err.response;
            if (data.message === "app/request-validation-error") {
                if (data.data.type === "string.empty") {
                    setError(data.data.path[0])
                }
                else if (data.data.type === "string.pattern.base") {
                    setError(`${data.data.path[0]}.pattern`)
                }
                else if (data.data.type === "string.email") {
                    setError(`${data.data.path[0]}.email`)
                }
<<<<<<< HEAD
            }else if (data.message === "auth/account-already-exists"){
                setModalVisible(true)
=======
            } else if (data.message === "auth/account-already-exists") {
                console.log("already exixts")
>>>>>>> 4d30c8e3e7ac240a1ec4ce432ba48a0c4369b26b
            }
            console.log(data)
        }
    }



    return (
        <SafeAreaView className="flex-1 items-center justify-center gap-4 p-8">
<<<<<<< HEAD
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                // statusBarTranslucent={true}
                // onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                // setModalVisible(!modalVisible);
                // }}
                >
                {/* <View className="bg-[#FF9494] flex-row p-4 items-center justify-between rounded"> */}
                <View className="bg-[#ffc10740] flex-row p-4 items-center justify-between">
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-[#ffc107]">Account already exists</Text>
                    <Pressable
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-[#ffc107]">Close</Text>
                    </Pressable>
                </View>
            </Modal>
        <View className="w-full">
            <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-4xl">Sign Up</Text>
        </View>
        <View className="w-full">
            <View className="flex-row items-center gap-2 pb-2">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Name</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "fullName" ? 'block' : 'hidden'}`}>Field cannot be empty</Text>
            </View>
            <TextInput
                defaultValue={input.fullName}
                onChangeText={handleChange('fullName')}
                className={`w-full p-2 border ${error === "fullName" ? 'border-red-500' : 'border-gray-500'} rounded`}
                placeholder=""
            />
        </View>
        <View className="w-full">
            <View className="flex-row items-center gap-2 pb-2">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">COG ID</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "cogcId" ? 'block' : 'hidden'}`}>Field cannot be empty</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "cogcId.pattern" ? 'block' : 'hidden'}`}>Invalid ID </Text>
            </View>
            <TextInput
            defaultValue={input.cogcId}
            onChangeText={handleChange('cogcId')}
            className={`w-full p-2 border rounded ${error === "cogcId" || error === "cogcId.pattern" ? 'border-red-500' : 'border-gray-500'}`}
            placeholder=""
                />
        </View>
        <View className="w-full">
            <View className="flex-row items-center gap-2 pb-2">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Email</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "email" ? 'block' : 'hidden'}`}>Field cannot be empty</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "email.pattern" || error === "email.email" ? 'block' : 'hidden'}`}>Use official email ID</Text>
            </View>
            <TextInput
            defaultValue={input.email}
            onChangeText={handleChange('email')}
            className={`w-full p-2 border border-gray-500 rounded ${error === "email" || error === "email.pattern" ? 'border-red-500' : 'border-gray-500'}`}
            placeholder=""
                />
        </View>
        <View className="w-full">
            <View className="flex-row items-center gap-2 pb-2">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Password</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "password" ? 'block' : 'hidden'}`}>Field cannot be empty</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "password.pattern" ? 'block' : 'hidden'}`}>Minimum 6 characters, with number, text, and special characters</Text>
            </View>
            <TextInput
            defaultValue={input.password}
            onChangeText={handleChange('password')}
            className={`w-full p-2 border border-gray-500 rounded ${error === "password" || error === "password.pattern" ? 'border-red-500' : 'border-gray-500'}`}
            placeholder=""
            />
        </View>
        <View className="w-full">
            <TouchableOpacity onPress={handleCogSignup} className="w-full flex items-center bg-[#C3BEF7] p-4 rounded">
                <Text style={{fontFamily: "Montserrat_500Medium"}} className="">Sign Up</Text>
            </TouchableOpacity>
        </View>
        <View className="w-full flex-row justify-center">
            <Text style={{fontFamily: "Montserrat_500Medium"}}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{fontFamily: "Montserrat_500Medium"}} className="text-[#8a4fff]">Login</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
=======
            <View className="w-full">
                <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-4xl">Sign Up</Text>
            </View>
            <View className="w-full">
                <View className="flex-row items-center gap-2 pb-2">
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-gray-500 mb-2">Name</Text>
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className={`text-red-500 text-xs mb-2 ${error === "fullName" ? 'block' : 'hidden'}`}>Cannot be empty</Text>
                </View>
                <TextInput
                    defaultValue={input.fullName}
                    onChangeText={handleChange('fullName')}
                    className="w-full p-2 border border-gray-500 rounded"
                    placeholder=""
                />
            </View>
            <View className="w-full">
                <View className="flex-row items-center gap-2 pb-2">
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-gray-500 mb-2">COG ID</Text>
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className={`text-red-500 text-xs mb-2 ${error === "cogcId" ? 'block' : 'hidden'}`}>Cannot be empty</Text>
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className={`text-red-500 text-xs mb-2 ${error === "cogcId.pattern" ? 'block' : 'hidden'}`}>Invalid ID </Text>
                </View>
                <TextInput
                    defaultValue={input.cogcId}
                    onChangeText={handleChange('cogcId')}
                    className="w-full p-2 border border-gray-500 rounded"
                    placeholder=""
                />
            </View>
            <View className="w-full">
                <View className="flex-row items-center gap-2 pb-2">
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-gray-500 mb-2">Email</Text>
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className={`text-red-500 text-xs mb-2 ${error === "email" ? 'block' : 'hidden'}`}>Cannot be empty</Text>
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className={`text-red-500 text-xs mb-2 ${error === "email.pattern" || error === "email.email" ? 'block' : 'hidden'}`}>Use official email ID</Text>
                </View>
                <TextInput
                    defaultValue={input.email}
                    onChangeText={handleChange('email')}
                    className="w-full p-2 border border-gray-500 rounded"
                    placeholder=""
                />
            </View>
            <View className="w-full">
                <View className="flex-row items-center gap-2 pb-2">
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-gray-500 mb-2">Password</Text>
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className={`text-red-500 text-xs mb-2 ${error === "password" ? 'block' : 'hidden'}`}>Cannot be empty</Text>
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className={`text-red-500 text-xs mb-2 ${error === "password.pattern" ? 'block' : 'hidden'}`}>Minimum 6 characters, with number, text, and special characters</Text>
                </View>
                <TextInput
                    defaultValue={input.password}
                    onChangeText={handleChange('password')}
                    className="w-full p-2 border border-gray-500 rounded"
                    placeholder=""
                />
            </View>
            <View className="w-full">
                <TouchableOpacity onPress={handleCogSignup} className="w-full flex items-center bg-[#C3BEF7] p-4 rounded">
                    <Text style={{ fontFamily: "Montserrat_500Medium" }} className="">Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full flex-row justify-center">
                <Text style={{ fontFamily: "Montserrat_500Medium" }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{ fontFamily: "Montserrat_500Medium" }} className="text-[#8a4fff]">Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
>>>>>>> 4d30c8e3e7ac240a1ec4ce432ba48a0c4369b26b
    )
}

export default SignUpScreen