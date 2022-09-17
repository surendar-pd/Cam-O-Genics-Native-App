import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React ,{useState, useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
// import useApi from "../../utils/axios"
import axios from 'axios'
import config from '../../config'


const SignUpScreen = () => {

    const navigation = useNavigation()

    // const [fullName, setFullName] = useState("surendar");
    // const [cogcId, setCogcId] = useState("COG123456");
    // const [email, setEmail] = useState("sp2735@srmist.edu.in");
    // const [password, setPassword] = useState("suren@007");

    const [input, setInput] = useState({
        fullName: "",
        cogcId: "",
        email: '',
        password: '',
    })

    const handleChange = (prop) => (value) => {
        setInput((prevInput) => {
            return {...prevInput, [prop]: value}
        })
        setError("")
    };

    const [error, setError] = useState("");
    console.log(error)

    const handleCogSignup = async () => {
        try {
            const res = await axios.post("https://cogc-dev.onrender.com/api/auth/signup/cog", {...input})
            console.log(res.data);
            navigation.navigate("Lottie")
        } catch (err) {
            const {data} = err.response;
            if (data.message === "app/request-validation-error"){
                if (data.data.type === "string.empty"){
                    setError(data.data.path[0])
                }
                else if(data.data.type === "string.pattern.base"){
                    setError(`${data.data.path[0]}.pattern`)
                }
                else if(data.data.type === "string.email"){
                    setError(`${data.data.path[0]}.email`)
                }
            }else if (data.message === "auth/account-already-exists"){
                console.log("already exixts")
            }
            console.log(data)
        }
    }

    return (
        <SafeAreaView className="flex-1 items-center justify-center gap-4 p-8">
        <View className="w-full">
            <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-4xl">Sign Up</Text>
        </View>
        <View className="w-full">
            <View className="flex-row items-center gap-2 pb-2">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Name</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "fullName" ? 'block' : 'hidden'}`}>Cannot be empty</Text>
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
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">COG ID</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "cogcId" ? 'block' : 'hidden'}`}>Cannot be empty</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "cogcId.pattern" ? 'block' : 'hidden'}`}>Invalid ID </Text>
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
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Email</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "email" ? 'block' : 'hidden'}`}>Cannot be empty</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "email.pattern" || error === "email.email" ? 'block' : 'hidden'}`}>Use official email ID</Text>
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
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Password</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "password" ? 'block' : 'hidden'}`}>Cannot be empty</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "password.pattern" ? 'block' : 'hidden'}`}>Minimum 6 characters, with number, text, and special characters</Text>
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
    )
}

export default SignUpScreen