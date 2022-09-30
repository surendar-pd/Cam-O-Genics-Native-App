// import { View, Text } from 'react-native'
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import RoleScreen from './screens/RoleScreen';
import SignUpScreen from './screens/cog/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import CloginScreen from './screens/cogc/CloginScreen';
import CsignUpScreen from './screens/cogc/CsignUpScreen';
import OtpScreen from './screens/OtpScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import LottieScreen from './screens/LottieScreen';
import LoginScreen from './screens/cog/LoginScreen';
import HomeScreen from "./screens/cog/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "./store/features/user";

const Stack = createStackNavigator();

const AppRoutes = () => {
    

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user)
    console.log(user)
    
    useEffect(() => {
        const getUserFromLocalStorage = async () => {
            let data = await AsyncStorage.getItem('cogcUser');
            data = data ? JSON.parse(data) : null;
            if (data) {
                dispatch(loginUser(data))
            }
        };
        getUserFromLocalStorage()
    },[])

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gesturedirection: "horizontal",
                ...TransitionPresets.SlideFromRightIOS
            }}
            >
                {
                    user ? 
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </>
                    :
                    <>
                        <Stack.Screen name="Welcome" component={WelcomeScreen} />
                        <Stack.Screen name="Role" component={RoleScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Signup" component={SignUpScreen} />
                        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
                        <Stack.Screen name="Clogin" component={CloginScreen} />
                        <Stack.Screen name="Csignup" component={CsignUpScreen} />
                        <Stack.Screen name="Otp"  component={OtpScreen} />
                        <Stack.Screen name="Newpassword" options={{gestureEnabled: false }} component={NewPasswordScreen} />
                        <Stack.Screen name="Lottie" options={{gestureEnabled: false }} component={LottieScreen} />
                    </>
                }
            </Stack.Navigator>
    )
}

export default AppRoutes
