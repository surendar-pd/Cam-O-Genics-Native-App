import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './screens/cog/LoginScreen';
import HomeScreen from './screens/cog/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import WelcomeScreen from './screens/WelcomeScreen';
import RoleScreen from './screens/RoleScreen';
import SignUpScreen from './screens/cog/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import CloginScreen from './screens/cogc/CloginScreen';
import CsignUpScreen from './screens/cogc/CsignUpScreen';
import OtpScreen from './screens/OtpScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import LottieScreen from './screens/LottieScreen';
import { useEffect, useState, useMemo } from 'react';

const Stack = createStackNavigator();

export default function App() {

  // const isSignedIn = false;
  // const [user, setUser] = useState();
  const [user, setUser] = useState(AsyncStorage.getItem('user'));

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('user')
      if(token !== null) {
        setUser(token)
      }
    } catch(e) {
        console.log(e)
    }
}

  useEffect(() => {
    getData();
    console.log("user",user)
  },[user])

  let [fontsLoaded, error] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic 
  })

  if (!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <NavigationContainer>
      <TailwindProvider>
        <SafeAreaProvider>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false,
              gestureEnabled : true,
              gesturedirection: "horizontal",
              ...TransitionPresets.SlideFromRightIOS
            }}
            >
              {
                user != "false" ? (
                  <>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                  </>
                ) : (
                  <>
                    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                    <Stack.Screen name="Role" component={RoleScreen}/>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Signup" component={SignUpScreen}/>
                    <Stack.Screen name="Forgot" component={ForgotPasswordScreen}/>
                    <Stack.Screen name="Clogin" component={CloginScreen}/>
                    <Stack.Screen name="Csignup" component={CsignUpScreen}/>
                    <Stack.Screen name="Otp" component={OtpScreen}/>
                    <Stack.Screen name="Newpassword" component={NewPasswordScreen}/>
                    <Stack.Screen name="Lottie" component={LottieScreen}/>
                    {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
                  </>
                )
              }
          </Stack.Navigator>
        </SafeAreaProvider>
      </TailwindProvider>
      <StatusBar style="dark" backgroundColor="#C3BEF7"/>
    </NavigationContainer>
  );
}