import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './screens/cog/LoginScreen';
import HomeScreen from './screens/cog/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './store';

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
import AppRoutes from './AppRoutes';

const Stack = createStackNavigator();

export default function App() {
  // const isSignedIn = false;
  const [user, setUser] = useState(null);

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('user')
      if (token !== null) {
        setUser(token)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData();
    console.log("user", user)
  }, [user])

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

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <SafeAreaProvider>
            {/* <Stack.Navigator
              screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gesturedirection: "horizontal",
                ...TransitionPresets.SlideFromRightIOS
              }}
            > */}
              <AppRoutes />
            {/* </Stack.Navigator> */}
          </SafeAreaProvider>
        </TailwindProvider>
        <StatusBar style="light" backgroundColor="#8a4fff" />
      </NavigationContainer>
    </Provider>
  );
}